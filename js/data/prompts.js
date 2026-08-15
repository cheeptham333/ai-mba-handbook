/**
 * AI MBA Handbook - Multi-AI Model Tailored Prompts
 * Supports: Gemini, NotebookLM, Claude 3.7, Grok 3, Copilot, Perplexity, ChatGPT-4o
 */

export const AI_MODELS = [
  { id: "gemini", name: "Gemini 2.5 Pro", icon: "✨", tagColor: "#2563EB", note: "จุดเด่น: ประมวลผลเอกสารยาว 2M Tokens, Flash Thinking, เข้าใจบริบทหลายภาษา และเชื่อมต่อ Google Workspace" },
  { id: "notebooklm", name: "NotebookLM Pro", icon: "📓", tagColor: "#4F46E5", note: "จุดเด่น: สังเคราะห์แหล่งข้อมูลเฉพาะทาง (Grounded Sources) และสร้าง AI Audio Overview 2.0 (Podcast สนทนาสองเสียงปรับแต่งได้)" },
  { id: "claude", name: "Claude 3.7 Sonnet (Thinking)", icon: "🧠", tagColor: "#D97706", note: "จุดเด่น: Hybrid Reasoning (Extended Thinking Mode), คิดวิเคราะห์เชิงกลยุทธ์ขั้นสูง, สไตล์การเขียนที่เป็นธรรมชาติและสุขุม" },
  { id: "grok", name: "Grok 3 (DeepSearch)", icon: "⚡", tagColor: "#18181B", note: "จุดเด่น: DeepSearch & Think Mode, Real-time Web/X Knowledge, ตรงไปตรงมา ไม่เซนเซอร์เกินจำเป็น, คิดนอกกรอบท้าทายสมมติฐาน" },
  { id: "copilot", name: "Copilot Pro", icon: "💼", tagColor: "#0284C7", note: "จุดเด่น: Think Deeper Mode, บูรณาการกับ Microsoft 365 (Excel, PowerPoint, Word) และการสรุปรายงานทางธุรกิจ" },
  { id: "perplexity", name: "Perplexity Pro (Sonar)", icon: "🔍", tagColor: "#0D9488", note: "จุดเด่น: Sonar Deep Research & Reason, ค้นคว้าข้อมูลเชิงลึกพร้อม Citation แหล่งอ้างอิงและสถิติตลาดสดใหม่" },
  { id: "chatgpt", name: "ChatGPT-4o / o3", icon: "🟢", tagColor: "#10B981", note: "จุดเด่น: Advanced Voice, o3 Reasoning, Data Analysis, การคำนวณและสร้างตาราง Interactive Problem Solving" }
];

