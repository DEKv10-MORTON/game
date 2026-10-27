const AudioSys = {
    gunSound: new Audio('freesound_community-g36-e-fire-88029.mp3'),
    radioAttackSound: new Audio('radio6.mp3'),
    ctx: null,

    init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    },

    playGunshot() {
        const soundClone = this.gunSound.cloneNode();
        soundClone.volume = 0.2; // ปรับเสียงปืนให้พอดี ไม่กลบเสียงอื่น
        soundClone.play().catch(e => console.log("Audio play blocked:", e));
    },

    playRadioAttack() {
        const radioClone = this.radioAttackSound.cloneNode();
        radioClone.volume = 0.5;
        radioClone.play().catch(e => console.log("Radio play blocked:", e));
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

const RadioSys = {
    clips: [
        new Audio('radio1.mp3'),
        new Audio('radio2.mp3'),
        new Audio('radio3.mp3'),
        new Audio('radio4.mp3'),
        new Audio('radio5.mp3'),
        new Audio('radio6.mp3'),
        new Audio('radio7.mp3')
    ],
    initRandomRadio() {
        const playAndSchedule = () => {
            if (isGameOver) return;
            const randomIndex = Math.floor(Math.random() * this.clips.length);
            const selectedAudio = this.clips[randomIndex].cloneNode();
            selectedAudio.volume = 0.4;
            selectedAudio.play().then(() => {
                selectedAudio.onended = () => {
                    setTimeout(playAndSchedule, 3000);
                };
            }).catch(e => {
                setTimeout(playAndSchedule, 3000);
            });
        };
        setTimeout(playAndSchedule, 3000);
    }
};

let scene, camera, renderer;
let turret;
let enemies = [], bullets = [], homingMissiles = [], enemyBullets = [], explosions = [];
let score = 0, lives = 3, missileAmmo = 3;
let isGameOver = false;

let radarAngle = 0;
let yaw = 0;
const maxYaw = 0.55;
const keys = { a: false, d: false };

// ตัวแปรสำหรับควบคุมเอฟเฟกต์ไฟปลายกระบอกปืน
let muzzleFlashMeshes = [];
let flashTimer = 0;

init();
animate();

function init() {
    const container = document.getElementById('canvas-container');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 2, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(100, 300, 100);
    scene.add(sun);

    buildAAAntiaircraftGun();
    spawnEnemyLoop();

    RadioSys.initRandomRadio();

    window.addEventListener('keydown', (e) => handleKey(e, true));
    window.addEventListener('keyup', (e) => handleKey(e, false));
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('resize', onWindowResize);
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

    // --- เพิ่ม Mesh แสงไฟแฟลชที่ปลายกระบอกปืน (Muzzle Flash) ---
    const flashMat = new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending
    });

    const f1 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), flashMat);
    f1.position.set(-0.3, 0, -3.3);

    const f2 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 8, 8), flashMat);
    f2.position.set(0.3, 0, -3.3);

    barrelGroup.add(f1, f2);
    muzzleFlashMeshes = [f1, f2];
    // ----------------------------------------------------

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
    AudioSys.playGunshot();

    // --- สั่งให้แสงไฟแฟลชสว่างวาบที่ปลายกระบอกปืน ---
    muzzleFlashMeshes.forEach(f => {
        f.material.opacity = 0.95;
        f.scale.set(1.4 + Math.random() * 0.4, 1.4 + Math.random() * 0.4, 2.2);
    });
    flashTimer = 3; // คงสภาพแสงแฟลชไว้ประมาณ 3 เฟรมเพื่อให้สมจริง
    // ---------------------------------------------

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

    // สั่งแฟลชไฟปลายกระบอกตอนยิงมิสไซล์ด้วย
    muzzleFlashMeshes.forEach(f => {
        f.material.opacity = 1.0;
        f.scale.set(2.0, 2.0, 3.0);
    });
    flashTimer = 5;

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
        baseX: startX,
        speed: 0.6 + Math.random() * 0.3,
        wobbleTimer: Math.random() * 10,
        fireCooldown: Math.floor(Math.random() * 40) + 30
    });
}

