// --- 📖 คลังข้อมูลสรุปบทเรียนคณิตศาสตร์ ม.1 - ม.3 ครบทุกบท ---
const lessonSummaries = {
    // ม.1 เทอม 1
    'm1_t1_c1': {
        title: "1. จำนวนเต็ม", level: "มัธยม 1 เทอม 1",
        concept: "เรียนรู้ระบบจำนวนเต็ม (บวก, ลบ, ศูนย์) และกฎการคำนวณพื้นฐานบนเส้นจำนวน ซึ่งเป็นเสาหลักสำคัญของวิชาคณิตศาสตร์",
        highlights: ["เทคนิคคิดเลขติดลบด้วยแนวคิด 'เครื่องหมายเหมือนบวก ต่างกันลบ'", "ความเข้าใจเรื่องค่าสัมบูรณ์ (Absolute Value)", "ปูพื้นฐานสำคัญก่อนต่อยอดสู่เรื่องสมการ"]
    },
    'm1_t1_c2': {
        title: "2. การสร้างทางเรขาคณิต", level: "มัธยม 1 เทอม 1",
        concept: "ใช้วงเวียนและสันตรงในการสร้างรูปเรขาคณิตพื้นฐาน การแบ่งครึ่งมุม และการสร้างเส้นตั้งฉาก",
        highlights: ["ฝึกสมาธิ มิติสัมพันธ์ และระบบความคิดสร้างสรรค์", "เทคนิคการแบ่งครึ่งมุมอย่างแม่นยำด้วยวงเวียน", "เชื่อมโยงสู่การออกแบบเชิงสถาปัตยกรรม"]
    },
    'm1_t1_c3': {
        title: "3. เลขยกกำลัง", level: "มัธยม 1 เทอม 1",
        concept: "ทำความเข้าใจตัวเลขขนาดยักษ์หรือเล็กจิ๋วผ่านรูป a<sup>n</sup> และสัญลักษณ์สัญกรณ์วิทยาศาสตร์",
        highlights: ["เรียนรู้สมบัติการคูณ-หารเลขยกกำลังฐานเดียวกัน", "เปลี่ยนเลขล้านล้านให้อยู่ในสัญกรณ์วิทยาศาสตร์", "ปูทางสู่ฟิสิกส์และเคมีในอนาคต"]
    },
    'm1_t1_c4': {
        title: "4. ทศนิยมและเศษส่วน", level: "มัธยม 1 เทอม 1",
        concept: "การเปรียบเทียบ บวก ลบ คูณ หาร และแปลงสลับระหว่างทศนิยมซ้ำและเศษส่วนอย่างถูกต้อง",
        highlights: ["เทคนิคเปลี่ยนทศนิยมซ้ำเป็นเศษส่วนใน 3 วินาที", "การคิดคำนวณตัวเลขในชีวิตประจำวันอย่างแม่นยำ", "วิธีหา ค.ร.น. เพื่อการบวกลบเศษส่วนที่รวดเร็ว"]
    },
    'm1_t1_c5': {
        title: "5. รูปเรขาคณิตสองมิติและสามมิติ", level: "มัธยม 1 เทอม 1",
        concept: "การมองภาพคลี่ (Net) และการคลี่รูปคลายภาพจาก 2D เป็น 3D รวมทั้งมุมมอง Front, Side, Top View",
        highlights: ["ฝึกจิตนาการมองวัตถุ 3 มิติจากภาพ 2 มิติ", "เรียนรู้โครงสร้างรูปเรขาคณิต เช่น ปริซึม พีระมิด ทรงกลม", "พัฒนาทักษะวิศวกรรมการมองแบบแปลน"]
    },

    // ม.1 เทอม 2
    'm1_t2_c1': {
        title: "6. สมการเชิงเส้นตัวแปรเดียว", level: "มัธยม 1 เทอม 2",
        concept: "การแก้โจทย์ปัญหาหาค่าตัวแปรที่ไม่ทราบค่าด้วยสมบัติการเท่ากัน",
        highlights: ["วิธีแก้สมการแบบย้ายข้างสุดคลาสสิก", "การแปลโจทย์ปัญหาข้อความให้กลายเป็นสมการคณิตศาสตร์", "ทักษะการตรวจสอบคำตอบด้วยตนเอง"]
    },
    'm1_t2_c2': {
        title: "7. อัตราส่วน สัดส่วน และร้อยละ", level: "มัธยม 1 เทอม 2",
        concept: "การเปรียบเทียบปริมาณ 2 ปริมาณขึ้นไป และการประยุกต์ใช้เรื่องเปอร์เซ็นต์ในชีวิตจริง",
        highlights: ["สูตรคำนวณลดราคา กำไร ขาดทุน และดอกเบี้ย", "เทคนิคคูณไขว้เพื่อแก้โจทย์สัดส่วน", "การประยุกต์ใช้กับการอ่านแผนที่และมาตราส่วน"]
    },
    'm1_t2_c3': {
        title: "8. กราฟและความสัมพันธ์เชิงเส้น", level: "มัธยม 1 เทอม 2",
        concept: "การเขียนจุดบนระบบพิกัดฉาก (x, y) และเชื่อมโยงสู่กราฟเส้นตรง y = mx + c",
        highlights: ["อ่านค่าควอดรันต์ (Quadrant) ได้อย่างคล่องแคล่ว", "ตีความหมายแนวโน้มจากเส้นกราฟ", "สร้างพื้นฐานสู่เรขาคณิตวิเคราะห์ ม.ปลาย"]
    },
    'm1_t2_c4': {
        title: "9. สถิติ (1)", level: "มัธยม 1 เทอม 2",
        concept: "การเก็บรวบรวมข้อมูล นำเสนอข้อมูลด้วยแผนภูมิรูปภาพ แผนภูมิแท่ง แผนภูมิวงกลม และกราฟเส้น",
        highlights: ["วิธีอ่านและตีความหมายแผนภูมิวงกลม", "เข้าใจความแตกต่างของข้อมูลเชิงปริมาณและคุณภาพ", "ปูทางสู่การวิเคราะห์ข้อมูลยุค Data Science"]
    },

    // ม.2 เทอม 1
    'm2_t1_c1': {
        title: "1. ทฤษฎีบทพีทาโกรัส", level: "มัธยม 2 เทอม 1",
        concept: "ความสัมพันธ์ของความยาวด้านในสามเหลี่ยมมุมฉาก c² = a² + b²",
        highlights: ["จำชุดตัวเลขสามเหลี่ยมยอดฮิต 3-4-5, 5-12-13", "การประยุกต์หาความสูงหรือระยะทางในโจทย์จริง", "พิสูจน์ที่มาอันน่าทึ่งของพีทาโกรัส"]
    },
    'm2_t1_c2': {
        title: "2. ความรู้เบื้องต้นเกี่ยวกับจำนวนจริง", level: "มัธยม 2 เทอม 1",
        concept: "รู้จักจำนวนตรรกยะ อตรรกยะ รากที่สอง (√x) และรากที่สาม",
        highlights: ["ความแตกต่างระหว่างจำนวนตรรกยะและอตรรกยะ", "เทคนิคถอดรากที่สองและสามอย่างรวดเร็ว", "ความเข้าใจเรื่องค่าประมาณและสัญลักษณ์ราก"]
    },
    'm2_t1_c3': {
        title: "3. ปริมาตรและพื้นที่ผิว", level: "มัธยม 2 เทอม 1",
        concept: "คำนวณหาพื้นที่ผิวและปริมาตรของรูปทรงสามมิติ เช่น ปริซึม และทรงกระบอก",
        highlights: ["สรุปสูตรพื้นที่ผิวแบบไม่เน้นท่องจำ", "เปรียบเทียบปริมาตรรูปร่างต่างๆ ในเชิงวิศวกรรม", "การแก้โจทย์ประยุกต์สระน้ำและความจุถังน้ำ"]
    },
    'm2_t1_c4': {
        title: "4. การแปลงทางเรขาคณิต", level: "มัธยม 2 เทอม 1",
        concept: "การเลื่อนขนาน (Translation) การสะท้อน (Reflection) และการหมุน (Rotation)",
        highlights: ["หาพิกัดใหม่หลังการแปลงบนระบบพิกัดฉาก", "ทำความเข้าใจพฤติกรรมภาพและรูปต้นแบบ", "ประยุกต์ใช้กับงานกราฟิกและอาร์ตเวิร์ก"]
    },
    'm2_t1_c5': {
        title: "5. สมบัติของเลขยกกำลัง", level: "มัธยม 2 เทอม 1",
        concept: "ต่อยอดเลขยกกำลังที่มีดีกรีเป็นจำนวนเต็มและติดลบ a<sup>-n</sup> = 1 / a<sup>n</sup>",
        highlights: ["กฎ 7 ข้อของเลขยกกำลังที่ต้องใช้จนจบ ม.6", "การตัดทอนพจน์เลขยกกำลังที่ซับซ้อน", "เทคนิคจัดการฐานที่ไม่เท่ากัน"]
    },
    'm2_t1_c6': {
        title: "6. พหุนาม", level: "มัธยม 2 เทอม 1",
        concept: "เอกนาม พหุนาม การบวก ลบ คูณ และหารพหุนามเบื้องต้น",
        highlights: ["เรียนรู้การจัดกลุ่มพจน์ที่คล้ายกัน", "การตั้งคูณและหารพหุนามอย่างเป็นระเบียบ", "ปูพื้นฐานสำคัญก่อนเริ่มแยกตัวประกอบ"]
    },

    // ม.2 เทอม 2
    'm2_t2_c1': {
        title: "7. การแยกตัวประกอบของพหุนาม", level: "มัธยม 2 เทอม 2",
        concept: "การดึงตัวร่วม ดึงพจน์กลาง แยก 2 วงเล็บ และสูตรผลต่างกำลังสอง a² - b²",
        highlights: ["สูตรดึงตัวร่วมและแยก 2 วงเล็บใน 5 วินาที", "เทคนิคผลต่างกำลังสอง และกำลังสองสมบูรณ์", "หัวใจสำคัญในการแก้สมการขั้นสูง"]
    },
    'm2_t2_c2': {
        title: "8. สมการเชิงเส้นสองตัวแปร", level: "มัธยม 2 เทอม 2",
        concept: "การหาคำตอบของสมการที่มีตัวแปร x และ y พร้อมการเขียนกราฟเส้นตรง",
        highlights: ["ความหมายของกราฟขนาน ตัดกัน หรือทับกัน", "การจัดรูป y = mx + c เพื่อหาความชัน", "ปูทางสู่ระบบสมการใน ม.3"]
    },
    'm2_t2_c3': {
        title: "9. ความเท่ากันทุกประการ", level: "มัธยม 2 เทอม 2",
        concept: "การพิสูจน์สามเหลี่ยม 2 รูปที่เท่ากันทุกประการ (ด.ม.ด., ม.ด.ม., ด.ด.ด., ม.ม.ด., ฉาก-ด้าน-ด้าน)",
        highlights: ["ฝึกการคิดหาเหตุผลอย่างเป็นระบบ", "เทคนิคดูความสัมพันธ์ของด้านและมุม", "ประยุกต์ใช้ในการแก้โจทย์ความยาวที่ซ่อนอยู่"]
    },
    'm2_t2_c4': {
        title: "10. เส้นขนาน", level: "มัธยม 2 เทอม 2",
        concept: "สมบัติของเส้นขนาน มุมแย้ง มุมภายใน และมุมภายนอก",
        highlights: ["กฎมุมแย้งมีขนาดเท่ากัน มุมภายในรวมได้ 180°", "เทคนิคไล่เติมมุมในรูปภาพเรขาคณิตซับซ้อน", "เชื่อมโยงกับทฤษฎีบทสามเหลี่ยม"]
    },
    'm2_t2_c5': {
        title: "11. การให้เหตุผลทางเรขาคณิต", level: "มัธยม 2 เทอม 2",
        concept: "นำทฤษฎีบทต่างๆ มาเขียนพิสูจน์ข้อเท็จจริงทางเรขาคณิตอย่างมีขั้นตอน",
        highlights: ["การเขียนโครงสร้างเหตุและผล (If-Then)", "สร้างตรรกะการคิดวิเคราะห์ขั้นสูง", "เตรียมพร้อมรับมือข้อสอบแข่งขัน"]
    },
    'm2_t2_c6': {
        title: "12. สถิติ (2)", level: "มัธยม 2 เทอม 2",
        concept: "ค่ากลางของข้อมูล (ค่าเฉลี่ยเลขคณิต มัธยฐาน ฐานนิยม) และการวัดการกระจาย",
        highlights: ["เลือกใช้ค่ากลางให้เหมาะสมกับประเภทข้อมูล", "คำนวณหาค่าเฉลี่ยแบบแจกแจงและไม่แจกแจง", "วิเคราะห์ข้อมูลจริงในสื่อบันเทิงและเศรษฐกิจ"]
    },

    // ม.3 เทอม 1
    'm3_t1_c1': {
        title: "1. อสมการเชิงเส้นตัวแปรเดียว", level: "มัธยม 3 เทอม 1",
        concept: "การแก้ประโยคสัญลักษณ์ที่มีเครื่องหมาย <, >, ≤, ≤, ≠",
        highlights: ["ข้อควรระวัง! คูณ/หาร ด้วยเลขติดลบต้องกลับเครื่องหมาย", "การเขียนช่วงคำตอบบนเส้นจำนวน", "แก้โจทย์ปัญหาข้อความอสมการในชีวิตจริง"]
    },
    'm3_t1_c2': {
        title: "2. สมการกำลังสองตัวแปรเดียว", level: "มัธยม 3 เทอม 1",
        concept: "การหาคำตอบ x จากสมการ ax² + bx + c = 0 ด้วยการแยก 2 วงเล็บ หรือใช้สูตร x = (-b ± √(b²-4ac)) / 2a",
        highlights: ["สูตร x = (-b ± √(b²-4ac)) / 2a ไพ่ตายแก้ได้ทุกข้อ", "เช็กจำนวนคำตอบล่วงหน้าด้วยค่า b² - 4ac", "แก้โจทย์พื้นที่และระยะทางกำลังสอง"]
    },
    'm3_t1_c3': {
        title: "3. ระบบสมการเชิงเส้นสองตัวแปร", level: "มัธยม 3 เทอม 1",
        concept: "การหาจุดตัด (x, y) จาก 2 สมการ ด้วยวิธีกำจัดตัวแปร หรือการแทนค่า",
        highlights: ["เลือกกำจัด x หรือ y อย่างมีเทคนิค", "ตีความหมายเชิงเรขาคณิต (จุดตัดของกราฟ 2 เส้น)", "โจทย์ปัญหาน้ำไหล อัตราเร็ว และผสมสารเคมี"]
    },
    'm3_t1_c4': {
        title: "4. พีระมิด กรวย และทรงกลม", level: "มัธยม 3 เทอม 1",
        concept: "การหาปริมาตรและพื้นที่ผิวของรูปทรงสามมิติยอดแหลมและทรงกลม",
        highlights: ["สรุปสูตรปริมาตรกรวย/พีระมิด = (1/3) × ฐาน × สูง", "สูตรทรงกลม V = (4/3)πr³ และ A = 4πr²", "ใช้พีทาโกรัสเชื่อมโยงสูงตรงกับสูงเอียง"]
    },
    'm3_t1_c5': {
        title: "5. ฟังก์ชันกำลังสอง (พาราโบลา)", level: "มัธยม 3 เทอม 1",
        concept: "กราฟพาราโบลา y = ax² + bx + c หาจุดยอด (จุดสูงสุด/ต่ำสุด) และแกนสมมุติ",
        highlights: ["เช็กกราฟหงาย (a > 0) หรือกราฟคว่ำ (a < 0)", "หาจุดยอดด้วยสูตร h = -b / (2a)", "ประยุกต์หาจุดสูงสุดในการยิงวัตถุ/วิถีโค้ง"]
    },
    'm3_t1_c6': {
        title: "6. สถิติ (3)", level: "มัธยม 3 เทอม 1",
        concept: "แผนภาพกล่อง (Box Plot) ควอไทล์ Q1, Q2, Q3 และการกระจายของข้อมูล",
        highlights: ["วิธีสร้างแผนภาพกล่องจากชุดข้อมูล real-world", "อ่านค่าการกระจายตัวและค้นหาข้อมูลแปลกแยก (Outlier)", "วิเคราะห์เปรียบเทียบข้อมูล 2 ชุดอย่างเห็นภาพ"]
    },

    // ม.3 เทอม 2
    'm3_t2_c1': {
        title: "7. ความคล้าย", level: "มัธยม 3 เทอม 2",
        concept: "สมบัติรูปสามเหลี่ยมคล้าย (มุมเท่ากัน 3 คู่) และอัตราส่วนความยาวด้านที่เท่ากัน",
        highlights: ["อัตราส่วนด้านย่อยเทียบด้านใหญ่", "คำนวณหาความสูงตึกหรือต้นไม้โดยไม่ต้องปีนวัด", "ประยุกต์กับการย่อ-ขยายสเกลงานออกแบบ"]
    },
    'm3_t2_c2': {
        title: "8. อัตราส่วนตรีโกณมิติ", level: "มัธยม 3 เทอม 2",
        concept: "อัตราส่วนสามเหลี่ยมมุมฉาก sin, cos, tan (ข้าม-ฉาก, ชิด-ฉาก, ข้าม-ชิด)",
        highlights: ["เทคนิคใช้นิ้วมือจำค่ามุม 30°, 45°, 60°", "ความสัมพันธ์ tan θ = sin θ / cos θ", "คำนวณหามุมก้ม มุมเงย และระยะทางในโจทย์จริง"]
    },
    'm3_t2_c3': {
        title: "9. วงกลม", level: "มัธยม 3 เทอม 2",
        concept: "ทฤษฎีบทวงกลม มุมที่จุดศูนย์กลาง มุมในส่วนโค้ง และเส้นสัมผัสวงกลม",
        highlights: ["มุมที่จุดศูนย์กลางกว้างเป็น 2 เท่าของมุมบนส่วนโค้ง", "มุมในครึ่งวงกลมเป็นมุมฉาก 90° เสมอ", "เทคนิคแก้โจทย์ไล่มุมวงกลมในข้อสอบ ม.3/ONET"]
    },
    'm3_t2_c4': {
        title: "10. ความน่าจะเป็น", level: "มัธยม 3 เทอม 2",
        concept: "การทดลองสุ่ม แซมเปิลสเปซ S และการคำนวณโอกาสเกิดเหตุการณ์ P(E) = n(E) / n(S)",
        highlights: ["ขอบเขตความน่าจะเป็น 0 ≤ P(E) ≤ 1", "สร้างแผนภาพต้นไม้ในการทอยลูกเต๋าและโยนเหรียญ", "วิเคราะห์โอกาสชนะเกมและความเสี่ยง"]
    },

    // ข้อสอบกลางภาค / ปลายภาค
    'm1_midterm': {
        title: "🎯 คลังข้อสอบกลางภาค ม.1", level: "ตะลุยโจทย์ ม.1",
        concept: "ชุดข้อสอบจำลองกลางภาค ครอบคลุมเรื่องจำนวนเต็ม การสร้างเรขาคณิต และเลขยกกำลัง",
        highlights: ["ข้อสอบแนวคิดคำนวณสด 30 ข้อ พร้อมเฉลยละเอียด", "จับเวลาจริงสไตล์ห้องสอบ 60 นาที", "สถิติวิเคราะห์จุดอ่อนรายบุคคล"]
    },
    'm1_final': {
        title: "🏆 คลังข้อสอบปลายภาค ม.1", level: "ตะลุยโจทย์ ม.1",
        concept: "รวมข้อสอบวัดผลปลายภาคแบบบูรณาการ รวมทุกบทเรียนเทอม 1 และเทอม 2",
        highlights: ["ข้อสอบปรนัยและอัตนัยจำลอง 40 ข้อ", "เน้นโจทย์ประยุกต์สมการและอัตราส่วน", "ประเมินเกรดเฉลี่ยล่วงหน้า"]
    },
    'm2_midterm': {
        title: "🎯 คลังข้อสอบกลางภาค ม.2", level: "ตะลุยโจทย์ ม.2",
        concept: "คลังข้อสอบเข้มข้น พีทาโกรัส จำนวนจริง และพื้นที่ผิวปริมาตร",
        highlights: ["รวมโจทย์พิสูจน์พีทาโกรัสขั้นสูง", "ฝึกถอดรากที่ซับซ้อนภายใต้แรงกดดันเวลา", "ระบบตรวจคำตอบทันที"]
    },
    'm2_final': {
        title: "🏆 คลังข้อสอบปลายภาค ม.2", level: "ตะลุยโจทย์ ม.2",
        concept: "ตะลุยโจทย์พหุนาม การแยกตัวประกอบ และเส้นขนาน เตรียมพร้อมสอบใหญ่",
        highlights: ["โจทย์แยกตัวประกอบ 50 ข้อหลากรูปแบบ", "ฝึกไล่มุมเส้นขนานแนวข้อสอบแข่งขัน", "มีวิดีโอเฉลยวิธีคิดลัด"]
    },
    'm3_midterm': {
        title: "🎯 คลังข้อสอบกลางภาค ม.3", level: "ตะลุยโจทย์ ม.3",
        concept: "ชุดโจทย์หิน อสมการ สมการกำลังสอง และระบบสมการเชิงเส้น",
        highlights: ["จำลองโจทย์สอบเข้า ม.4 โรงเรียนดัง", "เทคนิคใช้สูตรลัดตัดตัวเลือก", "วิเคราะห์เปอร์เซ็นต์ความถูกต้อง"]
    },
    'm3_final': {
        title: "🏆 คลังข้อสอบปลายภาค ม.3", level: "ตะลุยโจทย์ ม.3",
        concept: "ข้อสอบชุดใหญ่รวมมิตร ม.1-ม.3 เตรียมสอบ O-NET และสอบเข้า ม.4",
        highlights: ["รวมแนวข้อสอบ O-NET ย้อนหลัง 5 ปี", "เน้นตรีโกณมิติและทฤษฎีบทวงกลม", "ระบบแรงกิ้งจัดอันดับคะแนนกับเพื่อนทั่วประเทศ"]
    }
};

