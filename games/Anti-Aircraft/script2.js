// Audio System supporting actual audio file from project folder
const AudioSys = {
    gunSound: new Audio('freesound_community-g36-e-fire-88029.mp3'), // ไฟล์เสียงปืนในโฟลเดอร์เดียวกัน
    ctx: null,

    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    },

    playGunshot() {
        // เล่นไฟล์เสียงจริง (สามารถยิงรัวซ้อนกันได้โดยการ clone node)
        const soundClone = this.gunSound.cloneNode();
        soundClone.volume = 0.6;
        soundClone.play().catch(e => console.log("Audio play blocked or missing file:", e));
    },

    playMissile() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.4);
    },

    playExplosion() {
        this.init();
        const bufferSize = this.ctx.sampleRate * 0.6;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass'; filter.frequency.setValueAtTime(300, this.ctx.currentTime);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);
        noise.connect(filter); filter.connect(gain); gain.connect(this.ctx.destination);
        noise.start();
    }
};

let scene, camera, renderer;
let turret;
let enemies = [], bullets = [], homingMissiles = [];
let score = 0, lives = 3, missileAmmo = 3;
let isGameOver = false;

let radarAngle = 0;
let yaw = 0;
const maxYaw = 0.55;
const keys = { a: false, d: false };

init();
animate();

function init() {
    const container = document.getElementById('canvas-container');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);
    scene.fog = new THREE.FogExp2(0x020617, 0.003);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 2, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(100, 300, 100);
    scene.add(sun);

    buildSpaceEnvironment();
    buildAAAntiaircraftGun();
    spawnEnemyLoop();

    window.addEventListener('keydown', (e) => handleKey(e, true));
    window.addEventListener('keyup', (e) => handleKey(e, false));
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('resize', onWindowResize);
}

function buildSpaceEnvironment() {
    const grid = new THREE.GridHelper(3000, 100, 0x38bdf8, 0x1e293b);
    grid.position.y = -0.5;
    scene.add(grid);

    const floorGeo = new THREE.PlaneGeometry(3000, 3000);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x020617, roughness: 0.9, metalness: 0.2 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.6;
    scene.add(floor);

    const starsGeo = new THREE.BufferGeometry();
    const starCount = 1000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
        starPositions[i] = (Math.random() - 0.5) * 2000;
        starPositions[i + 1] = Math.random() * 800 + 50;
        starPositions[i + 2] = (Math.random() - 0.5) * 2000;
    }

    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.0, transparent: true, opacity: 0.8 });
    const starField = new THREE.Points(starsGeo, starsMat);
    scene.add(starField);
}

function buildAAAntiaircraftGun() {
    turret = new THREE.Group();
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.3 });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 3.2, 1.5, 16), baseMat);
    base.position.y = 0.75;
    turret.add(base);

    const barrelGroup = new THREE.Group();
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9 });

    const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.5), barrelMat);
    b1.rotation.x = Math.PI / 2; b1.position.set(-0.3, 0, -1.5);
    const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.5), barrelMat);
    b2.rotation.x = Math.PI / 2; b2.position.set(0.3, 0, -1.5);

    barrelGroup.add(b1, b2);
    barrelGroup.name = "barrels";
    barrelGroup.position.y = 1.5;
    turret.add(barrelGroup);

    scene.add(turret);
}

function handleKey(e, isPressed) {
    if (isGameOver) return;
    switch (e.code) {
        case 'KeyA': keys.a = isPressed; break;
        case 'KeyD': keys.d = isPressed; break;
        case 'Space':
            if (isPressed && !keys.space && missileAmmo > 0) {
                fireHomingMissile();
                keys.space = true;
            }
            break;
    }
}

window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') keys.space = false;
});

function onMouseDown(e) {
    if (isGameOver || e.button !== 0) return;
    fireMachineGun();
}

function fireMachineGun() {
    AudioSys.playGunshot(); // เรียกใช้เสียงไฟล์จริงที่เตรียมไว้[cite: 17]
    const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
    bullet.position.copy(camera.position);

    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);

    bullets.push({ mesh: bullet, vel: dir.multiplyScalar(12.0), life: 100 });
    scene.add(bullet);
}

function fireHomingMissile() {
    missileAmmo--;
    document.getElementById('missile-val').innerText = missileAmmo;
    AudioSys.playMissile();

    const missile = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.8, 8), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
    missile.rotation.x = Math.PI / 2;
    missile.position.copy(camera.position);

    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);

    let target = enemies.length > 0 ? enemies[0] : null;
    homingMissiles.push({ mesh: missile, vel: dir.multiplyScalar(4.5), target: target, life: 180 });
    scene.add(missile);
}

function spawnEnemyLoop() {
    setInterval(() => {
        if (isGameOver) return;
        if (enemies.length < 4) createFighterJet();
    }, 2500);
}

