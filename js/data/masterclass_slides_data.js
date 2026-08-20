// Masterclass Slides Data (36 Slides) - Extra-Large Senior Executive Edition (คนอายุ 60 อ่านสบายตา)
const SLIDES_DATA = [
  {
    type: "hero",
    badge: "EXECUTIVE MASTERCLASS | STRATEGIC WORKSHOP",
    title: "AI MBA: ผู้นำกลยุทธ์ยุค AI<br>(Strategic Leadership)",
    subtitle: "ผสานแก่นคิด 4 สถาบันธุรกิจระดับโลก: HBS • Wharton • Stanford • MIT",
    author: "ชีพธรรม คำวิเศษณ์",
    credentials: "โค้ชชิ่ง AI MBA อันดับ 1 ของไทย (ร่วมกับทีมงาน FastAI)",
    notes: "เปิดหลักสูตร: วันนี้เรามาคุยเรื่องกลยุทธ์และความอยู่รอดของธุรกิจ ผู้นำที่ไม่ใช้ AI จะถูกแทนที่ด้วยผู้นำที่ใช้ AI"
  },
  {
    type: "standard",
    badge: "Module 1: The Executive Paradigm",
    title: "30 ปีแห่งคลื่นเทคโนโลยี: ต้นทุนมหาศาลของการ 'รอนิ่ง'",
    cards: [
      { badge: "2539", title: "คลื่นลูกที่ 1: อินเทอร์เน็ต", color: "#0F172A", items: ["ยุคโมเด็มต่อเน็ตเสียงแหลม", "ผู้บริหารบอก: 'เรื่องของไอที'", "ผลลัพธ์: คนเริ่มก่อนกวาดตลาด"] },
      { badge: "2553", title: "คลื่นลูกที่ 2: มือถือ & คลาวด์", color: "#002C77", items: ["สมาร์ทโฟนเปลี่ยนพฤติกรรม", "ธุรกิจดั้งเดิมถูกสตาร์ทอัพแซง", "ลูกค้าต้องการบริการ 24 ชม."] },
      { badge: "2569", title: "คลื่นลูกที่ 3: ปัญญาประดิษฐ์", color: "#8B0000", items: ["Harvard บังคับ MBA เรียน AI", "วางแผนกลยุทธ์ 'รายสัปดาห์'", "ความเร็วคือความได้เปรียบเดียว"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 1: The Executive Paradigm",
    title: "ผ่าตัด 3 ข้ออ้างของผู้นำ: กับดักที่ทำให้องค์กรแพ้",
    cards: [
      { badge: "กับดัก 1", title: "'เป็นเรื่องของฝ่ายไอที'", color: "#8B0000", items: ["ความจริง: ผู้นำไม่ยอมเข้าใจ", "AI ต้องเริ่มจากโจทย์ธุรกิจ", "C-Suite ต้องนำทัพเอง"] },
      { badge: "กับดัก 2", title: "'ลูกค้าเรายังไม่ใช้หรอก'", color: "#8C1515", items: ["ความจริง: ประเมินลูกค้าต่ำไป", "ลูกค้าเปลี่ยนไปหาคู่แข่งทันที", "ต้องทดสอบตลาดใน 7 วัน"] },
      { badge: "กับดัก 3", title: "'รอให้นิ่งก่อนค่อยลงทุน'", color: "#7A0019", items: ["ความจริง: ในเทคโนโลยี 'นิ่ง = ตาย'", "AI พัฒนาแบบก้าวกระโดด", "ทดลองผิดพลาดด้วยต้นทุนต่ำ"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 1: The Executive Paradigm",
    title: "ฉันทามติ 4 สถาบันธุรกิจโลก (HBS • Wharton • Stanford • MIT)",
    cards: [
      { badge: "HBS", title: "Harvard Business School", color: "#8B0000", items: ["เน้น Case Method และการตัดสินใจ", "AI คือคู่ซ้อมกลยุทธ์จำลองวิกฤต"] },
      { badge: "WHARTON", title: "The Wharton School", color: "#002C77", items: ["เน้นตัวเลข Unit Economics & ROI", "AI เพิ่มพลังคนแบบ Centaur/Cyborg"] },
      { badge: "STANFORD", title: "Stanford GSB", color: "#8C1515", items: ["เน้นความเร็ว Silicon Valley Agility", "สร้างนวัตกรรมทดสอบตลาดใน 7 วัน"] },
      { badge: "MIT", title: "MIT Sloan", color: "#7A0019", items: ["เน้น System Dynamics & Automation", "ใช้ AI Agents ขจัดคอขวดองค์กร"] }
    ]
  },
  {
    type: "hero",
    badge: "กฎเหล็กข้อที่หนึ่งของผู้นำ (THE IRON LAW)",
    title: "“AI ไม่ได้มาแทนที่ผู้นำ...<br>แต่ผู้นำที่ใช้ AI<br>จะเข้ามาแทนที่ผู้นำที่ไม่ใช้!”",
    quote: "หน้าที่ของผู้นำคือการเป็น 'Conductor' ควบคุมวงออร์เคสตราปัญญาประดิษฐ์",
    notes: "กฎเหล็กข้อนี้คือหัวใจของการเรียน AI MBA"
  },
  {
    type: "standard",
    badge: "Module 2: Harvard Business School",
    title: "Case Method: เปลี่ยน AI เป็นคู่ซ้อมกลยุทธ์ (Sparring Partner)",
    cards: [
      { badge: "เดิม", title: "ห้องสัมมนาเดิม", color: "#64748B", items: ["อ่านเอกสารเคส 20 หน้า", "รอเข้าห้องสัมมนาปีละครั้ง", "มีคนช่วยถกเถียงจำกัด"] },
      { badge: "ใหม่", title: "AI Sparring Partner", color: "#8B0000", items: ["สั่ง AI สวมบท 'กรรมการบอร์ดสายโหด'", "ท้าทายทุกสมมติฐานใน 30 วินาที", "หาจุดบอดก่อนเสนอบอร์ดจริง"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 2: Harvard Business School",
    title: "Five Forces ยุคใหม่: เมื่อพลังการแข่งขันเปลี่ยนไป",
    cards: [
      { badge: "1", title: "ผู้เล่นหน้าใหม่", color: "#8B0000", items: ["สตาร์ทอัพ 3 คน", "สร้างผลงานเทียบชั้น 300 คน"] },
      { badge: "2", title: "อำนาจลูกค้า", color: "#8B0000", items: ["ลูกค้าใช้ AI เช็กราคาเรียลไทม์", "พร้อมเปลี่ยนใจทันที"] },
      { badge: "3", title: "สินค้าทดแทน", color: "#8B0000", items: ["AI ทำแทนบริการดั้งเดิม", "คู่แข่งข้ามสายพันธุ์โผล่เร็ว"] },
      { badge: "4", title: "อำนาจซัพพลายเออร์", color: "#0F172A", items: ["การพึ่งพาโมเดล AI ยักษ์ใหญ่", "ต้องคุมต้นทุน API และข้อมูล"] }
    ]
  },
  {
    type: "prompt",
    badge: "Module 2: Harvard Business School",
    title: "Mega-Prompt บอร์ดที่ปรึกษา 4 สถาบัน (บทที่ 2)",
    promptTitle: "4-SCHOOL BOARD OF ADVISORS PROMPT",
    promptText: "บทบาท: คุณคือบอร์ดที่ปรึกษา 4 สถาบัน (HBS, Wharton, Stanford, MIT)\nธุรกิจของเรา: [ใส่ประเภทธุรกิจและปัญหาที่กำลังเจอ]\n\nคำสั่งวิเคราะห์:\n1. [HBS]: ชี้จุดบอดและประเด็นขัดแย้งของผู้นำ (Devil's Advocate)\n2. [Wharton]: คำนวณความเสี่ยงและ Unit Economics ทางการเงิน\n3. [Stanford]: เสนอทางเลือกนวัตกรรมทดสอบตลาดใน 7 วัน\n4. [MIT Sloan]: วิเคราะห์คอขวดและออกแบบระบบ Automation\nสรุปเป็นมติที่ประชุมบอร์ด 1 ย่อหน้าแบบฟันธง!"
  },
  {
    type: "standard",
    badge: "Module 2: Harvard Business School",
    title: "Workshop: ตรวจจับ 'จุดบอดสมมติฐาน' ธุรกิจตนเอง",
    cards: [
      { badge: "ขั้น 1", title: "1. เขียนสมมติฐานเดิม", color: "#8B0000", items: ["สิ่งที่เชื่อมา 5-10 ปี", "เช่น: 'ลูกค้าต้องการคุยกับคนเท่านั้น'", "เช่น: 'งานนี้ต้องใช้คนทำเป็นวัน'"] },
      { badge: "ขั้น 2", title: "2. รัน AI Stress-Test", color: "#002C77", items: ["ป้อนเข้า AI MBA Prompt Lab", "สั่ง AI หา 3 เหตุผลที่จุดนี้จะพัง", "สแกนหาคู่แข่งหน้าใหม่"] },
      { badge: "ขั้น 3", title: "3. กำหนด Action ชี้ขาด", color: "#047857", items: ["ปรับทิศทางกลยุทธ์ (Pivot)", "ออกแบบโครงการนำร่อง", "บรรจุเข้าวาระการประชุมสัปดาห์นี้"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 3: The Wharton School",
    title: "Centaur vs Cyborg: 2 วิธีทำงานร่วมกับ AI ที่ได้ผลสูงสุด",
    cards: [
      { badge: "CENTAUR", title: "โหมดเซนทอร์ (แบ่งงานขาด)", color: "#002C77", items: ["แบ่งหน้าที่ชัดเจน: คนคิดกลยุทธ์ / AI คำนวณข้อมูล", "คนเจรจาและตัดสินใจ / AI ร่างแบบจำลอง", "เหมาะกับงานที่ต้องการความแม่นยำสูง"] },
      { badge: "CYBORG", title: "โหมดไซบอร์ก (คิดร่วมกันเรียลไทม์)", color: "#0369A1", items: ["คนคิดไอเดีย ➔ AI เสนอต่อยอด ➔ คนตบกรอบ", "เส้นแบ่งระหว่างคนกับ AI กลืนเป็นเนื้อเดียว", "เหมาะกับการระดมความคิดและแก้โจทย์ยาก"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 3: The Wharton School",
    title: "Unit Economics & ROI: เปลี่ยน AI ให้เป็นผลกำไร",
    cards: [
      { badge: "ต้นทุน", title: "1. ต้นทุนลดลง 90%+", color: "#002C77", items: ["ลดเวลาทำรายงานจาก 40 ชม. ➔ 15 นาที", "ต้นทุนผลิตสื่อลดฮวบ", "ขยายขนาดได้แบบ Zero Marginal Cost"] },
      { badge: "รายได้", title: "2. รายได้เพิ่มขึ้น", color: "#047857", items: ["บริการเฉพาะบุคคล (Hyper-Personal)", "อัตราปิดการขายเพิ่มขึ้น 30-50%", "เปิดตัวสินค้าใหม่เร็วกว่าเดิม 4 เท่า"] },
      { badge: "ผลตอบแทน", title: "3. คืนทุนใน 30 วัน", color: "#B45309", items: ["ROI = มูลค่าเวลาที่ประหยัดได้ / ค่าเครื่องมือ", "ระยะเวลาคืนทุนเฉลี่ยต่ำกว่า 1 เดือน", "ป้องกันความเสี่ยงจากการถูกแซง"] }
    ]
  },
  {
    type: "prompt",
    badge: "Module 3: The Wharton School",
    title: "Prompt ทดสอบความเสี่ยงทางการเงินแบบ Wharton",
    promptTitle: "WHARTON FINANCIAL STRESS-TEST ENGINE",
    promptText: "บทบาท: คุณคือ CFO อาวุโสแห่ง The Wharton School\nโจทย์การลงทุน: [ระบุ เช่น ขยายสาขา / เปิดตัวสินค้าใหม่ / ลงทุนระบบ AI]\nตัวเลขปัจจุบัน: ยอดขาย [ระบุ], ต้นทุนคงที่ [ระบุ], อัตรากำไร [ระบุ]\n\nคำสั่งปฏิบัติการ:\n1. วิเคราะห์จุดคุ้มทุน 3 สถานการณ์ (Best Case, Base Case, Worst Case)\n2. คำนวณอัตราส่วนความคุ้มค่า CLV ต่อ CAC Ratio\n3. Stress-Test: หากคู่แข่งลดราคา 20% ธุรกิจจะมีกระแสเงินสดเหลือเท่าไร?\n4. สรุปคำแนะนำ 3 ข้อที่ CFO ต้องแจ้งบอร์ดบริหารทันที!"
  },
  {
    type: "standard",
    badge: "Module 3: The Wharton School",
    title: "AI Governance & ความปลอดภัยข้อมูลองค์กร (PDPA)",
    cards: [
      { badge: "ข้อมูลลับ", title: "1. รักษาความลับทางการค้า", color: "#8B0000", items: ["ห้ามใส่รหัสผ่านหรือความลับลง Public AI", "เปิดโหมด Enterprise ไม่ให้ AI นำข้อมูลไปเทรน", "ปฏิบัติตามกฎหมาย PDPA เคร่งครัด"] },
      { badge: "ความถูกต้อง", title: "2. Trust but Verify", color: "#B45309", items: ["ตรวจสอบตัวเลขสำคัญและข้อกฎหมายเสมอ", "กำหนดให้มีคนอนุมัติขั้นสุดท้าย (Human in Loop)", "เชื่อมโยงกับฐานข้อมูลจริงของบริษัท"] },
      { badge: "นโยบาย", title: "3. สร้างคู่มือ AI องค์กร", color: "#002C77", items: ["ออกระเบียบการใช้ AI ที่ชัดเจนให้พนักงาน", "อบรมเรื่องลิขสิทธิ์และจริยธรรม", "สร้างสิ่งแวดล้อมที่ปลอดภัยในการทดลอง"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 4: Stanford GSB",
    title: "Lean AI Sprint: เปลี่ยนแผน 6 เดือน สู่การทดสอบใน 7 วัน",
    cards: [
      { badge: "แบบเดิม", title: "วางแผนแบบเดิม (6 เดือน)", color: "#64748B", items: ["ทำวิจัยตลาดนาน 3 เดือน", "พัฒนาสินค้านาน 6 เดือน", "งบหมดก่อนรู้ว่าตลาดต้องการไหม"] },
      { badge: "แบบ STANFORD", title: "Lean AI Sprint (7 วัน)", color: "#8C1515", items: ["ใช้ AI จำลองลูกค้า 100 คนใน 1 ชม.", "ปล่อยหน้าเว็บทดสอบ Demand ใน 24 ชม.", "รู้ผลจริงและปรับทิศทางใน 7 วัน"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 4: Stanford GSB",
    title: "Blue Ocean ERRC: กลยุทธ์ฉีกหนีสงครามราคา",
    cards: [
      { badge: "E", title: "1. ตัดทิ้ง (Eliminate)", color: "#8B0000", items: ["ตัดสิ่งสิ้นเปลืองที่ลูกค้าไม่ต้องการแล้ว", "เช่น พื้นที่หน้าร้านขนาดใหญ่ที่คนไม่นั่ง"] },
      { badge: "R", title: "2. ลดลง (Reduce)", color: "#B45309", items: ["ลดสิ่งที่มีต้นทุนสูงเกินจำเป็น", "เช่น สต็อกค้างและการยิงแอดหว่าน"] },
      { badge: "R", title: "3. เพิ่มขึ้น (Raise)", color: "#002C77", items: ["ยกระดับสิ่งที่ลูกค้าให้คุณค่าแท้จริง", "เช่น ความเร็วในการส่งมอบและคุณภาพ"] },
      { badge: "C", title: "4. สร้างสรรค์ (Create)", color: "#0369A1", items: ["สร้างคุณค่าใหม่ที่คู่แข่งไม่เคยมี", "เช่น ระบบ AI แนะนำสินค้าเฉพาะบุคคล"] }
    ]
  },
  {
    type: "prompt",
    badge: "Module 4: Stanford GSB",
    title: "Prompt น่านน้ำสีคราม & นวัตกรรม 7 วัน",
    promptTitle: "STANFORD BLUE OCEAN & 7-DAY SPRINT",
    promptText: "บทบาท: คุณคือ Silicon Valley VC และอาจารย์นวัตกรรมแห่ง Stanford GSB\nธุรกิจของเรา: [ระบุ เช่น คลินิกสุขภาพ / คาเฟ่ / ขนส่ง / โรงงาน] ติดกับดักตัดราคา\n\nคำสั่งสร้างนวัตกรรม:\n1. ร่างตาราง ERRC Grid เพื่อฉีกหนีสงครามราคาในตลาดเดิม\n2. เสนอ 3 ไอเดียบริการใหม่แบบ 'Zero Marginal Cost' ขับเคลื่อนด้วย AI\n3. วาง Action Plan 7 วัน (Day 1 - 7) ด้วยงบประมาณไม่เกิน 5,000 บาท!"
  },
  {
    type: "standard",
    badge: "Module 4: Stanford GSB",
    title: "บันได 3 ขั้นสร้างต้นแบบเร็ว (Minimum Viable Intelligence)",
    cards: [
      { badge: "ขั้น 1", title: "Layer 1: Prompt Prototype", color: "#8C1515", items: ["เขียน Mega-Prompt ใน Prompt Lab", "ทดสอบกับโจทย์จริง 20 เคส", "ได้ผลแม่นยำสม่ำเสมอ > 90%"] },
      { badge: "ขั้น 2", title: "Layer 2: Custom Agent / SOP", color: "#0369A1", items: ["อัปโหลดคู่มือและระเบียบปฏิบัติบริษัท", "กำหนดแนวทางป้องกันความเสี่ยง", "ทดลองใช้ภายในทีมงาน"] },
      { badge: "ขั้น 3", title: "Layer 3: Scaled Deployment", color: "#047857", items: ["เชื่อมต่อ Line OA / CRM บริษัท", "ให้บริการลูกค้าอัตโนมัติ 24 ชม.", "เก็บฟีดแบ็กมาปรับปรุงต่อเนื่อง"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 5: MIT Sloan",
    title: "System Dynamics: ขจัด 3 คอขวดใหญ่ขององค์กร",
    cards: [
      { badge: "คอขวด 1", title: "คอขวดการอนุมัติ (Approval Lag)", color: "#8B0000", items: ["ผู้บริหารต้องเซ็นทุกเรื่องจนงานติดหล่ม", "แก้ด้วย: AI คัดกรองงาน 80% ให้ตัดสินใจเฉพาะเคสสำคัญ"] },
      { badge: "คอขวด 2", title: "คอขวดการส่งต่อข้อมูล (Silos)", color: "#002C77", items: ["ข้อมูลยอดขายไม่เชื่อมฝ่ายผลิตและการตลาด", "แก้ด้วย: AI เชื่อมโยงและสรุปรายงานข้ามแผนกอัตโนมัติ"] },
      { badge: "คอขวด 3", title: "คอขวดการผลิตเนื้อหา (Content)", color: "#047857", items: ["ผลิตสื่อและคอนเทนต์ไม่ทันตลาด", "แก้ด้วย: ระบบ AI สร้างร่างแรกให้ทีมงานต่อยอดใน 5 นาที"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 5: MIT Sloan",
    title: "Multi-Agent Workflows: อนาคตทีมงาน AI อัตโนมัติ",
    cards: [
      { badge: "AGENT 1", title: "1. Data Scout (หน่วยสอดแนม)", color: "#0369A1", items: ["ดึงข้อมูลยอดขายและรีวิวลูกค้า", "ตรวจจับสัญญาณผิดปกติและโอกาสใหม่", "ส่งสรุปประเด็นร้อนให้ Agent 2 ทันที"] },
      { badge: "AGENT 2", title: "2. Strategist (หน่วยวางแผน)", color: "#7A0019", items: ["นำข้อมูลมาแมปเข้า SWOT และ BCG", "ร่างทางเลือกกลยุทธ์ 3 ข้อพร้อมตัวเลข", "ส่งต่อให้ Agent 3 จัดเตรียมแผนงาน"] },
      { badge: "AGENT 3", title: "3. Commander (หน่วยปฏิบัติการ)", color: "#047857", items: ["กระจายงานลงระบบบริหารโครงการ", "แจ้งเตือนผู้บริหารเฉพาะจุดที่ต้องอนุมัติ", "ติดตามผลการทำงานอัตโนมัติ"] }
    ]
  },
  {
    type: "prompt",
    badge: "Module 5: MIT Sloan",
    title: "Prompt: AI Chief of Staff ปลดล็อกเวลาผู้บริหาร",
    promptTitle: "MIT CHIEF OF STAFF BOTTLENECK REMOVER",
    promptText: "บทบาท: คุณคือ Chief of Staff ส่วนตัวของ CEO ผู้เชี่ยวชาญด้านระบบแห่ง MIT Sloan\nกระบวนการทำงานปัจจุบัน: [ระบุ 5 ขั้นตอนหลัก และจุดที่งานติดขัดล่าช้า]\n\nคำสั่งปฏิบัติการ:\n1. ชี้จุดสูญเปล่า (Waste Time) และออกแบบ Flow การทำงานใหม่\n2. ออกแบบระบบ AI คัดกรองงานอัตโนมัติ 80% ให้เสร็จใน 5 นาที\n3. กำหนดเกณฑ์ชัดเจนว่าเรื่องใดต้องส่งถึงมือผู้บริหารอนุมัติ\n4. ร่างคู่มือปฏิบัติงาน (SOP) ใหม่ 1 หน้ากระดาษให้ทีมงานเริ่มใช้พรุ่งนี้!"
  },
  {
    type: "standard",
    badge: "Module 5: MIT Sloan",
    title: "บันได 5 ขั้น สู่องค์กรอัตโนมัติ (Autonomous Enterprise)",
    cards: [
      { badge: "L1", title: "L1: Manual", color: "#64748B", items: ["แรงคน 100%", "ใช้ AI สรุปงานเป็นครั้งคราว"] },
      { badge: "L2", title: "L2: Assisted", color: "#002C77", items: ["พนักงานใช้ AI ช่วยงานส่วนตัว", "เริ่มมีคลัง Prompt"] },
      { badge: "L3", title: "L3: Automated", color: "#8C1515", items: ["ฝัง AI ในขั้นตอนทำงานแผนก", "ลดเวลาทำงาน 50%"] },
      { badge: "L4", title: "L4: Integrated", color: "#7A0019", items: ["AI เชื่อมโยงข้ามแผนกอัตโนมัติ", "ผู้บริหาร Monitor & Approve"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 6: Prompt Engineering Lab",
    title: "ทำไม 90% ของ Prompt ทั่วไปถึงล้มเหลว?",
    cards: [
      { badge: "ถามสั้นๆ", title: "❌ Prompt ทั่วไป (ผลลัพธ์เป็นศูนย์)", color: "#8B0000", items: ["'ช่วยทำการตลาดร้านกาแฟหน่อย'", "'ช่วยคิดวิธีเพิ่มยอดขาย 20%'", "ผลลัพธ์: คำตอบกว้างๆ ทั่วไป นำไปใช้จริงไม่ได้"] },
      { badge: "RTCF", title: "✅ Prompt สาย AI MBA (RTCF)", color: "#002C77", items: ["กำหนด Role + Context + Task + Format ชัดเจน", "ร้อยเรียงโมเดลธุรกิจ (SWOT + BCG + ERRC)", "ผลลัพธ์: บทวิเคราะห์ระดับ McKinsey พร้อมแผน 90 วัน"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 6: Prompt Engineering Lab",
    title: "โครงสร้าง RTCF: 4 เสาหลักสั่งการ AI ระดับผู้บริหาร",
    cards: [
      { badge: "R", title: "R — Role (บทบาท)", color: "#8B0000", items: ["สวมหมวกความเชี่ยวชาญให้ AI", "เช่น: ประธานที่ปรึกษากลยุทธ์ / CMO / แพทย์"] },
      { badge: "C", title: "C — Context (บริบท)", color: "#002C77", items: ["ข้อมูลธุรกิจ จุดแข็ง ปัญหา คู่แข่ง และเป้าหมาย", "ยิ่งบริบทคม คำตอบยิ่งทรงพลัง"] },
      { badge: "T", title: "T — Task (ภารกิจ)", color: "#8C1515", items: ["คำสั่งและโมเดลธุรกิจที่ต้องใช้", "บังคับวิเคราะห์ตามกรอบ SWOT, BCG, ERRC"] },
      { badge: "F", title: "F — Format (รูปแบบ)", color: "#0369A1", items: ["ต้องการผลลัพธ์แบบใด (ตารางสรุป / แผน 90 วัน)", "ภาษาทางการระดับ C-Suite"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 6: Prompt Engineering Lab",
    title: "Graph of Thoughts (GoT): พลังคิดหลายมิติและฟันธงมติ",
    cards: [
      { badge: "1. แตกแขนง", title: "1. Diverge (สร้างทางเลือก)", color: "#002C77", items: ["สร้างกลยุทธ์ 3-5 ทางที่แตกต่างกัน", "เปิดรับมุมมองที่ขัดแย้งป้องกัน Groupthink"] },
      { badge: "2. หักล้าง", title: "2. Evaluate (ประเมินจุดอ่อน)", color: "#8C1515", items: ["นำมุมมองการเงินหักล้างมุมมองการตลาด", "ค้นหาจุดเสี่ยงที่ซ่อนอยู่ของแต่ละแผน"] },
      { badge: "3. ฟันธง", title: "3. Synthesize (มติชี้ขาด)", color: "#047857", items: ["สังเคราะห์เป็น 1 กลยุทธ์ที่ดีที่สุด", "ระบุ Confidence Score % และแผนฉุกเฉิน"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 6: Prompt Engineering Lab",
    title: "4 สูตรสำเร็จรูป 1-Click Presets ในสตูดิโอ",
    cards: [
      { badge: "PRESET 1", title: "☕ คาเฟ่ & โรงคั่วพรีเมียม", color: "#B45309", items: ["โจทย์: โดนตัดราคา GP เดลิเวอรีสูง", "เป้าหมาย: เพิ่ม B2B 40% และ Subscription"] },
      { badge: "PRESET 2", title: "🏥 คลินิกสุขภาพ & ชะลอวัย", color: "#0369A1", items: ["โจทย์: ค่าแอดแพง รพ.ใหญ่เปิดแข่ง", "เป้าหมาย: แพ็กเกจสมาชิกรายปี 200 ราย"] },
      { badge: "PRESET 3", title: "🚀 สตาร์ทอัพ AI SaaS บัญชี", color: "#8C1515", items: ["โจทย์: สำนักงานบัญชียึดติดกระดาษ", "เป้าหมาย: เจาะ 1,000 แห่ง สร้าง $1M ARR"] },
      { badge: "PRESET 4", title: "🛍️ แบรนด์แฟชั่น Omnichannel", color: "#002C77", items: ["โจทย์: เสื้อผ้าจีนตัดราคา สต็อกค้าง", "เป้าหมาย: ยกระดับสู่ตลาดพรีเมียม"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 6: Prompt Engineering Lab",
    title: "Live Demo: สร้าง Mega-Prompt ใน 60 วินาที",
    cards: [
      { badge: "ขั้น 1", title: "1. กรอกบริบทธุรกิจ (C)", color: "#002C77", items: ["อาชีพ ประเภทธุรกิจ จุดแข็ง ปัญหา และเป้าหมาย 6-12 เดือน"] },
      { badge: "ขั้น 2", title: "2. ติ๊กเลือกโมเดล (T)", color: "#B45309", items: ["ติ๊กเลือก SWOT + TOWS + BCG + Blue Ocean + GoT"] },
      { badge: "ขั้น 3", title: "3. 1-Click Launch", color: "#047857", items: ["กดปุ่ม Copy หรือ Quick Launch ส่งตรงเข้า ChatGPT / Claude / Gemini"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 7: Live Executive Simulation",
    title: "เคสจำลองสด: ผ่าตัดธุรกิจ Apex Retail 8 สาขา",
    cards: [
      { badge: "สถานการณ์", title: "ข้อมูลบริษัท 'Apex Retail'", color: "#0F172A", items: ["ธุรกิจไลฟ์สไตล์และกาแฟพรีเมียม 8 สาขา", "ยอดขาย 120 ล้าน/ปี กำไรสุทธิลดเหลือ 6%", "วิกฤต: สินค้าจีนตัดราคา ค่าเช่าห้างพุ่ง ลูกค้าซื้อผ่าน TikTok"] },
      { badge: "เป้าหมาย", title: "ภารกิจของผู้บริหาร (Mission)", color: "#8B0000", items: ["1. ฟื้นฟูกำไรสุทธิกลับสู่ระดับ 15%+", "2. สร้างรายได้ประจำแบบ B2B Subscription", "3. สร้างระบบ Omnichannel ขับเคลื่อนด้วย AI"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 7: Live Executive Simulation",
    title: "Step 1 & 2: แปลง SWOT สู่ TOWS Action Matrix",
    cards: [
      { badge: "SO: รุก", title: "SO Strategy (เติบโต)", color: "#047857", items: ["ใช้จุดแข็งทีมคั่วกาแฟรางวัล ขยายตลาด B2B Office Coffee Subscription"] },
      { badge: "WO: แก้", title: "WO Strategy (ปรับทิศ)", color: "#002C77", items: ["ใช้ AI อัตโนมัติทำ Live Commerce เจาะ TikTok โดยไม่ต้องจ้างเอเจนซี่แพง"] },
      { badge: "ST: ป้อง", title: "ST Strategy (ป้องกัน)", color: "#B45309", items: ["ชูมาตรฐานและบริการเฉพาะบุคคล สู้กับสินค้าราคาถูกจากจีน"] },
      { badge: "WT: รับ", title: "WT Strategy (ปรับลด)", color: "#8B0000", items: ["ปิด 2 สาขาห้างที่ขาดทุน ลดภาระค่าเช่าคงที่ทันที 350,000 บาท/เดือน"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 7: Live Executive Simulation",
    title: "Step 3 & 4: จัดพอร์ต BCG และสร้าง Blue Ocean",
    cards: [
      { badge: "BCG", title: "จัดพอร์ตสินค้า BCG", color: "#002C77", items: ["⭐ Stars: B2B Office Subscription ➔ ทุ่มขยาย", "🐮 Cash Cows: หน้าร้าน 4 สาขาหลัก ➔ เก็บเงินสด", "❓ Question: สินค้านำเข้า ➔ ทำ Dropship ลดสต็อก", "🐶 Dogs: เบเกอรี่สดเหลือทิ้งสูง ➔ ตัดทิ้งทันที"] },
      { badge: "ERRC", title: "สร้างน่านน้ำใหม่ Blue Ocean", color: "#0369A1", items: ["🚫 ตัดทิ้ง: พื้นที่นั่งแช่ขนาดใหญ่ในห้าง", "📉 ลดลง: การยิงแอดเฟซบุ๊กทั่วไป", "📈 เพิ่มขึ้น: คุณภาพคั่วสดตามสั่ง (Custom Roast)", "✨ สร้างใหม่: แพลตฟอร์ม AI Barista แนะนำเมล็ดเฉพาะคน"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 7: Live Executive Simulation",
    title: "Step 5: มติชี้ขาดบอร์ดบริหาร (GoT Verdict - 94%)",
    cards: [
      { badge: "มติเอกฉันท์", title: "ยุทธศาสตร์ชี้ขาด: 'B2B Premium Pivot & Lean Omnichannel'", color: "#8B0000", items: [
        "1. ปิด 2 สาขาห้างที่ขาดทุนใน 45 วัน ปลดล็อกกระแสเงินสด 350,000 บาท/เดือน",
        "2. เปิดตัว 'Executive Coffee Lab Subscription' เจาะอาคารออฟฟิศเกรด A จำนวน 50 แห่ง",
        "3. ใช้ AI ปรับแต่งรสชาติกาแฟตามความชอบของผู้บริหารแต่ละบริษัท",
        "4. เกณฑ์วัดผล 60 วันแรก: ต้องปิดยอดจอง B2B ไม่ต่ำกว่า 15 บัญชี"
      ]}
    ]
  },
  {
    type: "standard",
    badge: "Module 7: Live Executive Simulation",
    title: "3 กฎเหล็กอ่านผลลัพธ์ AI เยี่ยง McKinsey Partner",
    cards: [
      { badge: "1. ตรวจสอบ", title: "1. Sanity Check สมมติฐาน", color: "#8B0000", items: ["ตัวเลขสมเหตุสมผลกับตลาดจริงไหม?", "มีต้นทุนแฝงหรือข้อกฎหมายใดที่ AI มองข้าม?", "อย่าเชื่อจนกว่าจะได้ Verify"] },
      { badge: "2. ความพร้อม", title: "2. People & Culture Fit", color: "#002C77", items: ["ทีมงานมีทักษะพร้อมรับแผนนี้ไหม?", "ต้องอบรมทักษะ AI อะไรเพิ่ม?", "วัฒนธรรมองค์กรพร้อมรับความเร็วระดับนี้ไหม?"] },
      { badge: "3. ตัวชี้วัด", title: "3. แปลงสู่ OKRs และ KPIs", color: "#047857", items: ["แปลงกลยุทธ์สู่ตัวชี้วัดรายสัปดาห์", "กำหนดผู้รับผิดชอบหลักเพียงคนเดียว (Single Owner)", "ประชุม 15 นาทีติดตามผลทุกเช้า"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 8: Execution & The Human Moat",
    title: "แผนขับเคลื่อน AI องค์กรใน 90 วัน (3-Horizon Roadmap)",
    cards: [
      { badge: "วัน 1 - 30", title: "Horizon 1: Quick Wins", color: "#002C77", items: ["ติดตั้ง AI Co-pilot ให้ผู้บริหารทุกคน", "อบรม RTCF Prompt Lab ทั้งองค์กร", "ลดเวลาทำเอกสารและรายงานประจำ 50%"] },
      { badge: "วัน 31 - 60", title: "Horizon 2: Process Redesign", color: "#8C1515", items: ["ขจัดคอขวด 3 จุดใหญ่ในห่วงโซ่คุณค่า", "ทดสอบโครงการนำร่อง AI บริการลูกค้า", "วัดผล ROI และ Unit Economics ชัดเจน"] },
      { badge: "วัน 61 - 90", title: "Horizon 3: Institutional Moat", color: "#047857", items: ["ติดตั้ง AI Agents ทำงานอัตโนมัติข้ามแผนก", "สร้าง Data Lake เทรน AI เฉพาะของบริษัท", "ยกระดับสู่ Level 4 Autonomous Enterprise"] }
    ]
  },
  {
    type: "standard",
    badge: "Module 8: Execution & The Human Moat",
    title: "จัดโครงสร้างทีมงานใหม่: จาก Pyramid สู่ Hybrid Pods",
    cards: [
      { badge: "เดิม", title: "พีระมิดแบบเดิม (ช้าและแยกส่วน)", color: "#64748B", items: ["แบ่งตามแผนก ข้อมูลส่งต่อช้า", "ผู้บริหารระดับกลางคอยส่งผ่านข้อมูล", "ตอบสนองต่อการเปลี่ยนแปลงตลาดช้า"] },
      { badge: "ใหม่", title: "Hybrid Pods (เร็วขึ้น 10 เท่า)", color: "#0369A1", items: ["ทีมเล็ก 3-5 คน ขับเคลื่อนด้วย AI", "พนักงาน 1 คน มีทักษะ Full-Stack (คิด + วิเคราะห์ + ทำสื่อ)", "ผู้บริหารทำหน้าที่เป็น Coach ไม่ใช่ผู้คุม"] }
    ]
  },
  {
    type: "hero",
    badge: "ปราการความได้เปรียบสุดท้ายของมนุษย์ (THE HUMAN MOAT)",
    title: "“ในวันที่ความฉลาดของ AI มีอยู่ล้นเหลือ...\nวิจารณญาณ (Judgment),\nความเข้าอกเข้าใจ (Empathy),\nและ รสนิยม (Taste)\nคือ 3 สิ่งล้ำค่าที่ AI ลอกเลียนไม่ได้!”",
    quote: "ยิ่ง AI ฉลาดขึ้นเท่าไร... ความเป็นมนุษย์ของผู้นำยิ่งมีมูลค่าสูงขึ้นเท่านั้น",
    notes: "ฝากข้อคิดสุดท้ายในใจผู้บริหารทุกคน"
  },
  {
    type: "standard",
    badge: "Module 8: Execution & The Human Moat",
    title: "10 บัญญัติ AI MBA สรุปย่อสำหรับห้องประชุมบอร์ด",
    cards: [
      { badge: "ข้อ 1 - 5", title: "ด้านวิธีคิดและกลยุทธ์", color: "#8B0000", items: ["1. AI เป็นเรื่องของผู้นำ ไม่ใช่ไอที", "2. การรอนิ่ง คือการรอให้คู่แข่งแซง", "3. ลองทำ 10 ครั้ง ดีกว่าฟัง 100 ชม.", "4. สั่งการด้วยกรอบ RTCF เสมอ", "5. ผสานโมเดลธุรกิจข้ามสถาบัน"] },
      { badge: "ข้อ 6 - 10", title: "ด้านการปฏิบัติและการเงิน", color: "#002C77", items: ["6. คำนวณ Unit Economics และ ROI", "7. เปลี่ยนแผน 6 เดือน สู่ 7 วัน", "8. ขจัดคอขวดด้วย AI Automation", "9. วาง AI Governance และความปลอดภัย", "10. รักษา Human Moat: วิจารณญาณและรสนิยม"] }
    ]
  },
  {
    type: "hero",
    badge: "เริ่มต้นก้าวสู่ผู้นำยุค AI วันนี้",
    title: "ก้าวสู่ผู้นำยุคใหม่ เริ่มต้นทดลองจริงได้ตั้งแต่วันนี้",
    subtitle: "AI MBA Executive Masterclass โดย ชีพธรรม คำวิเศษณ์ & FastAI",
    cards: [
      { badge: "หนังสือ", title: "📖 หนังสือ AI MBA (22 บท)", items: ["อ่านฉบับเต็มออนไลน์ฟรี", "aimba.cheeptham.com"] },
      { badge: "สตูดิโอ", title: "⚡ AI MBA Prompt Lab", items: ["สร้าง Mega-Prompt 1 คลิก", "aimba.cheeptham.com/prompt-lab.html"] },
      { badge: "ติดต่อ", title: "🤝 อ.ชีพธรรม & FastAI", items: ["บรรยายพิเศษ & Coaching", "YouTube / FB / X: @tri333"] }
    ]
  }
];
