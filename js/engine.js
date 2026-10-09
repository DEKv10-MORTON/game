// js/engine.js

const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get('level') || 'm1';
const topic = urlParams.get('topic') || 'topic1';

const storageKey = `mord_progress_${level}_${topic}`;
let completedDays = parseInt(localStorage.getItem(storageKey) || '1');
const totalDays = 10;
const questionsPerDay = 10;

let currentDay = completedDays <= totalDays ? completedDays : totalDays;
let currentQuestionInDay = 1;
let activeInputBox = null;

// เริ่มต้นทำงานเมื่อโหลดหน้าเว็บ
window.onload = function() {
  console.log("โหลดเนื้อหาสำหรับ:", level, topic);
  initEngine();
};

function initEngine() {
  renderEngine();
}

function renderTracker() {
  const trackerEl = document.getElementById('dayTracker');
  if (!trackerEl) return;
  trackerEl.innerHTML = '';
  
  for (let d = totalDays; d >= 1; d--) {
    const isCompleted = d < completedDays || (d === completedDays && localStorage.getItem(`${storageKey}_day_${d}_done`) === 'true');
    const isActive = (d === currentDay && !isCompleted);
    const isUnlocked = isCompleted || (d <= completedDays);

    const item = document.createElement('div');
    item.className = `tracker-item ${isCompleted ? 'completed' : isActive ? 'active' : ''} ${isUnlocked ? 'unlocked' : 'locked'}`;
    if (isUnlocked) item.onclick = () => jumpToDay(d);
    
    item.innerHTML = `<div class="tracker-dot"></div>${d === 1 ? '<span class="tracker-label-bottom">D</span>' : ''}`;
    trackerEl.appendChild(item);
  }
}

function jumpToDay(dayNum) {
  currentDay = dayNum;
  currentQuestionInDay = 1;
  renderEngine();
}

function renderEngine() {
  const badgeEl = document.getElementById('stepBadge');
  if (badgeEl) badgeEl.innerText = `วันที่ ${currentDay} | ข้อที่ ${currentQuestionInDay} / ${questionsPerDay}`;
  
  renderTracker();

  // 1. รวมฐานข้อมูลทั้งหมดเข้าด้วยกันเพื่อค้นหารหัส topic ได้โดยตรงทันที
  let allDatabases = {};
  if (typeof masterLessonDatabase !== 'undefined') {
    Object.keys(masterLessonDatabase).forEach(lvlKey => {
      Object.assign(allDatabases, masterLessonDatabase[lvlKey]);
    });
  }
  if (typeof database_m2 !== 'undefined') {
    Object.assign(allDatabases, database_m2);
  }

  // 2. ค้นหาข้อมูล topic จาก URL โดยตรง (เช่น 'm1_t1_c2', 'm2_t1_c1')
  let topicData = allDatabases[topic];

  // 3. ถ้ารหัสตรงๆ ยังไม่เจอ ให้ลองหาตามโครงสร้างแยกตาม level เดิมสำรองไว้
  if (!topicData) {
    let selectedDatabase = typeof masterLessonDatabase !== 'undefined' ? masterLessonDatabase : {};
    if (level === 'm2' && typeof database_m2 !== 'undefined') {
      selectedDatabase = database_m2;
    }
    const levelData = selectedDatabase[level] || selectedDatabase['m1'] || {};
    topicData = levelData[topic];
  }

  // 4. ถ้ายังไม่พบจริงๆ ให้ดึงตัวแรกสุดในระบบมาใช้ป้องกันเว็บพัง
  if (!topicData) {
    const allKeys = Object.keys(allDatabases);
    if (allKeys.length > 0) {
      topicData = allDatabases[allKeys[0]];
      console.warn(`ไม่พบ topic '${topic}' ในระบบ กำลังใช้ข้อมูลสำรองแทน`);
    }
  }

  const titleEl = document.getElementById('headerTitle');
  if (titleEl) titleEl.innerText = `💻 ${topicData && topicData.title ? topicData.title : "Math Scaffolding Engine"}`;

  // ดึงข้อมูลโจทย์ รองรับทั้งแบบ Function, Array และ Object
  let qData = null;
  if (topicData && topicData.days) {
    if (typeof topicData.days === 'function') {
      qData = topicData.days(currentDay, currentQuestionInDay);
    } else if (Array.isArray(topicData.days)) {
      const dayObj = topicData.days[currentDay - 1] || topicData.days[0];
      qData = dayObj ? dayObj[currentQuestionInDay - 1] : null;
    } else if (typeof topicData.days === 'object') {
      const dayArr = topicData.days[currentDay] || topicData.days[1];
      qData = dayArr ? dayArr[currentQuestionInDay - 1] : null;
    }
  }

  const container = document.getElementById('scaffoldContent');
  if (!container) return;
  
  if (!qData) {
    container.innerHTML = `<div class="question-box">ไม่พบข้อมูลโจทย์ในระบบ กรุณาตรวจสอบโครงสร้างข้อมูลใน database.js</div>`;
    return;
  }

  let leftHtml = `
    <div class="scaffold-board-left">
      <div class="question-box">
        <b>โจทย์:</b> ${qData.question || qData.qText || "โจทย์ฝึกหัด"}
      </div>
  `;

  if (qData.steps && Array.isArray(qData.steps)) {
    qData.steps.forEach((st, idx) => {
      leftHtml += `
        <div class="step-card">
          <div class="step-title">ขั้นที่ ${idx + 1}: ${st.label || "คำนวณ"}</div>
          <div class="step-action-row">
            ${st.template.replace('[input]', `<input type="text" class="scaffold-input" id="stepInput_${idx}" data-ans="${st.answer}" onfocus="setActiveInput(this)"> <button class="check-btn" onclick="checkStep(${idx})">ตรวจ</button>`)}
          </div>
          <div class="hint-box" id="hint_${idx}" style="display:none;">💡 คำใบ้: ${st.hint || "ลองตรวจสอบวิธีทำอีกครั้ง"}</div>
        </div>
      `;
    });
  } else {
    leftHtml += `
      <div class="step-card">
        <div class="step-title">ขั้นที่ 1: คำนวณหาคำตอบ</div>
        <div class="step-action-row">
          <span>คำตอบข้อนี้คือ</span>
          <input type="text" class="scaffold-input" id="stepInput_0" data-ans="${qData.answer || ''}" onfocus="setActiveInput(this)">
          <button class="check-btn" onclick="checkStep(0)">ตรวจ</button>
        </div>
        <div class="hint-box" id="hint_0" style="display:none;">💡 คำใบ้: ตรวจสอบตัวเลขให้ถูกต้อง</div>
      </div>
    `;
  }

  leftHtml += `</div>`;

  let rightHtml = `
    <div class="scaffold-board-right">
      <div style="font-size: 13.5px; font-weight: 600; color: #2e7d32; border-bottom: 1px solid #c5e1a5; padding-bottom: 6px;">
        📝 สรุปวิธีทำอย่างเป็นระบบ
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px; font-size: 13.5px; color: #33691e; margin-top: 2px;">
        ${qData.formalSolution ? qData.formalSolution.map(line => `<div>${line}</div>`).join('') : '<div>- ไม่มีข้อมูลสรุปวิธีทำ -</div>'}
      </div>
    </div>
  `;

  container.innerHTML = leftHtml + rightHtml;

  const firstInput = document.getElementById('stepInput_0');
  if (firstInput) {
    activeInputBox = firstInput;
  }
}