// --- 📖 ฟังก์ชันสลับแสดงการ์ดสรุปบทเรียนในกรอบ Arcade Stage (แบบปลดล็อกแล้ว) ---
function openLessonSummary(topicCode) {
    let level = 'm1';
    if (topicCode.startsWith('m2')) level = 'm2';
    else if (topicCode.startsWith('m3')) level = 'm3';

    const summary = lessonSummaries[topicCode];
    if (!summary) return;

    if (typeof isGameRunning !== 'undefined' && isGameRunning) {
        isGameRunning = false;
        if (typeof fallInterval !== 'undefined' && fallInterval) clearInterval(fallInterval);
    }

    const gameWrapper = document.getElementById('game-stage-wrapper');
    const summaryWrapper = document.getElementById('lesson-summary-wrapper');

    if (gameWrapper) gameWrapper.style.display = 'none';
    if (summaryWrapper) {
        summaryWrapper.style.display = 'flex';
        summaryWrapper.innerHTML = `
            <div class="summary-top-bar">
                <span class="summary-badge">${summary.level}</span>
                <button class="btn-back-game" onclick="backToWarmUpGame()">🎮 กลับหน้าเกม Warm-Up</button>
            </div>

            <h2 class="summary-title">${summary.title}</h2>

            <div class="summary-content-block">
                <h4>💡 เรื่องนี้สื่อถึงอะไร?</h4>
                <p>${summary.concept}</p>
            </div>

            <div class="summary-content-block">
                <h4>🔥 ความน่าสนใจ & ไฮไลต์เด็ดประจำเรื่อง</h4>
                <ul class="summary-bullets">
                    ${summary.highlights.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="cta-ipad-box">
                <p>คลิกปุ่มด้านล่างเพื่อเข้าสู่โหมดจำลอง iPad Interactive พร้อมแบบฝึกหัดจับมือทำได้ทันที</p>
                <div class="cta-btn-group">
                    <button class="btn btn-register" onclick="openTabletSimulation(event, '${topicCode}')">🚀 เริ่มต้นทำแบบฝึกหัด</button>
                </div>
            </div>
        `;
        summaryWrapper.scrollTop = 0;
    }
}

