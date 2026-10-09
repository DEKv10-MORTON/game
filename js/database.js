// js/database.js

const masterLessonDatabase = {
  m1: {
    topic1: {
      title: "บทที่ 1: จำนวนเต็ม (ม.1 เทอม 1)",
      days: generateDynamicDays("จำนวนเต็ม", (d, q) => {
        const a = (d * 3) + q - 5;
        const b = (q * 4) - 10;
        const ans = a + b;
        return {
          qText: `จงหาผลลัพธ์ของ (${a}) + (${b}) =`,
          ans: `${ans}`,
          solution: [`แนวคิด: การบวกจำนวนเต็ม`, `คำนวณจาก (${a}) + (${b})`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic2: {
      title: "บทที่ 2: การสร้างทางเรขาคณิต (ม.1 เทอม 1)",
      days: generateDynamicDays("การสร้างทางเรขาคณิต", (d, q) => {
        const baseAngle = 30 + (q * 10) + (d * 2);
        const ans = 180 - (baseAngle % 90);
        return {
          qText: `ถ้ามุมหนึ่งมีขนาด ${baseAngle % 150} องศา มุมประชิดบนเส้นตรงเดียวกันจะมีขนาดเท่าใด`,
          ans: `${ans}`,
          solution: [`แนวคิด: มุมบนเส้นตรงเดียวกันรวมกันได้ 180 องศา`, `คำตอบคือ ${ans} องศา`]
        };
      })
    },
    topic3: {
      title: "บทที่ 3: เลขยกกำลัง (ม.1 เทอม 1)",
      days: generateDynamicDays("เลขยกกำลัง", (d, q) => {
        const base = (q % 3) + 2;
        const exp = (d % 3) + 1;
        const ans = Math.pow(base, exp);
        return {
          qText: `จงหาค่าของ ${base} ยกกำลัง ${exp}`,
          ans: `${ans}`,
          solution: [`แนวคิด: การคูณฐานซ้ำๆ ${exp} ครั้ง`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic4: {
      title: "บทที่ 4: ทศนิยมและเศษส่วน (ม.1 เทอม 1)",
      days: generateDynamicDays("ทศนิยมและเศษส่วน", (d, q) => {
        const dec1 = (q * 0.2).toFixed(1);
        const dec2 = (d * 0.1).toFixed(1);
        const ans = (parseFloat(dec1) + parseFloat(dec2)).toFixed(1);
        return {
          qText: `จงหาผลลัพธ์ของ ${dec1} + ${dec2} =`,
          ans: `${ans}`,
          solution: [`แนวคิด: การบวกทศนิยมตั้งหลักให้ตรงกัน`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic5: {
      title: "บทที่ 5: รูปเรขาคณิตสองมิติและสามมิติ (ม.1 เทอม 1)",
      days: generateDynamicDays("รูปเรขาคณิต", (d, q) => {
        const sides = 3 + (q % 5);
        const ans = sides * 2;
        return {
          qText: `ปริซึมที่มีฐานเป็นรูปเหลี่ยม ${sides} ด้าน จะมีจำนวนขอบทั้งหมดกี่ขอบ`,
          ans: `${ans}`,
          solution: [`แนวคิด: จำนวนขอบของปริซึม = 3 × จำนวนเหลี่ยมของฐาน`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic6: {
      title: "บทที่ 6: สมการเชิงเส้นตัวแปรเดียว (ม.1 เทอม 2)",
      days: generateDynamicDays("สมการเชิงเส้น", (d, q) => {
        const m = q + 1;
        const c = d + 2;
        const target = (m * 5) + c;
        const ans = "5";
        return {
          qText: `จงหาค่า x จากสมการ ${m}x + ${c} = ${target}`,
          ans: `${ans}`,
          solution: [`แนวคิด: ย้ายข้างสมการเพื่อหาค่า x`, `คำตอบคือ x = ${ans}`]
        };
      })
    },
    topic7: {
      title: "บทที่ 7: อัตราส่วน สัดส่วน และร้อยละ (ม.1 เทอม 2)",
      days: generateDynamicDays("อัตราส่วนและร้อยละ", (d, q) => {
        const percent = 5 * q;
        const total = 100 + (d * 50);
        const ans = (percent * total) / 100;
        return {
          qText: `จงหาค่าของ ${percent}% ของ ${total}`,
          ans: `${ans}`,
          solution: [`แนวคิด: (${percent} / 100) × ${total}`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic8: {
      title: "บทที่ 8: กราฟและความสัมพันธ์เชิงเส้น (ม.1 เทอม 2)",
      days: generateDynamicDays("กราฟเชิงเส้น", (d, q) => {
        const m = q;
        const c = d;
        const xVal = 2;
        const ans = (m * xVal) + c;
        return {
          qText: `กำหนดให้ y = ${m}x + ${c} จงหาค่า y เมื่อ x = ${xVal}`,
          ans: `${ans}`,
          solution: [`แนวคิด: แทนค่า x = ${xVal} ลงในสมการ`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic9: {
      title: "บทที่ 9: สถิติ (1) (ม.1 เทอม 2)",
      days: generateDynamicDays("สถิติ", (d, q) => {
        const n1 = q * 2;
        const n2 = q * 2 + 4;
        const n3 = q * 2 + 8;
        const ans = (n1 + n2 + n3) / 3;
        return {
          qText: `จงหาค่าเฉลี่ยเลขคณิตของข้อมูล: ${n1}, ${n2}, ${n3}`,
          ans: `${ans}`,
          solution: [`แนวคิด: ผลรวมข้อมูลทั้งหมดหารด้วยจำนวนข้อมูล (3)`, `คำตอบคือ ${ans}`]
        };
      })
    },
    midterm: {
      title: "คลังข้อสอบ: ตะลุยโจทย์ ข้อสอบกลางภาค ม.1",
      days: generateDynamicDays("ข้อสอบกลางภาค", (d, q) => {
        const ans = q * 10 + d;
        return {
          qText: `โจทย์ประยุกต์กลางภาค ชุดที่ ${d} ข้อที่ ${q}: ผลลัพธ์จากการคำนวณคือ`,
          ans: `${ans}`,
          solution: [`แนวคิด: บูรณาการความรู้บทที่ 1-5`, `คำตอบคือ ${ans}`]
        };
      })
    },
    final: {
      title: "คลังข้อสอบ: ตะลุยโจทย์ ข้อสอบปลายภาค ม.1",
      days: generateDynamicDays("ข้อสอบปลายภาค", (d, q) => {
        const ans = q * 20 + d;
        return {
          qText: `โจทย์ประยุกต์ปลายภาค ชุดที่ ${d} ข้อที่ ${q}: ผลลัพธ์จากการคำนวณคือ`,
          ans: `${ans}`,
          solution: [`แนวคิด: บูรณาการความรู้บทที่ 1-9`, `คำตอบคือ ${ans}`]
        };
      })
    }
  }
};

function generateDynamicDays(topicName, generatorFn) {
  const daysObj = {};
  for (let d = 1; d <= 10; d++) {
    daysObj[d] = [];
    for (let q = 1; q <= 10; q++) {
      const gen = generatorFn(d, q);
      daysObj[d].push({
        id: q,
        question: gen.qText,
        formalSolution: gen.solution,
        steps: [
          {
            label: `คำนวณหาคำตอบ`,
            template: `คำตอบข้อนี้คือ [input]`,
            answer: gen.ans,
            hint: `ใช้หลักการคำนวณของ ${topicName}`
          }
        ]
      });
    }
  }
  return daysObj;
}