function createFighterJet() {
    const jetGroup = new THREE.Group();
    const jetMat = new THREE.MeshStandardMaterial({ color: 0xff2244, emissive: 0xff0022, emissiveIntensity: 0.6, roughness: 0.2 });
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xff5577, emissive: 0xff1133, emissiveIntensity: 0.4 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 });

    const body = new THREE.Mesh(new THREE.ConeGeometry(0.8, 5.0, 6), jetMat);
    body.rotation.x = Math.PI / 2;
    const wings = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.1, 1.4), wingMat);
    wings.position.set(0, 0, 0.5);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 1.0), wingMat);
    tail.position.set(0, 0.6, 1.8);
    tail.rotation.x = -0.3;
    const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 8), glassMat);
    canopy.scale.set(0.8, 0.8, 2.0);
    canopy.position.set(0, 0.4, -0.2);

    jetGroup.add(body, wings, tail, canopy);

    const startX = (Math.random() - 0.5) * 60;
    jetGroup.position.set(startX, 2.0, -900);

    scene.add(jetGroup);
    enemies.push({
        mesh: jetGroup,
        speed: 0.6 + Math.random() * 0.3,
        wobbleTimer: Math.random() * 10
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (isGameOver) return;

    if (keys.a) yaw += 0.025;
    if (keys.d) yaw -= 0.025;
    yaw = Math.max(-maxYaw, Math.min(maxYaw, yaw));

    camera.rotation.order = 'YXZ';
    camera.rotation.y = yaw;
    camera.rotation.x = 0.0;

    turret.rotation.y = yaw;

    updateScreenFlashEffect();

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.mesh.position.add(b.vel);
        b.life--;

        for (let j = enemies.length - 1; j >= 0; j--) {
            const en = enemies[j];
            if (b.mesh.position.distanceTo(en.mesh.position) < 5.0) {
                destroyEnemy(j);
                scene.remove(b.mesh);
                bullets.splice(i, 1);
                break;
            }
        }
        if (b.life <= 0) { scene.remove(b.mesh); bullets.splice(i, 1); }
    }

    // Update missiles
    for (let i = homingMissiles.length - 1; i >= 0; i--) {
        const m = homingMissiles[i];
        m.life--;

        if (m.target && enemies.find(e => e.mesh === m.target.mesh)) {
            const targetDir = m.target.mesh.position.clone().sub(m.mesh.position).normalize();
            m.vel.lerp(targetDir.multiplyScalar(6.0), 0.15);
        }

        m.mesh.position.add(m.vel);
        m.mesh.lookAt(m.mesh.position.clone().add(m.vel));

        let hit = false;
        for (let j = enemies.length - 1; j >= 0; j--) {
            const en = enemies[j];
            if (m.mesh.position.distanceTo(en.mesh.position) < 6.0) {
                destroyEnemy(j);
                hit = true;
                break;
            }
        }
        if (hit || m.life <= 0) { scene.remove(m.mesh); homingMissiles.splice(i, 1); }
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.wobbleTimer += 0.04;

        en.mesh.position.z += en.speed;
        en.mesh.position.x += Math.sin(en.wobbleTimer) * 0.35;
        en.mesh.lookAt(0, 2.0, 0);

        if (en.mesh.position.z >= 0) {
            lives--;
            updateLivesDisplay();
            AudioSys.playExplosion();

            scene.remove(en.mesh);
            enemies.splice(i, 1);

            if (lives <= 0) triggerGameOver();
        }
    }

    renderRadar();
    renderer.render(scene, camera);
}

function updateScreenFlashEffect() {
    const flashEl = document.getElementById('screen-flash');
    if (!flashEl) return;

    if (enemies.length > 0) {
        const pulse = Math.sin(Date.now() * 0.015) * 0.5 + 0.5;
        const alpha = 0.12 + pulse * 0.22;
        flashEl.style.backgroundColor = `rgba(239, 68, 68, ${alpha})`;
    } else {
        flashEl.style.backgroundColor = 'rgba(239, 68, 68, 0)';
    }
}

function updateLivesDisplay() {
    let hearts = '';
    for (let i = 0; i < lives; i++) hearts += '❤️';
    for (let i = lives; i < 3; i++) hearts += '🖤';
    document.getElementById('lives-val').innerHTML = hearts;
}

function destroyEnemy(index) {
    AudioSys.playExplosion();
    score += 150;
    document.getElementById('score-val').innerText = score;
    scene.remove(enemies[index].mesh);
    enemies.splice(index, 1);
}

function renderRadar() {
    const canvas = document.getElementById('radar-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 130, 130);

    ctx.fillStyle = 'rgba(2, 20, 10, 0.95)';
    ctx.beginPath(); ctx.arc(65, 65, 60, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(65, 65, 30, 0, Math.PI * 2); ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(65, 5); ctx.lineTo(65, 125);
    ctx.moveTo(5, 65); ctx.lineTo(125, 65);
    ctx.stroke();

    radarAngle += 0.04;
    ctx.save();
    ctx.translate(65, 65);
    ctx.rotate(radarAngle);

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 60);
    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 60, 0, Math.PI / 3);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(Math.PI / 3) * 60, Math.sin(Math.PI / 3) * 60);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.beginPath(); ctx.arc(65, 65, 3, 0, Math.PI * 2); ctx.fill();

    enemies.forEach(en => {
        const rx = 65 + en.mesh.position.x * 0.08;
        const ry = 65 + (en.mesh.position.z + 450) * 0.08;
        if (Math.hypot(rx - 65, ry - 65) < 56) {
            const flashAlpha = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
            ctx.fillStyle = `rgba(244, 63, 94, ${0.4 + flashAlpha * 0.6})`;
            ctx.beginPath(); ctx.arc(rx, ry, 3.5, 0, Math.PI * 2); ctx.fill();
        }
    });
}

function triggerGameOver() {
    isGameOver = true;
    AudioSys.playExplosion();
    document.getElementById('final-score').innerText = `คะแนนป้องกันฐานของคุณ: ${score}`;
    document.getElementById('game-over-modal').classList.add('active');
}

function restartGame() {
    score = 0; lives = 3; missileAmmo = 3; isGameOver = false;
    document.getElementById('score-val').innerText = score;
    updateLivesDisplay();
    document.getElementById('missile-val').innerText = missileAmmo;
    document.getElementById('game-over-modal').classList.remove('active');

    enemies.forEach(en => scene.remove(en.mesh)); enemies = [];
    bullets.forEach(b => scene.remove(b.mesh)); bullets = [];
    homingMissiles.forEach(m => scene.remove(m.mesh)); homingMissiles = [];
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}