function setActiveInput(el) {
  activeInputBox = el;
}

function checkStep(idx) {
  const inputEl = document.getElementById(`stepInput_${idx}`);
  if (!inputEl) return;
  const btnEl = inputEl.nextElementSibling;
  const hintEl = document.getElementById(`hint_${idx}`);

  if (inputEl.value.trim() === inputEl.dataset.ans) {
    inputEl.style.borderColor = '#10b981';
    inputEl.style.color = '#10b981';
    if (btnEl) {
      btnEl.classList.add('correct');
      btnEl.innerText = 'ถูกต้อง!';
    }
    if (hintEl) hintEl.style.display = 'none';
  } else {
    inputEl.style.borderColor = '#ef4444';
    if (hintEl) hintEl.style.display = 'block';
  }
}

function insertSymbol(sym) {
  if (activeInputBox) {
    const startPos = activeInputBox.selectionStart;
    const endPos = activeInputBox.selectionEnd;
    const val = activeInputBox.value;
    
    activeInputBox.value = val.substring(0, startPos) + sym + val.substring(endPos);
    activeInputBox.focus();
    activeInputBox.setSelectionRange(startPos + sym.length, startPos + sym.length);
  }
}

function prevQuestion() {
  if (currentQuestionInDay > 1) {
    currentQuestionInDay--;
    renderEngine();
  } else if (currentDay > 1) {
    currentDay--;
    currentQuestionInDay = questionsPerDay;
    renderEngine();
  }
}

function nextQuestion() {
  if (currentQuestionInDay < questionsPerDay) {
    currentQuestionInDay++;
    renderEngine();
  } else {
    localStorage.setItem(`${storageKey}_day_${currentDay}_done`, 'true');
    if (currentDay >= completedDays) {
      completedDays = currentDay + 1;
      localStorage.setItem(storageKey, completedDays);
    }
    if (currentDay < totalDays) {
      currentDay++;
      currentQuestionInDay = 1;
      renderEngine();
    } else {
      alert("🏆 สุดยอดเซียน! พิชิตบทเรียนนี้ครบทั้ง 10 วันเรียบร้อยแล้ว!");
    }
  }
}

function goBack() {
  window.location.href = '../index.html';
}