// ฟังก์ชันกลับไปหน้าเกม
function backToWarmUpGame() {
    const summaryWrapper = document.getElementById('lesson-summary-wrapper');
    const gameWrapper = document.getElementById('game-stage-wrapper');

    if (summaryWrapper) summaryWrapper.style.display = 'none';
    if (gameWrapper) gameWrapper.style.display = 'flex';

    if (typeof resetToStartScreen === 'function') {
        resetToStartScreen();
    }
}

// --- 🌌 Interactive Distortion Grid Script ---
function initInteractiveGrid() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let points = [];
    const spacing = 45;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const ripples = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        setupGrid();
    }

    function setupGrid() {
        points = [];
        const cols = Math.ceil(width / spacing) + 1;
        const rows = Math.ceil(height / spacing) + 1;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const ox = i * spacing;
                const oy = j * spacing;
                points.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
            }
        }
    }

    window.addEventListener("mousemove", (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });

    window.addEventListener("click", (e) => {
        ripples.push({
            x: e.clientX,
            y: e.clientY,
            radius: 0,
            maxRadius: 300,
            strength: 15,
            speed: 8
        });
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;

        for (let i = ripples.length - 1; i >= 0; i--) {
            const r = ripples[i];
            r.radius += r.speed;
            if (r.radius > r.maxRadius) ripples.splice(i, 1);
        }

        const cols = Math.ceil(width / spacing) + 1;
        const rows = Math.ceil(height / spacing) + 1;

        for (let p of points) {
            const dx = mouse.x - p.ox;
            const dy = mouse.y - p.oy;
            const dist = Math.hypot(dx, dy);
            const maxDist = 200;

            let targetX = p.ox;
            let targetY = p.oy;

            if (dist < maxDist) {
                const force = (1 - dist / maxDist) * 20;
                targetX += (dx / dist) * force;
                targetY += (dy / dist) * force;
            }

            for (let r of ripples) {
                const rdx = p.ox - r.x;
                const rdy = p.oy - r.y;
                const rDist = Math.hypot(rdx, rdy);
                const diff = Math.abs(rDist - r.radius);
                if (diff < 40) {
                    const rForce = (1 - diff / 40) * r.strength;
                    targetX += (rdx / (rDist || 1)) * rForce;
                    targetY += (rdy / (rDist || 1)) * rForce;
                }
            }

            p.vx += (targetX - p.x) * 0.1;
            p.vy += (targetY - p.y) * 0.1;
            p.vx *= 0.85;
            p.vy *= 0.85;
            p.x += p.vx;
            p.y += p.vy;
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const idx = i * rows + j;
                const p = points[idx];

                if (i < cols - 1) {
                    const rightP = points[(i + 1) * rows + j];
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(rightP.x, rightP.y);
                    ctx.stroke();
                }
                if (j < rows - 1) {
                    const bottomP = points[i * rows + (j + 1)];
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(bottomP.x, bottomP.y);
                    ctx.stroke();
                }

                const dMouse = Math.hypot(mouse.x - p.x, mouse.y - p.y);
                ctx.fillStyle = dMouse < 150 ? "#00ffcc" : "rgba(255, 255, 255, 0.25)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, dMouse < 150 ? 2.5 : 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animate();
}

initInteractiveGrid();

// Carousel & Accordion UI Controls
function scrollCarousel(direction) {
    const container = document.getElementById('yt-carousel');
    if (container) {
        container.scrollBy({ left: direction * container.clientWidth, behavior: 'smooth' });
    }
}

function toggleAccordion(menuId, btnElement) {
    const targetMenu = document.getElementById(menuId);
    if (!targetMenu) return;
    const isAlreadyOpen = targetMenu.classList.contains('open');

    document.querySelectorAll('.submenu').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (!isAlreadyOpen) {
        targetMenu.classList.add('open');
        if (btnElement) btnElement.classList.add('active');
    }
}

// Counter Stats
let count = 1248;
setInterval(() => {
    count += Math.floor(Math.random() * 3) + 1;
    const counterEl = document.getElementById('counter');
    if (counterEl) counterEl.textContent = count.toLocaleString();
}, 4000);

const BASE_VISITS = 3500;
let totalVisits = localStorage.getItem('morton_total_visits');
totalVisits = totalVisits ? parseInt(totalVisits, 10) + 1 : BASE_VISITS;
localStorage.setItem('morton_total_visits', totalVisits);
const visitsEl = document.getElementById('total-visits');
if (visitsEl) visitsEl.textContent = totalVisits.toLocaleString();

// --- 💬 Society Chat Systems ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID", appId: "APP_ID"
};

let isFirebaseReady = false, database = null, chatRef = null;
let currentRoom = "homework", currentUser = "", currentRole = "ม.1";

try {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        isFirebaseReady = true;
    }
} catch (e) { console.log("Firebase Chat Simulation Active"); }