function enemyFireBurst(enemy) {
    if (isGameOver) return;

    AudioSys.playRadioAttack();

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            if (isGameOver || !enemy.mesh.parent) return;

            const bullet = new THREE.Mesh(
                new THREE.SphereGeometry(0.22, 8, 8),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            bullet.position.copy(enemy.mesh.position);

            const targetPos = new THREE.Vector3(
                (Math.random() - 0.5) * 4,
                2.0 + (Math.random() - 0.5) * 2,
                0
            );
            const dir = targetPos.sub(bullet.position).normalize();

            enemyBullets.push({
                mesh: bullet,
                vel: dir.multiplyScalar(3.5),
                life: 150
            });
            scene.add(bullet);
        }, i * 150);
    }
}

function createExplosionEffect(pos) {
    const particleCount = 18;
    const geometry = new THREE.SphereGeometry(0.3, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });

    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(geometry, material);
        particle.position.copy(pos);

        const vel = new THREE.Vector3(
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
        );

        explosions.push({ mesh: particle, vel: vel, life: 30 });
        scene.add(particle);
    }
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

    if (turret) turret.rotation.y = yaw;

    // --- จัดการเฟรมเอฟเฟกต์ไฟแฟลชปลายกระบอกปืน ---
    if (flashTimer > 0) {
        flashTimer--;
        if (flashTimer === 0) {
            muzzleFlashMeshes.forEach(f => f.material.opacity = 0);
        }
    }
    // --------------------------------------------

    // Parallax แพนภาพ Background สวนทางกับการหันปืน
    const bgElement = document.getElementById('game-bg');
    if (bgElement) {
        const basePercent = 50;
        const panOffset = (yaw / maxYaw) * 15;
        bgElement.style.objectPosition = `${basePercent + panOffset}% 65%`;
    }

    updateScreenFlashEffect();

    // Update player bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.mesh.position.add(b.vel);
        b.life--;

        for (let j = enemies.length - 1; j >= 0; j--) {
            const en = enemies[j];
            if (b.mesh.position.distanceTo(en.mesh.position) < 5.0) {
                createExplosionEffect(en.mesh.position);
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
                createExplosionEffect(en.mesh.position);
                destroyEnemy(j);
                hit = true;
                break;
            }
        }
        if (hit || m.life <= 0) { scene.remove(m.mesh); homingMissiles.splice(i, 1); }
    }

    // Update enemy bullets
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
        const eb = enemyBullets[i];
        eb.mesh.position.add(eb.vel);
        eb.life--;

        if (eb.life <= 0 || eb.mesh.position.z > 50) {
            scene.remove(eb.mesh);
            enemyBullets.splice(i, 1);
        }
    }

    // Update explosion particles
    for (let i = explosions.length - 1; i >= 0; i--) {
        const exp = explosions[i];
        exp.mesh.position.add(exp.vel);
        exp.mesh.scale.multiplyScalar(0.92);
        exp.life--;
        if (exp.life <= 0) {
            scene.remove(exp.mesh);
            explosions.splice(i, 1);
        }
    }

    // Update enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
        const en = enemies[i];
        en.wobbleTimer += 0.04;

        en.mesh.position.z += en.speed;
        en.mesh.position.x = en.baseX + Math.sin(en.wobbleTimer) * 1.5;
        en.mesh.lookAt(0, 2.0, 0);

        if (en.mesh.position.z > -600 && en.mesh.position.z < -150) {
            en.fireCooldown--;
            if (en.fireCooldown <= 0) {
                enemyFireBurst(en);
                en.fireCooldown = Math.floor(Math.random() * 80) + 60;
            }
        }

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
        const alpha = 0.06 + pulse * 0.12;
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
    enemyBullets.forEach(eb => scene.remove(eb.mesh)); enemyBullets = [];
    explosions.forEach(exp => scene.remove(exp.mesh)); explosions = [];
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}