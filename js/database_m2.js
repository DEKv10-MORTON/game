// js/database_m2.js

const masterLessonDatabase_M2 = {
  m2: {
    topic1: {
      title: "บทที่ 1: เลขยกกำลัง (ม.2 เทอม 1)",
      days: generateDynamicDays_M2("เลขยกกำลัง ม.2", (d, q) => {
        const base = (q % 4) + 2;
        const p1 = (d % 3) + 1;
        const p2 = ((d + q) % 3) + 1;
        const ans = Math.pow(base, p1 + p2);
        return {
          qText: `จงหาค่าของ ${base}^${p1} × ${base}^${p2}`,
          ans: `${ans}`,
          solution: [`แนวคิด: สมบัติของเลขยกกำลัง (a^m × a^n = a^(m+n))`, `คำนวณได้ ${base}^(${p1}+${p2}) = ${base}^${p1+p2}`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic2: {
      title: "บทที่ 2: จำนวนจริง (ม.2 เทอม 1)",
      days: generateDynamicDays_M2("จำนวนจริง", (d, q) => {
        const num = (q * q) + (d * 2);
        const ans = (Math.sqrt(num)).toFixed(2);
        return {
          qText: `จงหาค่ารากที่สองของ ${num * num} (ตอบเป็นทศนิยม 2 ตำแหน่งหากไม่ลงตัว)`,
          ans: `${num}`,
          solution: [`แนวคิด: หารากที่สองที่เป็นบวก`, `คำตอบคือ ${num}`]
        };
      })
    },
    topic3: {
      title: "บทที่ 3: พหูพจน์และการแยกตัวประกอบของพหุนาม (ม.2 เทอม 1)",
      days: generateDynamicDays_M2("การแยกตัวประกอบพหุนาม", (d, q) => {
        const a = q;
        const b = d;
        const sum = a + b;
        const prod = a * b;
        return {
          qText: `จงแยกตัวประกอบของ x² + ${sum}x + ${prod}`,
          ans: `(x+${a})(x+${b})`,
          solution: [`แนวคิด: หาจำนวนสองจำนวนที่บวกกันได้ ${sum} และคูณกันได้ ${prod}`, `คำตอบคือ (x + ${a})(x + ${b})`]
        };
      })
    },
    topic4: {
      title: "บทที่ 4: การประยุกต์ของอัตราส่วนร้อยละ (ม.2 เทอม 1)",
      days: generateDynamicDays_M2("อัตราส่วนและร้อยละ", (d, q) => {
        const cost = 200 + (d * 50);
        const profitPercent = 10 + (q * 5);
        const ans = cost + (cost * profitPercent / 100);
        return {
          qText: `ซื้อสินค้ามาราคา ${cost} บาท ต้องการขายให้ได้กำไร ${profitPercent}% จะต้องขายราคาเท่าใด`,
          ans: `${ans}`,
          solution: [`แนวคิด: ราคาขาย = ต้นทุน + (กำไร% × ต้นทุน)`, `คำตอบคือ ${ans} บาท`]
        };
      })
    },
    topic5: {
      title: "บทที่ 5: การประยุกต์ของความเท่ากันทุกประการ (ม.2 เทอม 1)",
      days: generateDynamicDays_M2("ความเท่ากันทุกประการ", (d, q) => {
        const angle = 40 + (q * 5) + (d * 3);
        const ans = 180 - (2 * angle);
        return {
          qText: `สามเหลหน้าจั่วรูปหนึ่ง มีมุมยอดหรือมุมที่ฐานขนาด ${angle} องศา จงหามุมที่เหลือ`,
          ans: `${ans > 0 ? ans : 60}`,
          solution: [`แนวคิด: ผลรวมมุมภายในรูปสามเหลี่ยมเท่ากับ 180 องศา`, `คำตอบคือ ${ans > 0 ? ans : 60} องศา`]
        };
      })
    },
    topic6: {
      title: "บทที่ 6: สถิติ (2) (ม.2 เทอม 2)",
      days: generateDynamicDays_M2("สถิติ ม.2", (d, q) => {
        const baseVal = q * 5;
        const ans = baseVal + d;
        return {
          qText: `จากแผนภาพจุด ข้อมูลชุดหนึ่งมีค่ามัธยฐานประมาณเท่าใดเมื่อชุดข้อมูลเริ่มต้นที่ ${baseVal}`,
          ans: `${ans}`,
          solution: [`แนวคิด: เรียงลำดับข้อมูลแล้วหาค่ากึ่งกลาง`, `คำตอบคือ ${ans}`]
        };
      })
    },
    topic7: {
      title: "บทที่ 7: ความเท่ากันทุกประการ (ม.2 เทอม 2)",
      days: generateDynamicDays_M2("ความเท่ากันทุกประการ 2", (d, q) => {
        const sideA = 5 + q;
        const ans = sideA * 2;
        return {
          qText: `สามเหลี่ยมสองรูปเท่ากันทุกประการแบบ ด้าน-มุม-ด้าน ถ้ารูปแรกมีฐานยาว ${sideA} ซม. ความยาวรอบรูปโดยประมาณคือ`,
          ans: `${ans + 10}`,
          solution: [`แนวคิด: ใช้สมบัติสามเหลี่ยมเท่ากันทุกประการ`, `คำตอบคือ ${ans + 10}`]
        };
      })
    },
    topic8: {
      title: "บทที่ 8: เส้น平行และความเท่ากันทุกประการ (ม.2 เทอม 2)",
      days: generateDynamicDays_M2("เส้นขนาน", (d, q) => {
        const altAngle = 50 + (q * 8) + (d * 2);
        const ans = 180 - altAngle;
        return {
          qText: `เส้นตรงสองเส้นขนานกัน มีมุมแย้งขนาด ${altAngle} องศา จงหามุมภายในที่อยู่บนข้างเดียวกันของเส้นตัด`,
          ans: `${ans}`,
          solution: [`แนวคิด: มุมภายในบนข้างเดียวกันของเส้นตัดรวมกันได้ 180 องศา`, `คำตอบคือ ${ans} องศา`]
        };
      })
    },
    topic9: {
      title: "บทที่ 9: การให้เหตุผลทางเรขาคณิต (ม.2 เทอม 2)",
      days: generateDynamicDays_M2("การให้เหตุผลทางเรขาคณิต", (d, q) => {
        const exterior = 100 + (q * 10) + d;
        const interior = 60 + q;
        const ans = exterior - interior;
        return {
          qText: `มุมภายนอกของรูปสามเหลี่ยมเท่ากับ ${exterior} องศา และมุมภายในที่ไม่ใช่ประชิดมุมหนึ่งคือ ${interior} องศา จงหามมุมภายในอีกมุมหนึ่ง`,
          ans: `${ans}`,
          solution: [`แนวคิด: มุมภายนอก = ผลรวมของมุมภายในที่ไม่ใช่ประชิด`, `คำตอบคือ ${ans} องศา`]
        };
      })
    },
    midterm: {
      title: "คลังข้อสอบ: ตะลุยโจทย์ ข้อสอบกลางภาค ม.2",
      days: generateDynamicDays_M2("ข้อสอบกลางภาค ม.2", (d, q) => {
        const ans = q * 15 + d;
        return {
          qText: `โจทย์ประยุกต์กลางภาค ม.2 ชุดที่ ${d} ข้อที่ ${q}: ผลลัพธ์จากการคำนวณคือ`,
          ans: `${ans}`,
          solution: [`แนวคิด: บูรณาการความรู้บทที่ 1-5`, `คำตอบคือ ${ans}`]
        };
      })
    },
    final: {
      title: "คลังข้อสอบ: ตะลุยโจทย์ ข้อสอบปลายภาค ม.2",
      days: generateDynamicDays_M2("ข้อสอบปลายภาค ม.2", (d, q) => {
        const ans = q * 25 + d;
        return {
          qText: `โจทย์ประยุกต์ปลายภาค ม.2 ชุดที่ ${d} ข้อที่ ${q}: ผลลัพธ์จากการคำนวณคือ`,
          ans: `${ans}`,
          solution: [`แนวคิด: บูรณาการความรู้บทที่ 1-9`, `คำตอบคือ ${ans}`]
        };
      })
    }
  }
};

// ฟังก์ชันสร้างชุดข้อมูลแบบไดนามิกสำหรับ ม.2
function generateDynamicDays_M2(topicName, generatorFn) {
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