function enterChat() {
    const input = document.getElementById('nickname-input');
    const roleSelect = document.getElementById('role-select');
    if (input && input.value.trim() !== "") {
        currentUser = input.value.trim();
        currentRole = roleSelect ? roleSelect.value : "ม.1";

        const dispName = document.getElementById('user-display-name');
        const nickScreen = document.getElementById('nick-screen');
        const chatScreen = document.getElementById('chat-screen');

        if (dispName) dispName.innerText = `👤 ${currentUser}`;
        if (nickScreen) nickScreen.style.display = 'none';
        if (chatScreen) chatScreen.style.display = 'flex';
        switchRoom("homework");
    }
}

function switchRoom(roomKey) {
    currentRoom = roomKey;
    const container = document.getElementById('message-container');
    if (container) container.innerHTML = "";
    addLocalMessage("ระบบ", `ย้ายเข้าสู่ห้อง: ${getRoomName(roomKey)}`, true);
    if (isFirebaseReady && database) {
        if (chatRef) chatRef.off();
        chatRef = database.ref(`morton_chat_rooms/${currentRoom}`);
        listenForMessages();
    }
}

function getRoomName(key) {
    if (key === 'homework') return '📐 ถามการบ้าน-ติวโจทย์';
    if (key === 'games') return '🎮 พูดคุยเรื่องเกม';
    return '☕ ห้องเม้าท์ทั่วไป';
}