export const PROMPTS_DATABASE = {
  "module-1": {
    baseTitle: "Five Forces & Strategic Moat Simulation",
    variations: {
      gemini: `คุณคือศาสตราจารย์ด้านกลยุทธ์องค์กรจาก Harvard Business School (HBS)
จงช่วยผมวิเคราะห์และวางกลยุทธ์สำหรับธุรกิจ: [ระบุชื่อธุรกิจ / สินค้า / บริการ ของคุณ]

1. วิเคราะห์ Five Forces 2.0 โดยพิจารณาผลกระทบของ Generative AI ใน 3-5 ปีข้างหน้า
2. ประเมิน VRIO Framework สำหรับทรัพยากรหลักของบริษัท
3. สร้างตาราง Strategic Action Plan 3 ระยะ (30 วัน, 90 วัน, 1 ปี)
4. สรุปเป็น Executive Summary 3 บรรทัดสำหรับนำเสนอบอร์ดบริหาร`,

      notebooklm: `[คำสั่งสำหรับ NotebookLM หลังจากอัปโหลดรายงานธุรกิจหรือเนื้อหา Module 1]
จากแหล่งข้อมูลทั้งหมดที่แนบมา:
1. สรุปประเด็นสำคัญที่สุด 5 ข้อเรื่องการสร้างความได้เปรียบทางการแข่งขัน (Strategic Moats)
2. อธิบายว่าผู้บริหารควรนำ VRIO Framework มาปรับใช้ในการประเมินบุคลากรและระบบ AI อย่างไร
3. ช่วยร่างหัวข้อสำหรับนำไปทำเป็น Audio Overview (Deep Dive Conversation ระหว่างโฮสต์ 2 คน) ในหัวข้อ 'การปฏิรูปกลยุทธ์ผู้นำยุค AI'`,

      claude: `Act as an Elite Chief Strategy Officer & Stanford GSB Professor.
I need a rigorous, intellectually honest Strategic Assessment for my business:
Business Context: [ใส่รายละเอียดธุรกิจ, ขนาดทีม, กลุ่มลูกค้า, คู่แข่งสำคัญ]

Please perform:
1. 'Pre-Mortem' Strategic Analysis: สมมติว่าในอีก 2 ปีข้างหน้า ธุรกิจนี้ล้มเหลว อะไรคือ 3 สาเหตุหลัก และต้องวางระบบป้องกันอย่างไรตั้งแต่วันนี้?
2. Defensible Moat Architecture: เราจะสร้าง Network Effects, Switching Costs, และ Proprietary Data Loops ได้อย่างไร?
3. Trade-offs Decision Matrix: สิ่งใดที่บริษัทต้อง 'หยุดทำ' ทันทีเพื่อมุ่งเน้น Core Advantage?`,

      grok: `คุณคือที่ปรึกษาเชิงกลยุทธ์ที่ตรงไปตรงมา ไม่อ้อมค้อม ไม่ใช้คำศัพท์สวยหรูแต่ไร้ความหมาย
ธุรกิจของฉันคือ: [ระบุรายละเอียดธุรกิจ]
คู่แข่งหลักคือ: [ระบุคู่แข่ง]

ช่วยวิจารณ์ธุรกิจของฉันอย่างดุดัน (Roast & Reality Check):
- จุดอ่อนร้ายแรงที่ทำให้เราอาจเจ๊งในยุค AI คืออะไร?
- คู่แข่งกำลังมีจุดบอดตรงไหนที่ฉันสามารถเข้าตีตลาดแบบแหกคอกได้?
- ให้ข้อเสนอแนะ 3 ข้อที่ทำได้จริงและเห็นผลใน 14 วัน`,

      copilot: `หน้าที่ของคุณคือ Corporate Strategy Advisor
โปรดสร้างรายงานวิเคราะห์กลยุทธ์องค์กรสำหรับนำไปใส่ใน Microsoft Word และ PowerPoint Presentation:
ธุรกิจ: [ใส่ชื่อธุรกิจ]

- ส่วนที่ 1: ตารางวิเคราะห์ SWOT Matrix & Actionable TOWS Matrix
- ส่วนที่ 2: ตาราง KPI และ OKRs ประจำไตรมาส (Objective, Key Results, Owner, Target)
- ส่วนที่ 3: Outline สไลด์ 5 หน้าสำหรับนำเสนอคณะกรรมการบริหาร`,

      perplexity: `ค้นหาและวิเคราะห์ข้อมูลล่าสุดของอุตสาหกรรม [ระบุชื่ออุตสาหกรรม เช่น ค้าปลีกไทย, อสังหาริมทรัพย์, SaaS]:
1. สถิติอัตราการเติบโต (CAGR) และแนวโน้มพฤติกรรมผู้บริโภคในปีล่าสุด พร้อมแหล่งอ้างอิง (Citations)
2. กรณีศึกษาของ 3 บริษัทชั้นนำระดับโลกที่นำ Generative AI มาปรับโครงสร้างกลยุทธ์สำเร็จ
3. สรุปปัจจัยเสี่ยงด้านกฎหมายและเทคโนโลยีที่ต้องจับตา`,

      chatgpt: `คุณคือผู้เชี่ยวชาญด้านกลยุทธ์และ System Dynamics
ธุรกิจของฉัน: [ระบุธุรกิจ]

จงสร้าง Interactive Scenario Planner:
- สร้างตาราง 3 ฉากทัศน์: Best Case (ตลาดโต 30%), Base Case (ตลาดโต 5%), Worst Case (เศรษฐกิจหดตัว -10%)
- ระบุผลกระทบต่อ Revenue, Margin, และ Headcount ในแต่ละฉากทัศน์
- แนะนำ Trigger Point ทางกลยุทธ์ว่าเมื่อเกิดสัญญาณใด ต้องสลับไปใช้แผนสำรองทันที`
    }
  },

  "module-2": {
    baseTitle: "Wharton Financial Modeling & Valuation Master-Prompt",
    variations: {
      gemini: `คุณคือศาสตราจารย์การเงินอาวุโสจาก Wharton School of Business
จงช่วยผมวิเคราะห์และสร้างโมเดลงบการเงิน:
ข้อมูลธุรกิจ:
- รายได้ต่อเดือน: [ระบุตัวเลข]
- ต้นทุนขาย (COGS): [ระบุตัวเลข]
- ค่าใช้จ่ายในการดำเนินงาน (OPEX): [ระบุตัวเลข]
- อัตราการเติบโตต่อปี: [ระบุ %]

1. คำนวณ Gross Margin, EBITDA Margin, และ Net Profit Margin
2. วิเคราะห์จุดคุ้มทุน (Break-Even Analysis) ในรูปยอดขายและจำนวนยูนิต
3. ให้คำแนะนำ 3 ข้อในการปรับปรุง Cash Conversion Cycle (CCC) ให้เงินสดหมุนเวียนเร็วขึ้น`,

      notebooklm: `จากงบการเงินและรายงาน Module 2 ที่อัปโหลด:
1. ช่วยสรุปวิธีการคำนวณ Unit Economics (CAC, LTV, Magic Number) ให้เข้าใจง่ายที่สุด
2. สร้างชุดคำถาม-คำตอบ (Q&A FAQ) 5 ข้อที่ผู้ถือหุ้นมักจะถามเกี่ยวกับงบกระแสเงินสด
3. สรุปสูตรและข้อควรระวังในการประเมินมูลค่ากิจการด้วยวิธี DCF (Discounted Cash Flow)`,

      claude: `You are a Wall Street Investment Banker & Wharton Finance Professor.
I need a comprehensive Corporate Valuation & Capital Allocation Model.

Company Financials & Assumptions:
[ใส่รายละเอียดตัวเลขรายได้, ค่าใช้จ่าย, หนี้สิน, เงินสดในมือ, WACC ที่คาดหวัง]

Please generate:
1. 5-Year DCF Projection (Revenue, Free Cash Flow to Firm, Terminal Value)
2. Sensitivity Analysis Matrix: WACC (8% - 12%) vs Terminal Growth Rate (2% - 4%)
3. Capital Allocation Hierarchy: แนะนำลำดับความสำคัญในการใช้เงินสดส่วนเกิน (Reinvestment, Debt Paydown, M&A, Dividends)`,

      grok: `คุณคือ CFO ระดับเขี้ยวลากดิน ช่วยตรวจจับจุดรั่วไหลของเงินในบริษัทฉัน
ตัวเลขการเงินย่อๆ ของฉันคือ: [ใส่ตัวเลขรายรับ รายจ่าย ลูกหนี้ สต็อกสินค้า]

ชี้เป้าตรงๆ:
- จุดไหนที่ทำให้เงินสดจมและเสี่ยงเจ๊งที่สุด?
- สต็อกสินค้าหรือลูกหนี้ตัวไหนที่กำลังดูดเลือดบริษัท?
- แผนลดค่าใช้จ่าย 20% ทันทีโดยไม่กระทบยอดขายหลัก`,

      copilot: `หน้าที่: Corporate Financial Analyst
โปรดสร้างตารางสูตรการเงินสำหรับนำไปใส่ใน Microsoft Excel:
1. สูตรคำนวณ CAC (Customer Acquisition Cost) และ LTV (Lifetime Value)
2. ตารางผ่อนชำระหนี้ (Loan Amortization Table) พร้อมสูตร PMT, PPMT, IPMT
3. โครงสร้างตารางงบกระแสเงินสด 3 กิจกรรม (Operating, Investing, Financing)`,

      perplexity: `ค้นหาข้อมูลทางการเงินล่าสุดของกลุ่มอุตสาหกรรม [ระบุอุตสาหกรรม]:
1. ค่าเฉลี่ย EV/EBITDA Multiple, P/E Ratio, และ Gross Margin ของบริษัทในตลาดหลักทรัพย์ที่อยู่ในหมวดนี้
2. อัตราดอกเบี้ยนโยบายและแนวโน้มต้นทุนเงินกู้ (Cost of Debt)
3. สรุปแนวโน้มการระดมทุน (Venture Capital / Private Equity) ในเอเชียตะวันออกเฉียงใต้`,

      chatgpt: `คุณคือ Chief Financial Officer (CFO) เสมือนจริง
ฉันต้องการให้คุณวิเคราะห์ Unit Economics ของโมเดลธุรกิจของฉัน:
- ราคาขายต่อหน่วย: [ใส่ราคา]
- ต้นทุนแปรผันต่อหน่วย (Variable Cost): [ใส่ต้นทุน]
- ค่าโฆษณาต่อลูกค้า 1 คน (CAC): [ใส่ตัวเลข]
- อัตราการซื้อซ้ำหรือ Churn Rate: [ใส่ %]

จงคำนวณและแสดงผลเป็นตาราง:
1. Unit Contribution Margin
2. LTV/CAC Ratio
3. CAC Payback Period (เดือน)
4. การประเมินสุขภาพธุรกิจ: ผ่านเกณฑ์ระดับสากลหรือไม่ พร้อมแนวทางแก้ปัญหา`
    }
  },

  "module-3": {
    baseTitle: "MIT Operations & Bottleneck Optimization Engine",
    variations: {
      gemini: `คุณคือผู้เชี่ยวชาญด้าน Operations & Supply Chain จาก MIT Sloan
กระบวนการทำงานปัจจุบันของบริษัทฉันมีดังนี้:
[ระบุขั้นตอนการทำงานตั้งแต่รับออเดอร์ -> ผลิต/จัดเตรียม -> ส่งมอบ -> บริการหลังการขาย]

1. วิเคราะห์จุดที่เป็น Bottleneck (คอขวด) ตามหลัก Theory of Constraints (TOC)
2. แนะนำการนำ AI Agents หรือ Automation มาช่วยขจัดคอขวดในแต่ละขั้นตอน
3. ออกแบบ Lean Dashboard สำหรับติดตาม Cycle Time และ Throughput Rate`,

      notebooklm: `จากเอกสารคู่มือการปฏิบัติการและ Supply Chain ของ MIT Sloan ที่แนบ:
1. อธิบายความหมายของ Bullwhip Effect และวิธีที่ AI ช่วยแก้ปัญหานี้
2. สรุปขั้นตอน 5 Focusing Steps ของ Goldratt สำหรับผู้จัดการโรงงาน/ฝ่ายบริการ
3. ช่วยเขียนเนื้อหาสรุปย่อสำหรับส่งให้ทีมงานฝ่ายปฏิบัติการปฏิบัติตาม`,

      claude: `Act as an MIT Operations Engineering Leader.
Analyze the following end-to-end business workflow and apply System Dynamics thinking:
Current Workflow: [อธิบายกระบวนการทำงานปัจจุบัน เวลาที่ใช้ และปัญหาของเสีย/ความล่าช้า]

Provide:
1. Causal Loop Diagnosis: ระบุ Balancing Loops ที่ทำให้งานล่าช้า และ Reinforcing Loops ที่ช่วยเร่งประสิทธิภาพ
2. Waste Identification (7 Wastes of Lean): ชี้จุด Overprocessing, Waiting, และ Motion ที่แฝงอยู่
3. AI-Human Hybrid Redesign: ออกแบบผังงานใหม่ที่เพิ่มผลิตภาพ 3 เท่าโดยไม่ต้องเพิ่มจำนวนคน`,

      grok: `คุณคือวิศวกรโรงงานสายลุย ช่วยด่าและแก้กระบวนการทำงานที่โคตรช้าของฉัน
ขั้นตอนการทำงานของฉันคือ: [ใส่ขั้นตอนงาน]
ปัญหาที่เจอคือ: [ใส่อุปสรรค]

บอกมาตรงๆ:
- ขั้นตอนไหนไร้สาระที่สุดและควรตัดทิ้งทันที?
- จะลดเวลาส่งมอบงานจาก [เวลาเดิม] ให้เหลือ 1 ใน 3 ได้อย่างไรด้วยเครื่องมือฟรีหรือราคาถูก?`,

      copilot: `สร้าง SOP (Standard Operating Procedure) ฉบับมาตรฐานสากล:
ชื่องาน: [ระบุชื่องาน เช่น การรับเรื่องเคลมสินค้า, การจัดส่งสินค้า, การ Onboard ลูกค้าใหม่]

โครงสร้างเอกสาร:
1. วัตถุประสงค์และขอบเขต (Purpose & Scope)
2. ผู้รับผิดชอบ (RACI Matrix: Responsible, Accountable, Consulted, Informed)
3. ตารางขั้นตอนทีละสเต็ป (Step, Action, AI Tool Used, Expected Output, Time Limit)
4. เกณฑ์การควบคุมคุณภาพ (Quality Checkpoints)`,

      perplexity: `ค้นหาแนวโน้มและ Best Practices ด้าน Supply Chain & Automation ในอุตสาหกรรม [ระบุอุตสาหกรรม]:
1. ซอฟต์แวร์ AI Supply Chain Optimization ที่ได้รับความนิยมสูงสุดในปีนี้
2. กรณีศึกษาของบริษัทที่ลดต้นทุนโลจิสติกส์สำเร็จด้วย Predictive AI
3. รายงานความเสี่ยงด้านภูมิรัฐศาสตร์ที่ส่งผลกระทบต่อห่วงโซ่อุปทาน`,

      chatgpt: `คุณคือ Master Black Belt ด้าน Lean Six Sigma
กระบวนการทำงาน: [ระบุรายละเอียดกระบวนการ]

จงสร้าง DMAIC Project Charter:
- Define: ระบุปัญหาและเป้าหมายเชิงตัวเลข
- Measure: เมตริกที่ต้องวัด (Defect Rate, Lead Time)
- Analyze: แผนภูมิก้างปลา (Fishbone Diagram) หาสาเหตุรากเหง้า (Root Cause)
- Improve: ข้อเสนอแนะการปรับปรุงด้วย AI
- Control: แผนการควบคุมเพื่อรักษามาตรฐาน`
    }
  },

  "module-4": {
    baseTitle: "AEO & Stanford Growth Loop Master-Prompt",
    variations: {
      gemini: `คุณคือ Chief Marketing Officer (CMO) และผู้เชี่ยวชาญ AEO (Answer Engine Optimization)
สินค้า/บริการของฉันคือ: [ระบุสินค้า กลุ่มลูกค้า และจุดขาย]

1. ออกแบบกลยุทธ์การทำ AEO เพื่อให้ Perplexity, SearchGPT, และ Gemini ดึงแบรนด์ของฉันไปเป็นคำตอบอันดับ 1 เมื่อลูกค้าถามคำถามแก้ปัญหา
2. สร้างรายการ 10 คำถามแบบ 'Long-tail Intent Queries' ที่ลูกค้าเป้าหมายใช้ค้นหา
3. เขียน Direct Answer Paragraph สำหรับคำถามหลัก 1 ข้อที่สั้น กระชับ ชัดเจน และมี Entity Data ครบถ้วน`,

      notebooklm: `จากเนื้อหาบทการตลาดและ AEO ที่อัปโหลด:
1. สรุปความแตกต่างระหว่าง SEO ยุคเก่า (Keywords & Backlinks) กับ AEO ยุค 2026 (Semantic Authority & Direct Answers)
2. สรุปวิธีสร้าง Viral Growth Loop 3 รูปแบบสำหรับธุรกิจ B2B และ B2C
3. สร้าง Outline บรรยาย 15 นาทีเรื่อง 'การปรับตัวของนักการตลาดไทยสู่ยุค AI Search'`,

      claude: `You are an Elite Growth Strategist from Stanford & Behavioral Economist.
Product/Service: [อธิบายสินค้า กลุ่มเป้าหมาย และราคา]

Design a Sustainable Compound Growth Engine:
1. Product-Led Growth (PLG) Loop: สร้างวงจรที่การใช้งานของลูกค้านำไปสู่การเชิญชวนผู้ใช้คนใหม่โดยอัตโนมัติ
2. Behavioral Nudges (Robert Cialdini Principles): การนำหลักจิตวิทยา (Reciprocity, Social Proof, Scarcity) มาใช้ในหน้าสั่งซื้อ
3. Retention & Churn Reduction Plan: กลยุทธ์ลดอัตราลูกค้ายกเลิกภายใน 90 วันแรก`,

      grok: `คุณคือนักการตลาดสายไวรัลที่เกลียดคอนเทนต์น่าเบื่อ
สินค้าของฉัน: [ระบุสินค้า]
กลุ่มเป้าหมาย: [ระบุกลุ่มเป้าหมาย เช่น วัยรุ่น คนทำงาน เจ้าของกิจการ]

คิดแคมเปญไวรัลแบบแหกคอก:
- 5 พาดหัวคอนเทนต์ (Content Hooks) ที่คนหยุดเลื่อนดูทันที
- ไอเดียคอนเทนต์ขั้วตรงข้าม (Contrarian Opinion) ที่จุดประเด็นให้คนถกเถียงและแชร์
- แผนปล่อยคอนเทนต์บน TikTok/Reels/X ให้เกิดกระแสใน 7 วัน`,

      copilot: `สร้างแผนการตลาดดิจิทัลประจำเดือน (Digital Marketing Content Calendar) สำหรับนำไปวางใน Microsoft Excel/Outlook:
สินค้า: [ระบุสินค้า]
ช่องทาง: Facebook, TikTok, Line OA, Email Newsletter

จัดทำเป็นตาราง:
- วันที่ / ช่องทาง / ประเภทคอนเทนต์ / ข้อความพาดหัว / Call to Action (CTA) / เมตริกเป้าหมาย (CTR, Conversion)`,

      perplexity: `ค้นหาข้อมูลการตลาดเชิงลึกของตลาด [ระบุสินค้า เช่น กาแฟพรีเมียม, คอร์สออนไลน์, ซอฟต์แวร์ ERP]:
1. ข้อมูล Demographic และ Pain Points สำคัญที่สุดของกลุ่มผู้ซื้อในปีนี้
2. กลยุทธ์การตลาดของผู้นำตลาด 3 อันดับแรก
3. ช่องทางโซเชียลมีเดียและแพลตฟอร์มที่มี Conversion Rate สูงสุดในหมวดนี้`,

      chatgpt: `คุณคือผู้เชี่ยวชาญด้าน Copywriting และ Conversion Rate Optimization (CRO)
สินค้า: [ระบุสินค้า]
ข้อเสนอพิเศษ (Offer): [ระบุโปรโมชันหรือราคา]

จงเขียน Sales Copy แบบ PAS Framework (Problem - Agitate - Solve):
1. Problem: ขยี้ปัญหาที่ลูกค้ากำลังเผชิญอยู่ให้ตรงจุด
2. Agitate: ชี้ให้เห็นผลเสียหากปล่อยปัญหานี้ทิ้งไว้
3. Solution: นำเสนอสินค้าของเราเป็นทางออกที่ดีที่สุด
4. Risk Reversal: การรับประกันความพึงพอใจเพื่อปิดการขายทันที`
    }
  },

  "module-5": {
    baseTitle: "HBS Leadership & AI Change Management",
    variations: {
      gemini: `คุณคือศาสตราจารย์ด้านพฤติกรรมองค์กรจาก Harvard Business School (HBS)
สถานการณ์องค์กรของฉัน:
- มีพนักงาน [ระบุจำนวนคน] ในแผนก [ระบุแผนก]
- ปัญหาที่พบ: [พนักงานกลัว AI มาแย่งงาน / ไม่ยอมใช้เครื่องมือใหม่ / วัฒนธรรมทำงานแบบ Silo]

1. วางแผน Change Management ตามหลัก Kotter 8 ขั้นตอนเพื่อทรานส์ฟอร์มทีมสู่ AI-Augmented Organization
2. ออกแบบเวิร์กช็อป Upskill ระยะสั้น 1 วันเพื่อเปลี่ยนความกลัวเป็นความตื่นเต้น
3. กำหนดตัวชี้วัดความปลอดภัยทางจิตวิทยา (Psychological Safety KPIs)`,

      notebooklm: `จากงานวิจัยด้าน People & Organizational Behavior ของ HBS ที่แนบมา:
1. สรุปแนวคิด Psychological Safety ของ Prof. Amy Edmondson และวิธีนำมาปรับใช้กับทีมงานไทย
2. เขียนสคริปต์การพูดเปิดใจของ CEO ใน Town Hall Meeting เรื่องการนำ AI มาเพิ่มพลังให้พนักงาน
3. ออกแบบแบบสอบถามสั้น 5 ข้อเพื่อวัดความพร้อมของบุคลากร`,

      claude: `You are an Executive Leadership Coach trained at Harvard & INSEAD.
Leadership Dilemma: [อธิบายความขัดแย้งหรือความท้าทายในทีม เช่น ผู้จัดการฝ่ายเดิมไม่ยอมรับกระบวนการอัตโนมัติ]

Please provide:
1. Empathy-Driven Negotiation Framework: บทสนทนาแบบ One-on-One เพื่อรับฟังความกังวลและเปลี่ยนแรงต้านเป็นความร่วมมือ
2. Responsibility Re-allocation Map: การแบ่งงานใหม่ระหว่างมนุษย์ (High-Judgment, Empathy) กับ AI (Data Processing, Automation)
3. Leadership Self-Reflection Prompts: 3 คำถามที่ผู้นำต้องถามตัวเองเพื่อไม่ให้กลายเป็นคอขวดของทีม`,

      grok: `คุณคือที่ปรึกษาด้านการบริหารที่พูดความจริงไม่อ้อมค้อม
ทีมของฉันมีปัญหา: [ระบุปัญหา เช่น ทำงานเช้าชามเย็นชาม ทะเลาะกัน ไม่ยอมรับเทคโนโลยี]

บอกมาตรงๆ:
- ทำไมคนถึงไม่ยอมเปลี่ยน และอะไรคือแรงจูงใจที่แท้จริงของพวกเขา (เงิน อำนาจ หรือความกลัว)?
- วิธีจัดการกับพนักงานที่เป็นมะเร็งร้ายในองค์กร (Toxic Performers) อย่างเด็ดขาดและเป็นธรรม`,

      copilot: `จัดทำเอกสารนโยบายการใช้งาน AI ภายในองค์กร (Corporate AI Usage Policy):
สำหรับบริษัท: [ระบุประเภทบริษัท]

หัวข้อเอกสาร:
1. ขอบเขตและเครื่องมือที่อนุญาตให้ใช้งาน
2. มาตรการรักษาความลับของข้อมูลลูกค้าและทรัพย์สินทางปัญญา (Data Privacy & Confidentiality)
3. มาตรฐานการตรวจสอบความถูกต้องโดยมนุษย์ (Human Review Requirement)
4. บทลงโทษในกรณีละเมิด`,

      perplexity: `ค้นหางานวิจัยล่าสุดเกี่ยวกับ Future of Work และผลกระทบของ AI ต่อพนักงาน:
1. สถิติตำแหน่งงานที่กำลังเปลี่ยนแปลงและทักษะที่ตลาดต้องการสูงสุดในปีนี้ (World Economic Forum / McKinsey Report)
2. กรณีศึกษาของบริษัทระดับโลกที่มีโปรแกรม Reskilling พนักงานสำเร็จ
3. วิธีการจัดสรรเวลาทำงานแบบ Hybrid Work ที่ได้ผลผลิตสูงสุด`,

      chatgpt: `คุณคือผู้เชี่ยวชาญด้าน People Analytics และ Organizational Design
จงสร้างตารางประเมินทักษะของทีม (Skills Gap Matrix):
แผนก: [ระบุแผนก]

สร้างตาราง:
- ตำแหน่งงานปัจจุบัน
- ทักษะเดิมที่ถูกแทนที่ด้วย AI
- ทักษะใหม่ที่ต้องเพิ่ม (AI Prompting, Critical Thinking, Emotional Intelligence)
- แผนการฝึกอบรม 30-60-90 วัน`
    }
  },

  "module-6": {
    baseTitle: "Blue Ocean & Value Innovation Canvas",
    variations: {
      gemini: `คุณคือผู้เชี่ยวชาญด้านกลยุทธ์ Blue Ocean Strategy และนวัตกรรมจาก Stanford GSB
อุตสาหกรรมปัจจุบันของฉัน: [ระบุอุตสาหกรรม เช่น ร้านกาแฟ, ธุรกิจคลินิกความงาม, ขนส่งพัสดุ]
สิ่งที่ทุกเจ้าในตลาดกำลังแข่งขันกัน: [ระบุ เช่น แข่งลดราคา, แข่งเปิดสาขา, แข่งทำโปรโมชัน]

1. สร้าง ERRC Grid (Eliminate, Reduce, Raise, Create) เพื่อหนีออกจาก Red Ocean
2. วาดผัง Strategy Canvas เปรียบเทียบคุณค่าของเรากับคู่แข่งรายเดิม
3. คิดสโลแกนและ Value Proposition ใหม่ที่ทำให้การแข่งขันเดิมไร้ความหมาย`,

      notebooklm: `จากเอกสาร Blue Ocean Strategy & Christensen's Disruption ที่อัปโหลด:
1. สรุปความแตกต่างระหว่าง Low-End Disruption กับ New-Market Disruption
2. ยกตัวอย่างกรณีศึกษาคลาสสิก (Cirque du Soleil, Uber, Netflix) และเปรียบเทียบกับยุค AI
3. สรุปเช็กลิสต์ 4 ข้อในการทดสอบว่าไอเดียธุรกิจใหม่เป็น Blue Ocean จริงหรือไม่`,

      claude: `You are Clayton Christensen's Disciple & Blue Ocean Master Strategist.
Target Market: [ระบุกลุ่มเป้าหมายหรือ Pain Point ที่ยังไม่มีใครแก้]

Formulate a Disruptive Value Innovation Strategy:
1. Jobs-to-be-Done (JTBD) Deep Dive: ลูกค้าไม่ได้ซื้อสินค้า แต่กำลัง 'จ้าง' สินค้าไปทำงานอะไรให้สำเร็จ?
2. Non-Customer Exploration: วิเคราะห์กลุ่ม Tier 1 (Soon-to-be), Tier 2 (Refusing), Tier 3 (Unexplored) เพื่อขยายขนาดตลาด
3. Business Model Inversion: วิธีคิดค่าบริการแบบใหม่ที่แหวกแนว (เช่น Free + AI Commission, Usage-based)`,

      grok: `คุณคือ Startup Founder สายบ้าพลัง ช่วยคิดไอเดียธุรกิจที่จะไปฆ่ายักษ์ใหญ่ในวงการ
วงการที่อยากถล่ม: [ระบุวงการ]
ยักษ์ใหญ่ปัจจุบัน: [ระบุชื่อบริษัทใหญ่]

เสนอแผนดิสรัปชัน:
- 3 ช่องโหว่ของยักษ์ใหญ่ที่เทอะทะ ช้า และคิดเงินลูกค้าแพงเกินไป
- วิธีสร้างโซลูชันที่ถูกกว่า 10 เท่า และใช้งานง่ายกว่า 10 เท่าด้วย AI
- แผนการเติบโตแบบกองโจร (Guerrilla Growth)`,

      copilot: `สร้าง Business Model Canvas (BMC) 9 ช่อง ฉบับ AI-First สำหรับใส่ใน Microsoft PowerPoint/Word:
ชื่อธุรกิจ: [ใส่ชื่อธุรกิจและแนวคิด]

1. Customer Segments
2. Value Propositions
3. Channels
4. Customer Relationships
5. Revenue Streams
6. Key Resources (ระบุ AI Models & Data Assets)
7. Key Activities
8. Key Partnerships
9. Cost Structure`,

      perplexity: `ค้นหาสตาร์ทอัพที่กำลังสร้างปรากฏการณ์ Blue Ocean ในหมวด [ระบุหมวด]:
1. รายชื่อสตาร์ทอัพที่เพิ่งระดมทุนได้ในปีนี้ และโมเดลธุรกิจที่แตกต่าง
2. จุดเด่นของ Value Proposition ที่ทำให้ลูกค้าเปลี่ยนใจจากเจ้าเดิม
3. ตัวเลขการเติบโตและบทสัมภาษณ์ของผู้ก่อตั้ง`,

      chatgpt: `คุณคือนักออกแบบกลยุทธ์นวัตกรรม
ธุรกิจ: [ใส่รายละเอียด]

จงสร้าง Interactive Innovation Matrix:
- เสนอ 5 แนวคิดผลิตภัณฑ์ใหม่ โดยใช้เทคนิค 'SCAMPER' (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse)
- ประเมินคะแนนความเป็นไปได้ (Feasibility), ความต้องการของตลาด (Desirability), และความคุ้มค่าทางการเงิน (Viability) ในแต่ละไอเดีย`
    }
  },

  "module-7": {
    baseTitle: "Cheeptham & Codex Executive Mega-Prompt Master",
    variations: {
      gemini: `คุณคือ Executive AI Advisor ประจำตัวของ ชีพธรรม คำวิเศษณ์ & Codex
ฉันกำลังจะตัดสินใจเรื่องสำคัญทางธุรกิจ: [ระบุเรื่องที่ต้องตัดสินใจ เช่น การขยายสาขา, การเลิกทำโปรเจกต์, การร่วมทุน]

จงใช้กรอบคิด P-C-O-F-C ในการวิเคราะห์:
1. วิเคราะห์ข้อดี ข้อเสีย และความเสี่ยงซ่อนเร้น (Blind Spots)
2. จำลองผลลัพธ์ในอีก 6 เดือน 1 ปี และ 3 ปีข้างหน้า
3. ให้คำแนะนำทางเลือกที่ดีที่สุด 2 ทาง พร้อมแผนการรองรับหากผลลัพธ์ไม่เป็นไปตามเป้า`,

      notebooklm: `[คำสั่งสำหรับ NotebookLM เพื่อสร้าง Executive Audio Overview & Podcast]
จากคลังเนื้อหา E-book AI MBA ทั้งหมด:
1. สรุปแก่นความคิดหลักของหนังสือเล่มนี้ในรูปแบบ Key Takeaways 7 ข้อ
2. สร้างบทสนทนาจำลองระหว่างผู้ดำเนินรายการสองท่าน ที่พูดคุยแลกเปลี่ยนอย่างออกรส ถึงวิธีการที่คนไทยจะนำ AI มายกระดับธุรกิจและชีวิตตนเอง
3. ร่างแผนการเรียนรู้ 30 วัน (Daily Action Plan) สำหรับผู้อ่านที่ต้องการฝึกฝนด้วยตนเอง`,

      claude: `Act as a Hybrid Board of Directors (Cheeptham-Codex Method).
Convene a virtual board meeting with 4 distinct advisory perspectives for my decision:
Decision to Make: [ใส่หัวข้อการตัดสินใจและข้อมูลแวดล้อม]

1. Perspective 1 (HBS Strategist): Focus on competitive moats and brand positioning
2. Perspective 2 (Wharton CFO): Focus on capital efficiency, risk, and cash flow
3. Perspective 3 (MIT Technologist): Focus on scalability, bottlenecks, and automation
4. Perspective 4 (Stanford Innovator): Focus on customer obsession and disruption
Synthesize all 4 views into a Unified Executive Action Mandate.`,

      grok: `คุณคือที่ปรึกษาคู่หู ชีพธรรม & Codex สายตรงประเด็น
เรื่องที่ฉันกำลังลังเล: [ใส่เรื่องที่ลังเล]

ฟันธงมาเลย:
- อะไรคือภาพลวงตา (Illusion) ที่ฉันกำลังหลอกตัวเองอยู่?
- ความจริงอันโหดร้าย (Brutal Truth) ของสถานการณ์นี้คืออะไร?
- ทางเลือกที่ควรตัดสินใจทำตั้งแต่วันนี้โดยไม่ต้องลังเลคืออะไร?`,

      copilot: `สร้าง Executive Briefing Document สำหรับนำเสนอคณะกรรมการบริหารใน 1 หน้ากระดาษ (One-Page Executive Summary):
โครงการ: [ระบุชื่อโครงการ]

โครงสร้างเอกสาร:
- Executive Summary (3 บรรทัด)
- Strategic Alignment & Business Case
- Financial Implications & ROI Forecast
- Key Risks & Mitigation Measures
- Next Steps & Immediate Approvals Requested`,

      perplexity: `ตรวจสอบข้อเท็จจริง (Fact-Check) และหาข้อมูลสนับสนุนการตัดสินใจในหัวข้อ [ระบุหัวข้อ]:
1. สถิติและงานวิจัยล่าสุดที่สนับสนุนแนวคิดนี้
2. กรณีศึกษาของบริษัทที่เคยทำสำเร็จและล้มเหลวในแนวทางใกล้เคียงกัน
3. คำแนะนำจากผู้เชี่ยวชาญระดับโลกและแนวโน้มตลาดในอนาคต`,

      chatgpt: `คุณคือ Executive Master Prompt Builder
ฉันต้องการสร้าง Mega-Prompt สำหรับสั่งการ AI ในงาน: [ระบุงานที่ต้องการ เช่น ตรวจสอบสัญญา, ออกแบบกลยุทธ์, วิเคราะห์คู่แข่ง]

จงสร้าง Master Prompt ฉบับสมบูรณ์ที่มีองค์ประกอบครบทั้ง:
1. Role & Persona Definition
2. Context & Background Parameters
3. Step-by-Step Chain of Thought Instructions
4. Guardrails & Negative Constraints (สิ่งที่ห้ามทำ)
5. Markdown Table Output Formatting`
    }
  }
};