function sendMessage() {
    const msgInput = document.getElementById('msg-input');
    if (!msgInput) return;
    let text = msgInput.value.trim();
    if (text !== "" && currentUser !== "") {
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        text = text.replace(/:\)/g, "😊").replace(/:D/g, "😃").replace(/<3/g, "❤️");
        if (isFirebaseReady && chatRef) {
            chatRef.push({ user: currentUser, role: currentRole, message: text, time: timeStr, timestamp: firebase.database.ServerValue.TIMESTAMP });
        } else {
            addLocalMessage(currentUser, text, false, timeStr, currentRole);
        }
        msgInput.value = "";
    }
}

function addEmoji(emoji) {
    const msgInput = document.getElementById('msg-input');
    if (msgInput) {
        msgInput.value += emoji;
        msgInput.focus();
    }
}

function handleKeyPress(e) { if (e.key === 'Enter') sendMessage(); }

function addLocalMessage(user, text, isSystem = false, timeStr = "", role = "ม.1") {
    const container = document.getElementById('message-container');
    if (!container) return;
    const msgDiv = document.createElement('div');
    if (isSystem) {
        msgDiv.className = 'msg-line msg-sys';
        msgDiv.innerText = `*** ${text} ***`;
    } else {
        msgDiv.className = 'msg-line';
        const now = timeStr || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let roleClass = role === 'ม.2' ? 'role-m2' : (role === 'ม.3' ? 'role-m3' : 'role-m1');
        msgDiv.innerHTML = `<span class="msg-t">[${now}]</span><span class="badge-role ${roleClass}">${role}</span><span class="msg-u">${escapeHtml(user)}:</span><span class="msg-txt">${escapeHtml(text)}</span>`;
    }
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function listenForMessages() {
    if (chatRef) {
        chatRef.limitToLast(40).on('child_added', (snapshot) => {
            const data = snapshot.val();
            if (data) addLocalMessage(data.user, data.message, false, data.time, data.role);
        });
    }
}

function escapeHtml(text) {
    if (!text) return '';
    return text.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// --- 🧠 🎮 GAME ENGINE (MATH WARM-UP RAIN) ---
const questionBank = {
    m1: [
        { q: "2<sup>4</sup> = 16", ans: true }, { q: "(-5) + 8 = 3", ans: true },
        { q: "12 × 11 = 131", ans: false }, { q: "144 ÷ 12 = 12", ans: true },
        { q: "3<sup>3</sup> = 9", ans: false }, { q: "7 × (-4) = -28", ans: true },
        { q: "1/2 + 1/4 = 3/4", ans: true }, { q: "0.5 × 0.2 = 0.1", ans: true },
        { q: "-15 - 5 = -10", ans: false }, { q: "10<sup>2</sup> = 100", ans: true },
        { q: "15% ของ 200 = 30", ans: true }, { q: "3/5 = 0.6", ans: true },
        { q: "(-2)<sup>3</sup> = 8", ans: false }, { q: "100 ÷ 0.5 = 50", ans: false },
        { q: "5<sup>2</sup> - 4<sup>2</sup> = 9", ans: true }, { q: "8 × 7 = 54", ans: false }
    ],
    m2: [
        { q: "√64 = 8", ans: true }, { q: "3<sup>2</sup> + 4<sup>2</sup> = 5<sup>2</sup>", ans: true },
        { q: "√16 + √9 = 7", ans: true }, { q: "2<sup>-2</sup> = -4", ans: false },
        { q: "(a<sup>3</sup>)<sup>2</sup> = a<sup>5</sup>", ans: false }, { q: "√(-9)<sup>2</sup> = 9", ans: true },
        { q: "4<sup>3</sup> = 64", ans: true }, { q: "√50 = 5√2", ans: true }
    ],
    m3: [
        { q: "x<sup>2</sup> - 9 = (x-3)(x+3)", ans: true }, { q: "sin 30° = 1/2", ans: true },
        { q: "cos 60° = √3/2", ans: false }, { q: "tan 45° = 1", ans: true },
        { q: "อสมการ x+3 > 5 ➔ x > 2", ans: true }, { q: "(x-2)<sup>2</sup> = x<sup>2</sup> - 4x + 4", ans: true }
    ]
};

let selectedLevel = 'm1', currentQuestions = [], currentIndex = 0;
let scoreCorrect = 0, scoreWrong = 0, isGameRunning = false;
let activeCard = null, fallInterval = null, cardPosY = 0;
const fallSpeed = 0.6;

let blinkInterval = null, currentBlinkIndex = 0;
const levelBtns = ['m1', 'm2', 'm3'];
let autoResetTimeout = null, autoResetInterval = null;

function startButtonBlink() {
    if (blinkInterval) clearInterval(blinkInterval);
    const btns = document.querySelectorAll('.lvl-btn');
    if (btns.length === 0) return;
    blinkInterval = setInterval(() => {
        btns.forEach(b => b.classList.remove('selected'));
        if (btns[currentBlinkIndex]) btns[currentBlinkIndex].classList.add('selected');
        currentBlinkIndex = (currentBlinkIndex + 1) % levelBtns.length;
    }, 800);
}

function selectLevel(lvl, btn) {
    if (blinkInterval) { clearInterval(blinkInterval); blinkInterval = null; }
    selectedLevel = lvl;
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('selected'));
    if (btn) btn.classList.add('selected');
}

function resetToStartScreen() {
    if (autoResetTimeout) clearTimeout(autoResetTimeout);
    if (autoResetInterval) clearInterval(autoResetInterval);

    const title = document.getElementById('overlay-title');
    const desc = document.getElementById('overlay-desc');
    const btn = document.getElementById('btn-action');
    const levelSelectBox = document.getElementById('level-select-box');

    if (levelSelectBox) levelSelectBox.style.display = 'block';
    if (title) {
        title.innerText = "🧠 MATH WARM-UP RAIN";
        title.style.color = "var(--accent-cyan)";
    }
    if (desc) {
        desc.innerHTML = `ลากแท่งโจทย์คณิตศาสตร์ที่โปรยลงมา ไปใส่กล่อง <b style="color:var(--accent-cyan)">"ถูก"</b> หรือ <b style="color:var(--accent-red)">"ผิด"</b> ให้ถูกต้อง ก่อนที่จะตกถึงพื้น!`;
    }
    if (btn) {
        btn.innerText = "START GAME";
        btn.onclick = startGame;
    }
    startButtonBlink();
}

function startGame() {
    if (autoResetTimeout) clearTimeout(autoResetTimeout);
    if (autoResetInterval) clearInterval(autoResetInterval);
    if (blinkInterval) { clearInterval(blinkInterval); blinkInterval = null; }

    const overlay = document.getElementById('overlay');
    const dispLevel = document.getElementById('disp-level');
    const levelSelectBox = document.getElementById('level-select-box');

    if (overlay) overlay.style.display = 'none';
    if (levelSelectBox) levelSelectBox.style.display = 'none';
    if (dispLevel) dispLevel.innerText = selectedLevel === 'm1' ? 'มัธยม 1' : (selectedLevel === 'm2' ? 'มัธยม 2' : 'มัธยม 3');

    if (questionBank[selectedLevel]) {
        currentQuestions = [...questionBank[selectedLevel]].sort(() => Math.random() - 0.5);
    }
    currentIndex = 0; scoreCorrect = 0; scoreWrong = 0;
    isGameRunning = true;

    updateBars();
    spawnNextQuestion();
}

function spawnNextQuestion() {
    if (currentIndex >= 20 || !isGameRunning) { endGame(); return; }

    const dispProgress = document.getElementById('disp-progress');
    if (dispProgress) dispProgress.innerText = currentIndex + 1;

    const playArea = document.getElementById('play-area');
    if (!playArea) return;
    playArea.innerHTML = '';

    const qData = currentQuestions[currentIndex % currentQuestions.length];
    if (!qData) return;

    const card = document.createElement('div');
    card.className = `question-card card-${selectedLevel}`;
    card.innerHTML = qData.q;

    const centerX = Math.max(10, (playArea.clientWidth - 210) / 2);
    card.style.left = `${centerX}px`;
    cardPosY = 10;
    card.style.top = `${cardPosY}px`;

    playArea.appendChild(card);
    activeCard = { element: card, data: qData, isDragging: false };
    setupDragEvents(card);

    if (fallInterval) clearInterval(fallInterval);
    fallInterval = setInterval(() => {
        if (!isGameRunning || !activeCard) return;
        if (!activeCard.isDragging) {
            cardPosY += fallSpeed;
            card.style.top = `${cardPosY}px`;
            if (cardPosY >= (playArea.clientHeight - 48)) {
                clearInterval(fallInterval);
                handleAnswer(false, true);
            }
        }
    }, 20);
}

function setupDragEvents(card) {
    let startX, startY, initialLeft, initialTop;
    const onPointerDown = (e) => {
        if (!activeCard) return;
        activeCard.isDragging = true;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        startX = clientX; startY = clientY;
        initialLeft = card.offsetLeft; initialTop = card.offsetTop;
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
    };
    const onPointerMove = (e) => {
        if (!activeCard || !activeCard.isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        card.style.left = `${initialLeft + (clientX - startX)}px`;
        card.style.top = `${initialTop + (clientY - startY)}px`;
        checkHoverZones(e);
    };
    const onPointerUp = (e) => {
        if (!activeCard) return;
        activeCard.isDragging = false;
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        const zone = getDroppedZone(e);
        if (zone) {
            clearInterval(fallInterval);
            handleAnswer((zone === 'true') === activeCard.data.ans);
        }
        clearZoneHighlights();
    };
    card.addEventListener('pointerdown', onPointerDown);
}

function checkHoverZones(e) {
    clearZoneHighlights();
    const zone = getDroppedZone(e);
    const zTrue = document.getElementById('zone-true');
    const zFalse = document.getElementById('zone-false');
    if (zone === 'true' && zTrue) zTrue.classList.add('drag-over');
    if (zone === 'false' && zFalse) zFalse.classList.add('drag-over');
}

function clearZoneHighlights() {
    const zTrue = document.getElementById('zone-true');
    const zFalse = document.getElementById('zone-false');
    if (zTrue) zTrue.classList.remove('drag-over');
    if (zFalse) zFalse.classList.remove('drag-over');
}

function getDroppedZone(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const elTrue = document.getElementById('zone-true');
    const elFalse = document.getElementById('zone-false');
    if (!elTrue || !elFalse) return null;

    const zTrue = elTrue.getBoundingClientRect();
    const zFalse = elFalse.getBoundingClientRect();

    if (clientX >= zTrue.left && clientX <= zTrue.right && clientY >= zTrue.top && clientY <= zTrue.bottom) return 'true';
    if (clientX >= zFalse.left && clientX <= zFalse.right && clientY >= zFalse.top && clientY <= zFalse.bottom) return 'false';
    return null;
}

function handleAnswer(isCorrect) {
    if (isCorrect) scoreCorrect++; else scoreWrong++;
    updateBars();
    currentIndex++;
    setTimeout(spawnNextQuestion, 200);
}

function updateBars() {
    const barCorrect = document.getElementById('bar-correct');
    const barWrong = document.getElementById('bar-wrong');
    if (barCorrect) barCorrect.style.height = `${(scoreCorrect / 20) * 100}%`;
    if (barWrong) barWrong.style.height = `${(scoreWrong / 20) * 100}%`;
}

function endGame() {
    isGameRunning = false;
    if (fallInterval) clearInterval(fallInterval);
    const overlay = document.getElementById('overlay');
    const title = document.getElementById('overlay-title');
    const desc = document.getElementById('overlay-desc');
    const btn = document.getElementById('btn-action');
    const levelSelectBox = document.getElementById('level-select-box');

    if (levelSelectBox) levelSelectBox.style.display = 'none';
    if (overlay) overlay.style.display = 'flex';

    if (title && desc) {
        if (scoreCorrect === 20) {
            title.innerText = "🏆 PERFECT! สุดยอดมาก!";
            title.style.color = "var(--accent-lime)";
            desc.innerHTML = `คุณตอบถูกครบทั้ง <b>20/20 ข้อ!</b><br>สมองพร้อมลุยสำหรับคณิตศาสตร์ ม.ต้น แล้ว!`;
        } else {
            title.innerText = "👍 พยายามได้ดีมาก!";
            title.style.color = "var(--accent-cyan)";
            desc.innerHTML = `ตอบถูก <b style="color:var(--accent-lime);">${scoreCorrect}</b> ข้อ | ตอบผิด <b style="color:var(--accent-red);">${scoreWrong}</b> ข้อ<br>ฝึกวอร์มอัปอีกรอบเพื่อความแม่นยำได้เลย!`;
        }
    }

    let countdown = 20;
    if (btn) {
        btn.innerText = `TRY AGAIN 🔄 (${countdown}s)`;
        btn.onclick = resetToStartScreen;
    }

    if (autoResetInterval) clearInterval(autoResetInterval);
    autoResetInterval = setInterval(() => {
        countdown--;
        if (countdown > 0 && btn) {
            btn.innerText = `TRY AGAIN 🔄 (${countdown}s)`;
        } else {
            clearInterval(autoResetInterval);
        }
    }, 1000);

    if (autoResetTimeout) clearTimeout(autoResetTimeout);
    autoResetTimeout = setTimeout(resetToStartScreen, 20000);
}

// Init Load
document.addEventListener('DOMContentLoaded', () => {
    startButtonBlink();
});

document.addEventListener("DOMContentLoaded", () => {
    const robot = document.getElementById("robot-companion");
    const pupils = document.querySelectorAll(".pupil");
    const bubble = document.getElementById("robot-bubble");

    if (!robot) return;

    let idleTimer = null;
    const IDLE_TIME = 8000;

    const messages = [
        "สู้ๆ น้ากับการเรียนวันนี้! ⚡",
        "มีตรงไหนสงสัย คลิกดูเนื้อหาซ้ายมือได้เลย",
        "MOR-TON STUDIO ยินดีต้อนรับครับ!",
        "เด็กไทย ต้องไม่แพ้ชาติใดในโลก..ดิวะ!",
        "ถ้าเหงา..ลองเข้าห้องChat ดูครับ",
        "อาจจะยัง!",
        "เป็ดเรียกว่า Duck, ที่รักเรียกว่า You",
        "ติดตามก็พอ อย่ามาติดต่อเลยเดี๋ยวจะติดใจ",
        "ผมชอบเลขครับ ชอบบวก ชอบลบ ชอบหาร แล้วก็ชอบคูณ",
        "เก่งมาก! ลุยโจทย์ต่อไปกันเลย 🚀"
    ];

    document.addEventListener("mousemove", (e) => {
        wakeUp();

        pupils.forEach((pupil) => {
            const eye = pupil.parentElement;
            if (!eye) return;
            const rect = eye.getBoundingClientRect();
            const eyeX = rect.left + rect.width / 2;
            const eyeY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
            const distance = Math.min(3, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 30);

            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;

            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });

        resetIdleTimer();
    });

    function wakeUp() {
        if (robot.classList.contains("sleeping")) {
            robot.classList.remove("sleeping");
            showBubble("ตื่นแล้วครับ! พร้อมลุยต่อ 👍");
        }
    }

    function goToSleep() {
        robot.classList.add("sleeping");
        hideBubble();
    }

    function resetIdleTimer() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(goToSleep, IDLE_TIME);
    }

    function showBubble(text) {
        if (!bubble) return;
        bubble.textContent = text;
        bubble.classList.add("active");
        setTimeout(hideBubble, 4000);
    }

    function hideBubble() {
        if (bubble) bubble.classList.remove("active");
    }

    robot.addEventListener("click", () => {
        wakeUp();
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        showBubble(randomMsg);
    });

    setInterval(() => {
        if (!robot.classList.contains("sleeping") && bubble && !bubble.classList.contains("active")) {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            showBubble(randomMsg);
        }
    }, 20000);

    resetIdleTimer();
});

// --- 🎮 ฟังก์ชันเปิด-ปิด Modal Game ---
function openGameModal(gameUrl) {
    const modal = document.getElementById("game-modal");
    const modalContainer = document.getElementById("modal-container");
    const iframe = document.getElementById("game-frame");

    if (modal && iframe && modalContainer) {
        iframe.src = gameUrl;
        modal.style.display = "flex";

        currentX = 0;
        currentY = 0;
        modalContainer.style.transform = "translate(-50%, -50%)";
    }
}

function closeGameModal() {
    const modal = document.getElementById("game-modal");
    const iframe = document.getElementById("game-frame");
    if (modal && iframe) {
        modal.style.display = "none";
        iframe.src = "";
    }
}

// --- 🖱️ ระบบคลิกลากป๊อปอัพ ---
const modalContainer = document.getElementById("modal-container");
const modalHeader = document.getElementById("modal-header");
const gameIframe = document.getElementById("game-frame");

let isDraggingModal = false;
let startXModal = 0, startYModal = 0;
let currentX = 0, currentY = 0;

if (modalContainer && modalHeader) {
    modalHeader.addEventListener("mousedown", (e) => {
        if (e.target.closest('.close-btn')) return;

        isDraggingModal = true;

        if (gameIframe) gameIframe.style.pointerEvents = "none";

        startXModal = e.clientX - currentX;
        startYModal = e.clientY - currentY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDraggingModal) return;
        e.preventDefault();

        currentX = e.clientX - startXModal;
        currentY = e.clientY - startYModal;

        modalContainer.style.transform = `translate3d(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px), 0)`;
    });

    document.addEventListener("mouseup", () => {
        if (isDraggingModal) {
            isDraggingModal = false;
            if (gameIframe) gameIframe.style.pointerEvents = "auto";
        }
    });
}

// --- 📱 ฟังก์ชันสำหรับเปิดหน้าจอจำลอง iPad Interactive ---
function openTabletSimulation(event, topicCode) {
    let level = 'm1';
    if (topicCode && topicCode.startsWith('m2')) level = 'm2';
    else if (topicCode && topicCode.startsWith('m3')) level = 'm3';

    const targetUrl = `tablet-mode/tablet.html?level=${level}&topic=${topicCode}`;
    window.open(targetUrl, '_blank');
}

function scrollContainer(containerId, distance) {
    const container = document.getElementById(containerId);
    if (container) {
        container.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
}