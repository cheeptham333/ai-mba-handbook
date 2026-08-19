/**
 * AI MBA Interactive Prompt Engineering Lab - Model & RTCF Database
 * Co-Authored & Designed by: Cheeptham Khamwiset (ชีพธรรม คำวิเศษณ์) & FastAI Team
 * 100% Bilingual Architecture (Thai 🇹🇭 / English 🇬🇧)
 */

// ==========================================
// 1. RTCF MBA MEGA-PROMPT WIZARD DATA
// ==========================================
const AI_MBA_RTCF_DATA = {
  th: {
    presets: [
      {
        id: "sme-cafe",
        name: "☕ SME ธุรกิจคาเฟ่ & โรงคั่วกาแฟพรีเมียม",
        data: {
          role: "คุณคือประธานที่ปรึกษากลยุทธ์ธุรกิจและ Executive Coach สาย MBA ชั้นนำ",
          userProfession: "เจ้าของกิจการและผู้เชี่ยวชาญด้านการคั่วกาแฟพิเศษ (Specialty Coffee Q-Grader)",
          businessType: "คาเฟ่พรีเมียมและธุรกิจจัดส่งเมล็ดกาแฟ B2B ให้ร้านกาแฟและโรงแรม",
          strengths: "มีโรงคั่วมาตรฐานสากล ได้รางวัลบาริสต้าระดับประเทศ มีฐานลูกค้าประจำและคอนเทนต์แน่น",
          challenges: "มีคู่แข่งเปิดใหม่ตัดราคา 20% ต้นทุนเมล็ดกาแฟนำเข้าผันผวน และเดลิเวอรีหักค่า GP สูง",
          goal: "เพิ่มยอดขาย B2B เมล็ดกาแฟ 40% และสร้างรายได้ประจำแบบ Subscription รายเดือน",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "ตารางสรุปข้อมูลแบบเข้าใจง่าย ภาษาทางการระดับ C-Suite พร้อมแผนปฏิบัติการ 90 วัน",
          outputLanguage: "ภาษาไทย (เน้นตัวเลขและชื่อคู่แข่งที่เป็นรูปธรรม)"
        }
      },
      {
        id: "health-clinic",
        name: "🏥 คลินิกสุขภาพ & เวชศาสตร์ชะลอวัย (Anti-Aging)",
        data: {
          role: "คุณคือผู้อำนวยการฝ่ายกลยุทธ์การแพทย์และที่ปรึกษาการบริหารโรงพยาบาลระดับสากล",
          userProfession: "แพทย์ผู้เชี่ยวชาญด้านเวชศาสตร์ชะลอวัยและการฟื้นฟูสุขภาพ (Wellness & Longevity)",
          businessType: "คลินิกสุขภาพเฉพาะทาง ตรวจพันธุกรรม ปรับฮอร์โมน และโปรแกรม Longevity เฉพาะบุคคล",
          strengths: "ทีมแพทย์เฉพาะทางที่มีชื่อเสียง เทคโนโลยีตรวจแม่นยำสูง บริการแบบ Personal Care ระดับพรีเมียม",
          challenges: "ต้นทุนการตลาดสูง (CAC) ลูกค้าใหม่ยังไม่เข้าใจความคุ้มค่า และมีโรงพยาบาลใหญ่เปิดศูนย์สุขภาพแข่ง",
          goal: "สร้างแพ็กเกจสมาชิกรายปี (Annual Membership) และขยายฐานลูกค้าผู้บริหารระดับสูง 200 ราย",
          selectedModels: ["swot", "tows", "five-forces", "blue-ocean", "got"],
          formatTone: "รายงานบทวิเคราะห์ผู้บริหารระดับสูง พร้อมขั้นตอนปฏิบัติการทางการแพทย์และการตลาดที่วัดผลได้",
          outputLanguage: "ภาษาไทย (เชิงวิชาการทางการแพทย์และกลยุทธ์ธุรกิจ)"
        }
      },
      {
        id: "saas-tech",
        name: "🚀 สตาร์ทอัพ AI SaaS สำหรับการเงินและบัญชี",
        data: {
          role: "คุณคือ Silicon Valley VC, Stanford GSB Faculty, และผู้เชี่ยวชาญการขยายธุรกิจเทคโนโลยี (Tech Scaling)",
          userProfession: "Tech Entrepreneur & Full-Stack AI Engineer",
          businessType: "B2B SaaS ระบบ AI สแกนใบเสร็จ จัดหมวดหมู่ภาษี และกระทบยอดบัญชีอัตโนมัติ",
          strengths: "โมเดล AI แม่นยำ 98% เชื่อมต่อระบบธนาคารได้รวดเร็ว ประหยัดเวลาทำบัญชีได้ 10 เท่า",
          challenges: "สำนักงานบัญชีดั้งเดิมยังคุ้นเคยกับกระดาษ และผู้ประกอบการ SME กังวลเรื่องความปลอดภัยข้อมูล",
          goal: "เจาะตลาดสำนักงานบัญชี 1,000 แห่งทั่วประเทศ และบรรลุ $1M ARR ภายใน 18 เดือน",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "ตารางสรุป Unit Economics, แผนการทดลองตลาด 7 วัน (Lean AI), และข้อเสนอแนะเชิงเทคนิค",
          outputLanguage: "ภาษาไทยและอังกฤษผสมผสาน (Tech & Business English Terms)"
        }
      },
      {
        id: "retail-ecommerce",
        name: "🛍️ แบรนด์แฟชั่น & ค้าปลีก Omnichannel",
        data: {
          role: "คุณคือประธานเจ้าหน้าที่บริหารฝ่ายการตลาดระดับโลก (Global CMO) และนักปฏิวัติค้าปลีก",
          userProfession: "ผู้อำนวยการฝ่ายการตลาดและผู้เชี่ยวชาญการสร้างแบรนด์แฟชั่นและไลฟ์สไตล์",
          businessType: "แบรนด์เสื้อผ้าและเครื่องประดับสตรี ออกแบบเอง มีหน้าร้าน 5 สาขา และ TikTok Shop / Shopee",
          strengths: "ฐานผู้ติดตามโซเชียลมีเดีย 300,000 คน สินค้าดีไซน์ทันสมัย อัตราการซื้อซ้ำ 35%",
          challenges: "เสื้อผ้าแฟชั่นจีนราคาถูกทะลักเข้าสู่ตลาด ค่าโฆษณาโซเชียลพุ่งสูงขึ้น และจัดการสต็อกยาก",
          goal: "ยกระดับแบรนด์สู่ตลาดพรีเมียม ลดการพึ่งพาการยิงแอด และสร้างระบบสมาชิก CRM อัตโนมัติ",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "สคริปต์แคมเปญการตลาด, การแบ่งส่วนลูกค้า (Persona), และแผนการขจัดสินค้าค้างสต็อก",
          outputLanguage: "ภาษาไทย (เข้าใจง่าย นำไปปฏิบัติกับทีมงานได้ทันที)"
        }
      }
    ],
    chips: {
      role: [
        "คุณคือประธานที่ปรึกษากลยุทธ์ธุรกิจและ Executive Coach สาย MBA ชั้นนำ",
        "คุณคือ Michael Porter ศาสตราจารย์แห่ง Harvard Business School",
        "คุณคือ Ethan Mollick ศาสตราจารย์แห่ง The Wharton School",
        "คุณคือหัวหน้านักวางแผนกลยุทธ์ (Chief Strategy Officer - CSO)",
        "คุณคือ Silicon Valley Venture Capitalist & Growth Strategist"
      ],
      userProfession: [
        "เจ้าของธุรกิจและผู้ประกอบการ SME ยุคใหม่",
        "ผู้บริหารฝ่ายกลยุทธ์และการตลาด (VP of Strategy & Marketing)",
        "แพทย์และผู้บริหารคลินิกสุขภาพเฉพาะทาง",
        "ผู้จัดการฝ่ายผลิตภัณฑ์และนวัตกรรม (Product & Innovation Lead)",
        "ที่ปรึกษาธุรกิจและการเงินอิสระ"
      ],
      businessType: [
        "ธุรกิจอาหาร เครื่องดื่ม และคาเฟ่พรีเมียม",
        "ธุรกิจสุขภาพ การแพทย์ และเวชศาสตร์ชะลอวัย (Wellness & HealthTech)",
        "ธุรกิจพัฒนาซอฟต์แวร์ B2B SaaS และ AI Solution",
        "ธุรกิจค้าปลีก แฟชั่น และ E-commerce Omnichannel",
        "ธุรกิจบริการ โลจิสติกส์ และอสังหาริมทรัพย์"
      ],
      strengths: [
        "มีสินค้าคุณภาพสูง มาตรฐานสากล ลูกค้าประจำรักแบรนด์",
        "ทีมงานเชี่ยวชาญเฉพาะทาง มีนวัตกรรมและเทคโนโลยีที่ลอกเลียนยาก",
        "มีสาขาครอบคลุมและช่องทางจัดจำหน่ายทั้งออนไลน์-ออฟไลน์",
        "มีฐานข้อมูลลูกค้า (Data) ขนาดใหญ่และระบบบริการที่รวดเร็ว",
        "ต้นทุนการผลิตต่ำกว่าคู่แข่งและมีสภาพคล่องทางการเงินแข็งแกร่ง"
      ],
      challenges: [
        "คู่แข่งตัดราคาอย่างรุนแรง และมีสินค้าต่างชาติต้นทุนต่ำเข้ามาแข่ง",
        "ต้นทุนค่าโฆษณาและค่าแพลตฟอร์มสูงขึ้นเรื่อยๆ กำไรสุทธิลดลง",
        "กระบวนการทำงานภายในยังเป็น Manual ล่าช้า ขาดคนทำงานดิจิทัล",
        "ลูกค้ามีทางเลือกเยอะขึ้น อำนาจต่อรองสูง และเปลี่ยนใจง่าย",
        "ขาดระบบการตลาดอัตโนมัติและระบบสมาชิก CRM ที่มีประสิทธิภาพ"
      ],
      goal: [
        "เพิ่มยอดขายและกำไรสุทธิ 30% ภายใน 6-12 เดือนนี้",
        "ฉีกหนีสงครามราคา สร้างความแตกต่างที่ไม่ต้องแข่งเรื่องราคาอีกต่อไป",
        "ขยายฐานลูกค้า B2B องค์กร และสร้างรายได้ประจำแบบ Subscription",
        "ลดต้นทุนการดำเนินงานลง 20% ด้วยการนำ AI และระบบอัตโนมัติมาใช้",
        "เปิดตัวสินค้า/บริการใหม่ และขยายตลาดสู่ต่างประเทศ"
      ],
      formatTone: [
        "ตารางสรุปข้อมูลแบบเข้าใจง่าย ภาษาทางการระดับ C-Suite พร้อม Action Plan",
        "รายงานเจาะลึกแบบแยกหัวข้อย่อย มีตัวเลขและเกณฑ์การวัดผลชัดเจน",
        "ภาษาพูดที่กระชับ ตรงประเด็น เหมาะสำหรับอธิบายทีมงานในที่ประชุม",
        "สไลด์นำเสนอสำหรับบอร์ดบริหาร (Executive Presentation Brief)"
      ]
    },
    frameworkCards: [
      {
        id: "swot",
        name: "1. SWOT Analysis",
        desc: "วิเคราะห์ 4 ด้าน: จุดแข็ง (S), จุดอ่อน (W), โอกาส (O), และอุปสรรคคู่แข่ง (T)",
        icon: "📊"
      },
      {
        id: "tows",
        name: "2. TOWS Action Matrix",
        desc: "แปลง SWOT สู่ 4 แผนกลยุทธ์: SO (รุกฆาต), WO (ปรับปรุง), ST (ตั้งรับ), WT (บริหารวิกฤต)",
        icon: "🔄"
      },
      {
        id: "bcg",
        name: "3. BCG Growth-Share Matrix",
        desc: "จัดกลุ่มสินค้าและจัดสรรเงินทุน: Stars (ดาวเด่น), Cash Cows (แม่วัว), Question Marks, Dogs",
        icon: "⭐"
      },
      {
        id: "blue-ocean",
        name: "4. Blue Ocean Strategy (ERRC)",
        desc: "ฉีกหนีสงครามราคาด้วยตาราง ERRC: ตัดทิ้ง (Eliminate), ลดทอน (Reduce), ยกระดับ (Raise), สร้างใหม่ (Create)",
        icon: "🌊"
      },
      {
        id: "got",
        name: "5. Graph of Thoughts (GoT) ฟันธง",
        desc: "จำลองการคิดหลายสาย ผสานข้อดีของทุกทางเลือก และฟันธงมติการตัดสินใจที่ดีที่สุด",
        icon: "🧠"
      },
      {
        id: "five-forces",
        name: "6. Porter's Five Forces",
        desc: "ประเมินแรงกดดัน 5 ด้าน: คู่แข่งเดิม, ลูกค้า, ซัพพลายเออร์, ผู้เล่นใหม่, สินค้าทดแทน",
        icon: "🥊"
      }
    ]
  },
  en: {
    presets: [
      {
        id: "sme-cafe",
        name: "☕ Specialty Coffee Roaster & Cafe SME",
        data: {
          role: "You are an Elite MBA Senior Strategy Partner and Executive Leadership Coach.",
          userProfession: "Founder & Licensed Q-Grader Specialty Coffee Specialist",
          businessType: "Premium Specialty Cafe & B2B Wholesale Coffee Supply for Hotels & Restaurants",
          strengths: "Award-winning roastery, highly skilled baristas, loyal customer base, and viral storytelling content",
          challenges: "Local competitors discounting by 20%, volatile green bean import costs, and steep 30% delivery app commissions",
          goal: "Scale B2B wholesale beans by 40% and build recurring monthly D2C subscription revenue",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "C-Suite executive summary tables with prioritized 90-day execution milestones",
          outputLanguage: "English (incorporating quantitative metrics and explicit competitive benchmarks)"
        }
      },
      {
        id: "health-clinic",
        name: "🏥 Longevity & Specialized Medical Clinic",
        data: {
          role: "You are the Chief Healthcare Strategy Officer and International Hospital Management Advisor.",
          userProfession: "Lead Physician & Anti-Aging/Longevity Medicine Specialist",
          businessType: "Specialized Longevity Clinic: Genomic Diagnostics, Hormonal Optimization, and Personalized Health Protocols",
          strengths: "Renowned medical faculty, high-precision diagnostics, and boutique VIP concierge patient experience",
          challenges: "High Customer Acquisition Cost (CAC), client education friction, and emerging hospital health centers",
          goal: "Launch annual VIP membership programs and onboard 200 executive clients",
          selectedModels: ["swot", "tows", "five-forces", "blue-ocean", "got"],
          formatTone: "Boardroom medical strategy briefing with actionable clinical and commercial OKRs",
          outputLanguage: "English (Rigorous medical & strategic MBA terminology)"
        }
      },
      {
        id: "saas-tech",
        name: "🚀 AI-Native B2B Accounting SaaS",
        data: {
          role: "You are a Silicon Valley Venture Capitalist, Stanford GSB Professor, and Enterprise Scale-Up Architect.",
          userProfession: "Tech Founder & Full-Stack AI Engineer",
          businessType: "B2B SaaS: Automated invoice OCR, tax classification, and bank reconciliation copilot",
          strengths: "98% OCR accuracy, 1-click banking API integrations, and 10x faster bookkeeping cycles",
          challenges: "Legacy accounting firms slow to adopt cloud tools; SMEs harbor data privacy hesitation",
          goal: "Penetrate 1,000 CPA firms nationwide and achieve $1M ARR within 18 months",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "Unit Economics breakdown, 7-Day Lean AI Experiment Roadmap, and Technical Architecture Memo",
          outputLanguage: "English (Silicon Valley venture & SaaS metric standard)"
        }
      },
      {
        id: "retail-ecommerce",
        name: "🛍️ Omnichannel Fashion & Retail DTC Brand",
        data: {
          role: "You are a Global Chief Marketing Officer (CMO) and Modern Retail Transformation Strategist.",
          userProfession: "Marketing Director & Fashion Apparel Brand Builder",
          businessType: "Direct-to-Consumer (DTC) Women's Apparel with 5 flagship boutique stores and TikTok/E-commerce channels",
          strengths: "300,000 highly engaged social followers, fast-turnaround agile design pipeline, and 35% repeat purchase rate",
          challenges: "Flood of low-cost fast-fashion imports, soaring digital ad CPM costs, and seasonal inventory overhang",
          goal: "Elevate brand positioning to premium tier, reduce ad dependency, and deploy automated VIP CRM retention workflows",
          selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
          formatTone: "Strategic marketing campaign blueprints, customer cohort analysis, and inventory velocity playbooks",
          outputLanguage: "English (C-Suite and actionable for cross-functional execution)"
        }
      }
    ],
    chips: {
      role: [
        "You are an Elite MBA Strategy Chair and Executive Leadership Advisor.",
        "You are Michael Porter, Professor of Strategy at Harvard Business School.",
        "You are Ethan Mollick, Management Professor at The Wharton School.",
        "You are the Chief Strategy Officer (CSO) of a Global Fortune 500 Enterprise.",
        "You are a Silicon Valley Venture Capitalist and Growth Hacker."
      ],
      userProfession: [
        "Founder & Managing Director of a Growing SME",
        "VP of Corporate Strategy and Digital Transformation",
        "Lead Physician and Healthcare Clinic Director",
        "Head of Product and Innovation Architecture",
        "Independent Management & Financial Consultant"
      ],
      businessType: [
        "Premium Food, Beverage & Specialty Hospitality",
        "Healthcare, Longevity & Telemedicine HealthTech",
        "Enterprise B2B SaaS & Generative AI Solutions",
        "Omnichannel Fashion, Retail & Direct-to-Consumer (DTC)",
        "Supply Chain Logistics & Commercial Real Estate"
      ],
      strengths: [
        "High product quality, proprietary recipes, and strong brand devotion",
        "Deep technical IP, agile engineering talent, and difficult-to-replicate moats",
        "Omnichannel nationwide distribution networks across physical and digital storefronts",
        "Rich proprietary customer data assets and frictionless service protocols",
        "Low-cost manufacturing capabilities and healthy cash flow reserves"
      ],
      challenges: [
        "Aggressive price discounting by competitors and low-cost overseas imports",
        "Escalating customer acquisition ad costs and shrinking net margins",
        "Manual legacy operational bottlenecks and digital skill shortages",
        "High customer switching propensity and commoditization risks",
        "Lack of automated CRM and recurring customer retention flywheels"
      ],
      goal: [
        "Accelerate revenue and expand net margin by 30% over the next 12 months",
        "Break free from price wars by establishing uncontested value innovation",
        "Secure enterprise B2B recurring subscription contracts",
        "Slash operational overhead by 20% through autonomous AI workflows",
        "Launch high-margin new products and enter regional overseas markets"
      ],
      formatTone: [
        "Executive tables and prioritized 90-day action roadmaps (C-Suite Tone)",
        "Structured strategic report with quantitative benchmarks and hurdle gates",
        "Crisp, decisive conversational tone ready for team alignment meetings",
        "Board of Directors Strategic Presentation Deck Format"
      ]
    },
    frameworkCards: [
      {
        id: "swot",
        name: "1. SWOT Analysis",
        desc: "Evaluate Strengths (S), Weaknesses (W), Opportunities (O), and Competitor Threats (T)",
        icon: "📊"
      },
      {
        id: "tows",
        name: "2. TOWS Action Matrix",
        desc: "Convert SWOT into 4 action plays: SO (Offensive), WO (Pivot), ST (Defensive), WT (Crisis)",
        icon: "🔄"
      },
      {
        id: "bcg",
        name: "3. BCG Growth-Share Matrix",
        desc: "Portfolio capital allocation: Stars, Cash Cows, Question Marks, and Dogs",
        icon: "⭐"
      },
      {
        id: "blue-ocean",
        name: "4. Blue Ocean Strategy (ERRC)",
        desc: "Escape price wars: Eliminate, Reduce, Raise, and Create unprecedented value",
        icon: "🌊"
      },
      {
        id: "got",
        name: "5. Graph of Thoughts (GoT) Verdict",
        desc: "Synthesize multi-branch cognitive reasoning, cross-merge options, and deliver final verdict",
        icon: "🧠"
      },
      {
        id: "five-forces",
        name: "6. Porter's Five Forces",
        desc: "Analyze 5 competitive pressures: Rivals, Buyers, Suppliers, Entrants, Substitutes",
        icon: "🥊"
      }
    ]
  }
};

// ==========================================
// 2. 12+ SINGLE FRAMEWORK DATA
// ==========================================
const AI_MBA_MODELS = [
  // Classic Models
  {
    id: "swot",
    category: "classic",
    title: {
      th: "SWOT Analysis: ผ่าจุดแข็ง จุดอ่อน โอกาส และอุปสรรค",
      en: "SWOT Analysis: Strengths, Weaknesses, Opportunities & Threats"
    },
    subtitle: {
      th: "เครื่องมือประเมินสถานะเชิงกลยุทธ์ขั้นพื้นฐานเพื่อค้นหาความได้เปรียบในการแข่งขัน",
      en: "Foundational strategic assessment to uncover core competencies and competitive parity"
    },
    school: "Harvard & Classic Strategy",
    badge: "badge-hbs",
    difficulty: "Beginner",
    bookChapterId: "chap-1",
    bookChapterTitle: {
      th: "บทที่ 1: ผมเห็นหนังเรื่องนี้มาแล้ว (ปี 2539)",
      en: "Chapter 1: I've Seen This Movie Before (1996)"
    },
    description: {
      whatIs: {
        th: "SWOT Analysis เป็นกรอบการวิเคราะห์เชิงกลยุทธ์ที่ประเมิน 2 มิติ: ปัจจัยภายในองค์กร (จุดแข็ง Strengths และจุดอ่อน Weaknesses) และปัจจัยภายนอกองค์กร (โอกาส Opportunities และอุปสรรค Threats) เพื่อให้ผู้บริหารมองเห็นภาพรวมของธุรกิจอย่างรอบด้าน",
        en: "SWOT Analysis evaluates internal factors (Strengths & Weaknesses) and external dynamics (Opportunities & Threats) to provide leaders with an objective snapshot of their strategic posture."
      },
      howToUse: {
        th: "1. ระบุจุดแข็งที่ลอกเลียนแบบได้ยาก (Core Competency)\n2. ระบุจุดอ่อนที่เป็นคอขวดต่อการเติบโต\n3. ค้นหาโอกาสใหม่จากกระแสเทคโนโลยีและพฤติกรรมผู้บริโภค\n4. ประเมินอุปสรรคจากคู่แข่ง กฎหมาย หรือภาวะเศรษฐกิจ\n5. สั่งให้ AI จัดลำดับความสำคัญและแปลงเป็นแผนปฏิบัติการจริง",
        en: "1. Pinpoint hard-to-replicate core strengths\n2. Highlight operational bottlenecks as weaknesses\n3. Spot emerging market opportunities powered by AI/tech\n4. Map competitive and regulatory threats\n5. Direct AI to prioritize and convert findings into executive action."
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: อย่าปล่อยให้ AI ตอบ SWOT แบบกว้างๆ ทั่วไป (Generic) ต้องบังคับให้ AI ระบุ 'ตัวเลข' 'ชื่อคู่แข่ง' และ 'ผลกระทบเชิงการเงิน' เสมอ เพื่อให้ใช้ตัดสินใจในห้องประชุมบอร์ดได้จริง",
        en: "💡 Coach Cheeptham & FastAI Tip: Never settle for generic SWOT outputs. Force the AI to inject quantitative metrics, rival names, and financial impacts for boardroom-grade rigor."
      }
    },
    fields: [
      {
        key: "companyName",
        label: { th: "ชื่อบริษัท / แบรนด์", en: "Company / Brand Name" },
        placeholder: { th: "เช่น Siam AI Logistics / CraftOrigin Cafe", en: "e.g., CraftOrigin Coffee / Alpha Logistics" },
        type: "text"
      },
      {
        key: "industry",
        label: { th: "อุตสาหกรรม / กลุ่มลูกค้าเป้าหมาย", en: "Industry & Target Market" },
        placeholder: { th: "เช่น Specialty Coffee และ B2B Bean Supply", en: "e.g., Specialty Coffee & B2B Wholesale Supply" },
        type: "text"
      },
      {
        key: "internalData",
        label: { th: "ข้อมูลภายในองค์กร (จุดเด่น / ปัญหาปัจจุบัน)", en: "Internal Context (Strengths & Constraints)" },
        placeholder: { th: "เช่น มีโรงคั่วมาตรฐานสากล แต่ระบบยังเป็น Manual", en: "e.g., Proprietary roasting IP, but legacy manual dispatch systems" },
        type: "textarea"
      },
      {
        key: "externalData",
        label: { th: "สภาพแวดล้อมภายนอกและคู่แข่ง", en: "External Landscape & Competitors" },
        placeholder: { th: "เช่น คู่แข่งตัดราคา 15% ลูกค้าต้องการความเร็ว", en: "e.g., Regional price war, clients demand real-time transparency" },
        type: "textarea"
      },
      {
        key: "strategicGoal",
        label: { th: "เป้าหมายเชิงกลยุทธ์ที่ต้องการบรรลุใน 6-12 เดือน", en: "Strategic Objective (6-12 Months)" },
        placeholder: { th: "เช่น เพิ่มยอดขาย B2B 40% และสร้าง Subscription", en: "e.g., Scale B2B sales by 40% and establish recurring subscription flows" },
        type: "text"
      }
    ],
    examples: [
      {
        name: { th: "☕ ธุรกิจ SME คาเฟ่และโรงคั่วกาแฟพรีเมียม", en: "☕ Specialty Coffee Roaster SME" },
        data: {
          companyName: "CraftOrigin Coffee Roasters",
          industry: "Specialty Coffee & B2B Bean Supply",
          internalData: "Award-winning roastery, highly skilled baristas, loyal customer base, and viral storytelling content",
          externalData: "Local competitors discounting by 20%, volatile green bean import costs, and steep 30% delivery app commissions",
          strategicGoal: "Scale B2B wholesale beans by 40% and build recurring monthly D2C subscription revenue"
        }
      }
    ],
    promptTemplate: (inputs, targetAi, lang) => {
      const isTh = lang === "th";
      return isTh
        ? `[คำสั่ง C-Suite Strategic SWOT Analysis สำหรับ ${targetAi}]

บทบาทของคุณ: คุณคือประธานที่ปรึกษากลยุทธ์ธุรกิจและศาสตราจารย์ MBA ชั้นนำ (Executive Strategy Advisor)
ผมต้องการให้คุณทำการวิเคราะห์ SWOT เชิงลึกแบบเข้มข้น ไม่รับคำตอบผิวเผินหรือข้อความทั่วไป

🏢 ข้อมูลบริบทธุรกิจ:
- บริษัท/แบรนด์: ${inputs.companyName || "[ระบุชื่อบริษัท]"}
- อุตสาหกรรมและกลุ่มเป้าหมาย: ${inputs.industry || "[ระบุอุตสาหกรรม]"}
- สภาพภายในองค์กร: ${inputs.internalData || "[ระบุข้อมูลภายใน]"}
- สภาพภายนอกและคู่แข่ง: ${inputs.externalData || "[ระบุสภาพแวดล้อมภายนอก]"}
- เป้าหมายเชิงกลยุทธ์ (6-12 เดือน): ${inputs.strategicGoal || "[ระบุเป้าหมาย]"}

🎯 คำสั่งปฏิบัติการวิเคราะห์ 5 ขั้นตอน:
1. [Executive SWOT Matrix]: จัดทำตาราง SWOT 4 ช่อง โดยแต่ละช่องต้องระบุ 3-4 ประเด็นที่จับต้องได้ พร้อมระบุผลกระทบเชิงตัวเลขหรือความเสี่ยงทางการเงิน
2. [Root Cause & Core Competency]: เจาะลึกว่าอะไรคือ 'ความได้เปรียบที่แท้จริง' (Unfair Advantage) และอะไรคือ 'จุดตาย' (Vulnerability) ที่หากไม่แก้ไขจะทำให้ธุรกิจพ่ายแพ้
3. [AI & Modern Leverage]: เสนอแนวทางการนำ Generative AI และ Data Analytics มาช่วยลบจุดอ่อน (Weaknesses) และคว้าโอกาส (Opportunities)
4. [3 Actionable Strategic Initiatives]: สร้างโครงการริเริ่มเชิงกลยุทธ์ 3 โครงการที่ทำได้ทันทีใน 90 วัน พร้อมระบุเจ้าของงานและตัวชี้วัด (KPIs/OKRs)
5. [Executive Summary for Board]: สรุปข้อความสำหรับเสนอต่อคณะกรรมการบริหาร (Executive Pitch) ความยาวไม่เกิน 5 บรรทัด`
        : `[C-Suite Strategic SWOT Analysis Command for ${targetAi}]

ROLE & PERSONA: You are a Senior Strategy Partner at a top-tier management consultancy and Elite MBA Strategy Professor.
Execute a rigorous, high-impact SWOT Analysis for the following enterprise. Generic or high-level platitudes are strictly unacceptable.

🏢 BUSINESS CONTEXT:
- Company/Brand: ${inputs.companyName || "[Company Name]"}
- Industry & Target Market: ${inputs.industry || "[Industry & Market]"}
- Internal Environment & Capabilities: ${inputs.internalData || "[Internal Details]"}
- External Landscape & Competitive Dynamics: ${inputs.externalData || "[External Details]"}
- Strategic Objective (6-12 Months): ${inputs.strategicGoal || "[Strategic Goals]"}

🎯 5-STEP ACTION DIRECTIVES:
1. [Executive SWOT Matrix]: Construct a sharp 4-quadrant SWOT matrix. Each quadrant must contain 3-4 concrete, prioritized factors with tangible business or financial implications.
2. [Core Competency & Vulnerability Diagnosis]: Isolate the company's true "Unfair Advantage" and diagnose the single existential vulnerability that threatens long-term viability.
3. [AI & Technology Leverage]: Formulate concrete recommendations on how Generative AI, Automation, and Data Infrastructure can eliminate internal weaknesses and seize market opportunities.
4. [90-Day Strategic Roadmap]: Define 3 prioritized strategic initiatives ready for immediate rollout in the next quarter, including assigned executive ownership and quantifiable OKRs/KPIs.
5. [Boardroom Executive Brief]: Deliver a concise, decisive summary (max 5 sentences) calibrated for presentation to the Board of Directors.`;
    }
  },

  // TOWS Matrix
  {
    id: "tows",
    category: "classic",
    title: {
      th: "TOWS Matrix: แปลง SWOT สู่ 4 แผนกลยุทธ์ปฏิบัติการ",
      en: "TOWS Matrix: Translating SWOT into 4 Actionable Strategies"
    },
    subtitle: {
      th: "จับคู่ปัจจัยภายในและภายนอกเพื่อสร้างกลยุทธ์ SO, WO, ST และ WT ที่นำไปปฏิบัติได้จริง",
      en: "Cross-matching internal capabilities with external forces to build SO, WO, ST, and WT game plans"
    },
    school: "Harvard & Stanford Strategy",
    badge: "badge-hbs",
    difficulty: "Intermediate",
    bookChapterId: "chap-8",
    bookChapterTitle: {
      th: "บทที่ 8: Strategy Formulation & Dynamic Execution",
      en: "Chapter 8: Strategy Formulation & Dynamic Execution"
    },
    description: {
      whatIs: {
        th: "TOWS Matrix คือการยกระดับ SWOT จากการเป็นแค่ 'การประเมินสถานะ' ให้กลายเป็น 'กลยุทธ์ที่ลงมือทำได้' โดยการจับคู่ตาราง 4 รูปแบบ: SO (ใช้จุดแข็งคว้าโอกาส), WO (ลบจุดอ่อนเพื่อรับโอกาส), ST (ใช้จุดแข็งต้านอุปสรรค), และ WT (ลดจุดอ่อนและหลบเลี่ยงภัยคุกคาม)",
        en: "The TOWS Matrix elevates static SWOT observations into dynamic action strategies via four cross-quadrants: SO (Maxi-Maxi), WO (Mini-Maxi), ST (Maxi-Mini), and WT (Mini-Mini)."
      },
      howToUse: {
        th: "1. นำจุดแข็ง (S) และโอกาส (O) มาผสานเป็นกลยุทธ์เชิงรุก (SO Strategy)\n2. นำจุดอ่อน (W) และโอกาส (O) มาสร้างกลยุทธ์ปรับปรุงองค์กร (WO Strategy)\n3. นำจุดแข็ง (S) มารับมือภัยคุกคาม (T) เป็นกลยุทธ์ตั้งรับเชิงรุก (ST Strategy)\n4. กำหนดกลยุทธ์เอาตัวรอด (WT Strategy) เพื่อตัดตอนความเสี่ยงร้ายแรง",
        en: "1. Forge offensive plays by pairing Strengths with Opportunities (SO)\n2. Overcome operational deficits to capture emerging markets (WO)\n3. Deploy core strengths to neutralize external disruptions (ST)\n4. Build defensive hedges and contingency firewalls to survive critical threats (WT)."
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: กลยุทธ์ WT มักเป็นสิ่งที่ผู้บริหารมองข้ามที่สุด ให้ใช้ AI คิด Worst-Case Scenario เพื่อปิดความเสี่ยงทางการเงินและรักษา Cash Flow ก่อนจะทุ่มขยายตลาด",
        en: "💡 Coach Cheeptham & FastAI Tip: Leaders frequently ignore WT strategies. Instruct AI to simulate worst-case scenarios and stress-test cash flow defenses before scaling."
      }
    },
    fields: [
      {
        key: "companyName",
        label: { th: "ชื่อบริษัท / แบรนด์", en: "Company / Brand Name" },
        placeholder: { th: "เช่น FinTech Gateway / Retail Chain Plus", en: "e.g., FinTech Gateway / Retail Chain Plus" },
        type: "text"
      },
      {
        key: "strengths",
        label: { th: "จุดแข็งหลัก (Strengths - S)", en: "Key Strengths (S)" },
        placeholder: { th: "เช่น มีฐานลูกค้าเดิม 500,000 ราย, ใบอนุญาตธนาคาร, แบรนด์น่าเชื่อถือ", en: "e.g., 500k active users, central bank regulatory license, strong brand trust" },
        type: "textarea"
      },
      {
        key: "weaknesses",
        label: { th: "จุดอ่อนหลัก (Weaknesses - W)", en: "Key Weaknesses (W)" },
        placeholder: { th: "เช่น แอปพลิเคชันโหลดช้า มี Bug บ่อย, ขาดบุคลากร AI Engineer", en: "e.g., App latency and legacy bugs, AI talent deficit, slow decision hierarchy" },
        type: "textarea"
      },
      {
        key: "opportunities",
        label: { th: "โอกาสทางตลาด (Opportunities - O)", en: "Key Opportunities (O)" },
        placeholder: { th: "เช่น กระแส Cross-border QR Payment เติบโต 35%, นโยบาย Open Banking", en: "e.g., 35% YoY growth in ASEAN cross-border QR payments, Open Banking deregulation" },
        type: "textarea"
      },
      {
        key: "threats",
        label: { th: "อุปสรรคและภัยคุกคาม (Threats - T)", en: "Key Threats (T)" },
        placeholder: { th: "เช่น Big Tech ข้ามชาติเปิดบริการตัดราคา, การโจมตีทางไซเบอร์", en: "e.g., Global Big Tech entering with zero fees, escalating cybersecurity threats" },
        type: "textarea"
      }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      const isTh = lang === "th";
      return isTh
        ? `[คำสั่ง C-Level Strategic TOWS Action Matrix สำหรับ ${targetAi}]\n\n- บริษัท: ${inputs.companyName || "[ชื่อบริษัท]"}\n- จุดแข็ง (S): ${inputs.strengths || "[จุดแข็ง]"}\n- จุดอ่อน (W): ${inputs.weaknesses || "[จุดอ่อน]"}\n- โอกาส (O): ${inputs.opportunities || "[โอกาส]"}\n- อุปสรรค (T): ${inputs.threats || "[อุปสรรค]"}\n\n1. SO Strategies (Maxi-Maxi)\n2. WO Strategies (Mini-Maxi)\n3. ST Strategies (Maxi-Mini)\n4. WT Strategies (Mini-Mini)\n5. 90-Day Execution Roadmap`
        : `[C-Level Strategic TOWS Action Matrix for ${targetAi}]\n\n- Company: ${inputs.companyName || "[Company Name]"}\n- Strengths (S): ${inputs.strengths || "[Strengths]"}\n- Weaknesses (W): ${inputs.weaknesses || "[Weaknesses]"}\n- Opportunities (O): ${inputs.opportunities || "[Opportunities]"}\n- Threats (T): ${inputs.threats || "[Threats]"}\n\n1. SO Strategies (Maxi-Maxi)\n2. WO Strategies (Mini-Maxi)\n3. ST Strategies (Maxi-Mini)\n4. WT Strategies (Mini-Mini)\n5. 90-Day Execution Roadmap`;
    }
  },

  // Five Forces
  {
    id: "five-forces",
    category: "classic",
    title: {
      th: "Porter's Five Forces: วิเคราะห์แรงกดดันการแข่งขัน 5 ด้าน",
      en: "Porter's Five Forces: Industry Competitive Structure Analysis"
    },
    subtitle: {
      th: "ประเมินโครงสร้างความสามารถในการทำกำไรและอำนาจต่อรองของอุตสาหกรรม",
      en: "Evaluating industry attractiveness, bargaining powers, and sustainable margin capture"
    },
    school: "Harvard Business School (Michael Porter)",
    badge: "badge-hbs",
    difficulty: "Intermediate",
    bookChapterId: "chap-4",
    bookChapterTitle: {
      th: "บทที่ 4: Harvard: วันที่ Case Method ต้องนั่งโต๊ะเดียวกับ AI",
      en: "Chapter 4: Harvard: When Case Method Sits with AI"
    },
    description: {
      whatIs: {
        th: "โมเดลระดับตำนานของ Michael Porter แห่ง Harvard Business School เพื่อประเมินความน่าดึงดูดและโครงสร้างกำไรของอุตสาหกรรม ผ่าน 5 แรงกดดัน: คู่แข่งเดิม, ผู้ซื้อ, ซัพพลายเออร์, ผู้เล่นใหม่, และสินค้าทดแทน",
        en: "Michael Porter's legendary HBS framework dissecting industry profit pools across five structural forces: Rivalry, Buyer Power, Supplier Power, Threat of Entry, and Threat of Substitutes."
      },
      howToUse: {
        th: "1. ประเมินระดับความรุนแรงของแต่ละแรงกดดัน\n2. ระบุปัจจัยขับเคลื่อนที่ทำให้เกิดอำนาจต่อรอง\n3. หาตำแหน่งเชิงกลยุทธ์ที่หลบพ้นแรงกดดันเหล่านั้น\n4. ใช้ AI ออกแบบกลยุทธ์ตั้งกำแพงป้องกัน (Moat)",
        en: "1. Gauge the intensity of each force\n2. Uncover root drivers behind bargaining dynamics\n3. Pinpoint defensible strategic niches\n4. Deploy AI to engineer impenetrable moats."
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: ในยุค AI พลัง 'สินค้าทดแทน' มักมาจาก AI Agent ข้ามสายงาน ให้สั่ง AI วิเคราะห์มุมนี้ด้วยเสมอ",
        en: "💡 Coach Cheeptham & FastAI Tip: In the AI era, substitutes emerge from automated workflows and cross-industry AI agents."
      }
    },
    fields: [
      { key: "industryName", label: { th: "อุตสาหกรรม / ตลาดที่ต้องการวิเคราะห์", en: "Target Industry & Market" }, placeholder: { th: "เช่น ธุรกิจพัฒนาซอฟต์แวร์ Custom CRM", en: "e.g., Custom B2B software development" }, type: "text" },
      { key: "rivalryDetails", label: { th: "สภาพการแข่งขันและคู่แข่งปัจจุบัน", en: "Current Rivals & Market Intensity" }, placeholder: { th: "เช่น มีบริษัทพัฒนาซอฟต์แวร์กว่า 200 ราย มีการตัดราคา", en: "e.g., 200+ dev agencies, severe price wars" }, type: "textarea" },
      { key: "buyerSupplierInfo", label: { th: "ข้อมูลลูกค้า (Buyers) และซัพพลายเออร์ (Suppliers)", en: "Buyer & Supplier Dynamics" }, placeholder: { th: "เช่น ลูกค้าต่อรองราคาเก่ง / พึ่งพา Cloud AWS และ OpenAI", en: "e.g., Buyers demand discounts / Dependency on AWS & OpenAI" }, type: "textarea" },
      { key: "entrySubstituteThreats", label: { th: "ภัยคุกคามจากผู้เล่นใหม่และสินค้าทดแทน", en: "New Entrants & Substitutes" }, placeholder: { th: "เช่น No-Code tools, AI Coding Tools (Cursor, v0)", en: "e.g., Generative AI app builders, No-Code platforms" }, type: "textarea" }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      const isTh = lang === "th";
      return isTh
        ? `[Harvard Five Forces Competitive Evaluation for ${targetAi}]\n\nTarget Industry: ${inputs.industryName || "[Industry]"}\nCurrent Rivals: ${inputs.rivalryDetails || "[Rivalry]"}\nBuyers & Suppliers: ${inputs.buyerSupplierInfo || "[Buyer/Supplier]"}\nSubstitutes: ${inputs.entrySubstituteThreats || "[Substitutes]"}\n\n1. Score 5 forces (1-10)\n2. Pinpoint profit leakage\n3. Propose 3 economic moats\n4. C-Level Action roadmap`
        : `[Harvard Five Forces Competitive Evaluation for ${targetAi}]\n\nTarget Industry: ${inputs.industryName || "[Industry]"}\nCurrent Rivals: ${inputs.rivalryDetails || "[Rivalry]"}\nBuyers & Suppliers: ${inputs.buyerSupplierInfo || "[Buyer/Supplier]"}\nSubstitutes: ${inputs.entrySubstituteThreats || "[Substitutes]"}\n\n1. Score 5 forces (1-10)\n2. Pinpoint profit leakage\n3. Propose 3 economic moats\n4. C-Level Action roadmap`;
    }
  },

  // BCG Matrix
  {
    id: "bcg",
    category: "classic",
    title: {
      th: "BCG Matrix: บริหารพอร์ตโฟลิโอสินค้าและธุรกิจ (Growth-Share)",
      en: "BCG Growth-Share Matrix: Portfolio Capital Allocation"
    },
    subtitle: {
      th: "จัดกลุ่มธุรกิจเป็น Stars, Cash Cows, Question Marks และ Dogs เพื่อจัดสรรเงินทุนอย่างแม่นยำ",
      en: "Categorizing business units into Stars, Cash Cows, Question Marks, and Dogs for optimal capital deployment"
    },
    school: "Boston Consulting Group (BCG) & MBA Corporate Finance",
    badge: "badge-wharton",
    difficulty: "Intermediate",
    bookChapterId: "chap-5",
    bookChapterTitle: {
      th: "บทที่ 5: Wharton: โรงเรียนที่เปิดสายเอก AI แล้วมัดจริยธรรมติดไว้กับแกน",
      en: "Chapter 5: Wharton: Opening AI Major Bound with Ethics"
    },
    description: {
      whatIs: {
        th: "BCG Growth-Share Matrix ช่วยผู้บริหารจัดสรรทรัพยากรและเงินทุนในพอร์ตโฟลิโอธุรกิจ โดยใช้แกนอัตราการเติบโตของตลาด และส่วนแบ่งตลาดสัมพัทธ์",
        en: "The BCG Matrix (Boston Consulting Group) guides capital allocation across a multi-product portfolio based on Market Growth Rate vs. Relative Market Share."
      },
      howToUse: {
        th: "1. Stars: ตลาดโตสูง ส่วนแบ่งสูง -> ทุ่มลงทุน\n2. Cash Cows: ตลาดโตต่ำ ส่วนแบ่งสูง -> รีดกระแสเงินสดมาเลี้ยงตัวอื่น\n3. Question Marks: ตลาดโตสูง ส่วนแบ่งต่ำ -> ตัดสินใจเลือกลงทุนหรือถอนตัว\n4. Dogs: ตลาดโตต่ำ ส่วนแบ่งต่ำ -> ปรับโครงสร้างหรือขายทอดตลาด",
        en: "1. Stars: High growth, high share\n2. Cash Cows: Low growth, high share\n3. Question Marks: High growth, low share\n4. Dogs: Low growth, low share"
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: สั่งให้ AI วางแผนแปลง Cash Flow จาก Cash Cow ไปสร้าง Star ยุค AI ตัวใหม่ทันที",
        en: "💡 Coach Cheeptham & FastAI Tip: Reinvest legacy Cash Cow flows directly into AI-native Stars."
      }
    },
    fields: [
      { key: "companyPortfolio", label: { th: "ชื่อองค์กรและรายการสินค้าในพอร์ต", en: "Portfolio Units" }, placeholder: { th: "เช่น สินค้า A (โตเร็ว), สินค้า B (กำไรดีโตช้า), สินค้า C", en: "e.g., Product A (High growth), Product B (Legacy high profit), Product C" }, type: "textarea" }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      return `[BCG Matrix Portfolio Allocation for ${targetAi}]\n\nPortfolio: ${inputs.companyPortfolio || "[Portfolio]"}\n\n1. Classify into Stars, Cash Cows, Question Marks, Dogs\n2. Prescribe capital reallocation %\n3. AI Automation Plan for underperforming units`;
    }
  },

  // Blue Ocean Strategy
  {
    id: "blue-ocean",
    category: "classic",
    title: {
      th: "Blue Ocean Strategy: ทะเลสีครามและตาราง ERRC Grid",
      en: "Blue Ocean Strategy: Value Innovation & ERRC Grid"
    },
    subtitle: {
      th: "ฉีกหนีสงครามราคาใน Red Ocean ด้วยการสร้างนวัตกรรมเชิงคุณค่า (Value Innovation)",
      en: "Escaping red ocean commodity bloodbaths through Value Innovation and Four Actions Framework"
    },
    school: "INSEAD & Harvard Strategy (W. Chan Kim & Renée Mauborgne)",
    badge: "badge-hbs",
    difficulty: "Advanced",
    bookChapterId: "chap-8",
    bookChapterTitle: {
      th: "บทที่ 8: Strategy Formulation & Dynamic Execution",
      en: "Chapter 8: Strategy Formulation & Dynamic Execution"
    },
    description: {
      whatIs: {
        th: "Blue Ocean Strategy มุ่งเน้นการสร้าง 'พื้นที่ตลาดใหม่ที่ไร้คู่แข่ง' ด้วยการสร้าง Value Innovation ผ่านเครื่องมือ ERRC Grid (Eliminate, Reduce, Raise, Create)",
        en: "Blue Ocean Strategy creates uncontested market space via the ERRC Grid (Eliminate, Reduce, Raise, Create)."
      },
      howToUse: {
        th: "1. Eliminate: ตัดสิ่งที่ไม่จำเป็นทิ้ง\n2. Reduce: ลดมาตรฐานที่เกินความจำเป็นลง\n3. Raise: ยกระดับจุดที่ลูกค้าต้องการ\n4. Create: สร้างคุณค่าใหม่ด้วย AI",
        en: "1. Eliminate\n2. Reduce\n3. Raise\n4. Create"
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: อย่าแค่ดีกว่าคู่แข่ง 10% แต่จงนำ AI มาสร้างคุณค่าใหม่แบบ 10x ในราคาที่ถูกกว่าเดิม",
        en: "💡 Coach Cheeptham & FastAI Tip: Target 10x value breakthroughs rather than 10% incremental improvements."
      }
    },
    fields: [
      { key: "industryRedOcean", label: { th: "อุตสาหกรรมและสงครามราคาปัจจุบัน", en: "Current Red Ocean Industry" }, placeholder: { th: "เช่น การแข่งขันตัดราคาในตลาดคาเฟ่หรือค้าปลีก", en: "e.g., Aggressive price wars in local retail or F&B" }, type: "textarea" }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      return `[Blue Ocean ERRC Grid Strategy for ${targetAi}]\n\nRed Ocean Context: ${inputs.industryRedOcean || "[Context]"}\n\n1. Eliminate (ตัดทิ้ง)\n2. Reduce (ลดทอน)\n3. Raise (ยกระดับ)\n4. Create (สร้างใหม่)\n5. Strategy Canvas Value Curve`;
    }
  },

  // Graph of Thoughts (GoT)
  {
    id: "got",
    category: "cognitive",
    title: {
      th: "Graph of Thoughts (GoT): เครือข่ายการคิดและการตัดสินใจหลายมิติ",
      en: "Graph of Thoughts (GoT): Multi-Branch Strategic Decision Graph"
    },
    subtitle: {
      th: "ยกระดับเหนือ Chain of Thought ด้วยการคิดแบบกราฟ แตกกิ่ง รวมไอเดีย และประเมินคะแนน",
      en: "Beyond linear reasoning: Graph-structured thought generation, multi-path synthesis, and feedback scoring"
    },
    school: "ETH Zurich & Advanced AI Research",
    badge: "badge-mit",
    difficulty: "Advanced",
    bookChapterId: "chap-9",
    bookChapterTitle: {
      th: "บทที่ 9: Advanced Prompting & Graph of Thoughts",
      en: "Chapter 9: Advanced Prompting & Graph of Thoughts"
    },
    description: {
      whatIs: {
        th: "Graph of Thoughts (GoT) จำลองความคิดเป็น 'โหนดในโครงข่ายกราฟ' ที่แตกความคิดหลายสาย (Branching), รวมข้อดีของความคิดต่างสาย (Merging), และประเมินคะแนนเพื่อหาคำตอบที่ดีที่สุด",
        en: "Graph of Thoughts (GoT) structures reasoning into arbitrary graphs, merging divergent paths and scoring solutions."
      },
      howToUse: {
        th: "1. แตกกิ่งความคิด 3 สาย\n2. รวมข้อดีของแต่ละสายเข้าด้วยกัน\n3. ให้คะแนนเชิงปริมาณ\n4. ฟันธงทางเลือกที่ดีที่สุด",
        en: "1. Generate 3 Paths\n2. Cross-Merge\n3. Score\n4. Final Verdict"
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: GoT ช่วยให้เห็นจุดบอดที่การคิดแบบทีละขั้นมองไม่เห็น เหมาะกับการตัดสินใจสำคัญระดับ C-Level",
        en: "💡 Coach Cheeptham & FastAI Tip: GoT eliminates single-thread cognitive blindness for C-Suite decisions."
      }
    },
    fields: [
      { key: "complexProblem", label: { th: "โจทย์การตัดสินใจที่ซับซ้อน", en: "Complex Decision Problem" }, placeholder: { th: "เช่น การเลือกระหว่าง 3 ทางเลือกกลยุทธ์ขยายสาขาหรือเปิดออนไลน์", en: "e.g., Selecting between 3 strategic investment paths" }, type: "textarea" }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      return `[Graph of Thoughts (GoT) Decision Engine for ${targetAi}]\n\nProblem: ${inputs.complexProblem || "[Problem]"}\n\n1. Generate Path A, B, C\n2. Merge Node AB and BC\n3. Score Matrix (1-100)\n4. Optimal Consensus Verdict`;
    }
  },

  // Wharton Co-Intelligence
  {
    id: "wharton-co-intel",
    category: "bschool",
    title: {
      th: "Wharton Co-Intelligence: ยุทธศาสตร์ Centaur & Cyborg",
      en: "Wharton Co-Intelligence: Centaur & Cyborg Human-AI Collaboration"
    },
    subtitle: {
      th: "กรอบแนวคิด Ethan Mollick ในการแบ่งงานระหว่างมนุษย์และ AI ตามเส้นขอบ Jagged Frontier",
      en: "Ethan Mollick's framework for optimizing Human-AI division of labor along the Jagged Frontier"
    },
    school: "The Wharton School (Ethan Mollick)",
    badge: "badge-wharton",
    difficulty: "Advanced",
    bookChapterId: "chap-5",
    bookChapterTitle: {
      th: "บทที่ 5: Wharton: โรงเรียนที่เปิดสายเอก AI แล้วมัดจริยธรรมติดไว้กับแกน",
      en: "Chapter 5: Wharton: Opening AI Major Bound with Ethics"
    },
    description: {
      whatIs: {
        th: "โมเดลการทำงานร่วมกันระหว่างมนุษย์และ AI ระดับแนวหน้าของ Wharton: 1) Centaur (แบ่งงานชัดเจน มนุษย์ทำส่วนที่ถนัด AI ทำส่วนที่เก่ง) และ 2) Cyborg (มนุษย์และ AI ผสานกันในทุกขั้นตอนการคิด)",
        en: "Wharton's premier human-AI collaboration paradigms: Centaur (clear task division) vs. Cyborg (seamless continuous integration)."
      },
      howToUse: {
        th: "1. วิเคราะห์งานตาม Jagged Frontier\n2. จัดหมวดงานแบบ Centaur\n3. ออกแบบขั้นตอนแบบ Cyborg\n4. ตรวจสอบความแม่นยำและจริยธรรม",
        en: "1. Map tasks along the Jagged Frontier\n2. Structure Centaur task allocations\n3. Design Cyborg interactive loops\n4. Implement governance and verification."
      },
      coachingInsight: {
        th: "💡 โค้ชชีพธรรม & FastAI แนะนำ: อย่าสั่งให้ AI ทำงาน 100% แต่ให้วางตัวเป็น Centaur ที่ดึงจุดเด่นของ AI มาเสริมจุดแข็งของตัวเรา",
        en: "💡 Coach Cheeptham & FastAI Tip: Operate as a Centaur, combining human strategic intuition with AI execution power."
      }
    },
    fields: [
      { key: "workflowTask", label: { th: "กระบวนการทำงานหรือโจทย์ธุรกิจที่ต้องการปรับปรุง", en: "Target Business Workflow & Objective" }, placeholder: { th: "เช่น การวิเคราะห์งบการเงินและเขียนบทสรุปผู้บริหาร", en: "e.g., Financial reporting and executive memo synthesis" }, type: "textarea" }
    ],
    examples: [],
    promptTemplate: (inputs, targetAi, lang) => {
      return `[Wharton Co-Intelligence Strategic Workflow for ${targetAi}]\n\nWorkflow: ${inputs.workflowTask || "[Workflow]"}\n\n1. Jagged Frontier Boundary Mapping\n2. Centaur Division of Labor Protocol\n3. Cyborg Co-Creation Interaction Loops\n4. Risk Mitigation & Hallucination Guardrails`;
    }
  }
];

// ==========================================
// 3. GLOBAL TRANSLATION STRINGS (I18N)
// ==========================================
const AI_MBA_I18N = {
  th: {
    siteTitle: "AI MBA Interactive Prompt Engineering Lab",
    siteSubtitle: "สตูดิโอฝึกปฏิบัติการ Prompt Engineering โมเดลธุรกิจระดับโลก แบบเติมคำในช่องว่าง Step-by-Step ตามกรอบ RTCF ผสานหลายโมเดล (SWOT + TOWS + BCG + Blue Ocean + GoT ฟันธง) ในคลิกเดียว",
    authorTag: "ออกแบบและพัฒนาโดย อาจารย์ชีพธรรม คำวิเศษณ์ & ทีม FastAI",
    fastAiCaption: "Co-Authored & Powered by FastAI",
    fastAiSubcaption: "หลักสูตรและเครื่องมือ AI ชั้นนำเพื่อคนไทย",
    navHome: "📖 หนังสือ AI MBA (22 บท)",
    navWizardTab: "🧙‍♂️ โหมด 1: MBA Mega-Prompt Studio (RTCF + ผสานทุกโมเดล)",
    navDeepDiveTab: "🏛️ โหมด 2: Framework Deep-Dive (เจาะลึก 12+ โมเดล)",
    presetsTitle: "💡 ตัวอย่างสูตรสำเร็จรูป 1 คลิก (Click to Load Complete Preset):",
    progressLabel: "📊 ความสมบูรณ์ของ Prompt (RTCF Completion):",
    rtcfRoleBadge: "R — ROLE",
    rtcfRoleTitle: "กำหนดบทบาทและความเชี่ยวชาญของ AI (Role & Persona)",
    rtcfRoleLabel: "บทบาทและผู้เชี่ยวชาญ AI ที่ต้องการให้สวมบทบาท:",
    rtcfRolePlaceholder: "เช่น คุณคือประธานที่ปรึกษากลยุทธ์ธุรกิจและ Executive Coach สาย MBA ชั้นนำ",
    rtcfContextBadge: "C — CONTEXT",
    rtcfContextTitle: "บริบทของคุณและข้อมูลธุรกิจ (Your Professional & Business Context)",
    rtcfProfLabel: "1) อาชีพและความเชี่ยวชาญของคุณ:",
    rtcfProfPlaceholder: "เช่น เจ้าของธุรกิจและผู้เชี่ยวชาญด้านการคั่วกาแฟพิเศษ",
    rtcfBizLabel: "2) ประเภทธุรกิจและกลุ่มลูกค้าเป้าหมาย:",
    rtcfBizPlaceholder: "เช่น คาเฟ่พรีเมียมและธุรกิจจัดส่งเมล็ดกาแฟ B2B ให้ร้านกาแฟและโรงแรม",
    rtcfStrengthLabel: "3) จุดเด่นและจุดแข็งในปัจจุบัน (Strengths & Moats):",
    rtcfStrengthPlaceholder: "เช่น มีโรงคั่วมาตรฐานสากล ได้รางวัลบาริสต้าระดับประเทศ มีฐานลูกค้าประจำและคอนเทนต์แน่น",
    rtcfChalLabel: "4) ปัญหา ความท้าทาย หรือคู่แข่งที่กำลังเผชิญ (Challenges & Rivals):",
    rtcfChalPlaceholder: "เช่น มีคู่แข่งเปิดใหม่ตัดราคา 20% ต้นทุนเมล็ดกาแฟนำเข้าผันผวน และเดลิเวอรีหักค่า GP สูง",
    rtcfGoalLabel: "5) เป้าหมายเชิงกลยุทธ์ใน 6-12 เดือนนี้ (Strategic Goals):",
    rtcfGoalPlaceholder: "เช่น เพิ่มยอดขาย B2B เมล็ดกาแฟ 40% และสร้างรายได้ประจำแบบ Subscription รายเดือน",
    rtcfTaskBadge: "T — TASK & FRAMEWORKS",
    rtcfTaskTitle: "เลือกโมเดลธุรกิจที่ต้องการให้ AI วิเคราะห์ร่วมกัน (Multi-Model Chaining)",
    rtcfTaskDesc: "💡 คลิกเลือกติ๊กเปิด/ปิดโมเดลที่ต้องการให้ AI นำมาร้อยเรียงวิเคราะห์แบบองค์รวมใน Prompt เดียว:",
    rtcfFormatBadge: "F — FORMAT",
    rtcfFormatTitle: "รูปแบบผลลัพธ์และสไตล์การนำเสนอ (Output Format & Tone)",
    rtcfFormatLabel: "รูปแบบการรายงานและระดับภาษา:",
    rtcfFormatPlaceholder: "เช่น ตารางสรุปข้อมูลแบบเข้าใจง่าย ภาษาทางการระดับ C-Suite พร้อมแผนปฏิบัติการ 90 วัน",
    livePreviewTitle: "⚡ Live MBA Mega-Prompt Preview",
    btnCopyPrompt: "📋 Copy Prompt",
    btnCopied: "✅ คัดลอกเรียบร้อยแล้ว!",
    btnExportMd: "📥 .md",
    launchTitle: "🚀 ส่งตรงไปรันใน AI ทันที (1-Click Launch):",
    filterAll: "✨ ทุกโมเดลธุรกิจ (All)",
    filterClassic: "🏛️ 1. Classic MBA",
    filterBschool: "🎓 2. Elite B-Schools",
    filterCognitive: "🧠 3. Cognitive & GoT",
    searchPlaceholder: "🔍 ค้นหาโมเดล เช่น SWOT, TOWS, Five Forces, GoT, Co-Intelligence...",
    btnOpenBuilder: "เปิดห้องทดลอง Prompt",
    switchLanguage: "Switch to English 🇬🇧",
    footerText: "สงวนลิขสิทธิ์ © 2026 AI MBA Handbook | ออกแบบและเรียบเรียงโดย ชีพธรรม คำวิเศษณ์ และทีม FastAI"
  },
  en: {
    siteTitle: "AI MBA Interactive Prompt Engineering Lab",
    siteSubtitle: "World-Class MBA Business Framework Fill-in-the-Blank Prompt Studio with RTCF & Multi-Model Chaining (SWOT + TOWS + BCG + Blue Ocean + GoT Verdict)",
    authorTag: "Co-Authored & Designed by Ajarn Cheeptham Khamwiset & FastAI Team",
    fastAiCaption: "Co-Authored & Powered by FastAI",
    fastAiSubcaption: "Premier AI Curriculums & Enterprise Strategy Tools",
    navHome: "📖 AI MBA Handbook (22 Chapters)",
    navWizardTab: "🧙‍♂️ Mode 1: MBA Mega-Prompt Studio (RTCF & Multi-Model)",
    navDeepDiveTab: "🏛️ Mode 2: Framework Deep-Dive (12+ Frameworks)",
    presetsTitle: "💡 1-Click Complete Preset Templates (Click to Auto-Load):",
    progressLabel: "📊 Prompt Completion (RTCF Progress):",
    rtcfRoleBadge: "R — ROLE",
    rtcfRoleTitle: "Define AI Role & Specialized Persona",
    rtcfRoleLabel: "AI Persona & Strategic Advisory Role:",
    rtcfRolePlaceholder: "e.g., You are an Elite MBA Senior Strategy Partner and Executive Leadership Coach.",
    rtcfContextBadge: "C — CONTEXT",
    rtcfContextTitle: "Your Professional & Business Context",
    rtcfProfLabel: "1) Your Profession & Core Expertise:",
    rtcfProfPlaceholder: "e.g., Founder & Licensed Q-Grader Specialty Coffee Specialist",
    rtcfBizLabel: "2) Business Model & Target Market:",
    rtcfBizPlaceholder: "e.g., Premium Specialty Cafe & B2B Wholesale Coffee Supply for Hotels & Restaurants",
    rtcfStrengthLabel: "3) Core Competencies & Current Moats (Strengths):",
    rtcfStrengthPlaceholder: "e.g., Award-winning roastery, highly skilled baristas, loyal customer base, and viral storytelling content",
    rtcfChalLabel: "4) Bottlenecks, Challenges & Competitors (Threats):",
    rtcfChalPlaceholder: "e.g., Local competitors discounting by 20%, volatile green bean import costs, and steep 30% delivery app commissions",
    rtcfGoalLabel: "5) 6-12 Month Strategic Ambition (Goals):",
    rtcfGoalPlaceholder: "e.g., Scale B2B wholesale beans by 40% and build recurring monthly D2C subscription revenue",
    rtcfTaskBadge: "T — TASK & FRAMEWORKS",
    rtcfTaskTitle: "Select Business Frameworks to Chain Together (Multi-Model Chaining)",
    rtcfTaskDesc: "💡 Click to toggle frameworks to include in the integrated master mega-prompt:",
    rtcfFormatBadge: "F — FORMAT",
    rtcfFormatTitle: "Output Deliverable Format & Executive Tone",
    rtcfFormatLabel: "Deliverable Format, Tone & Language:",
    rtcfFormatPlaceholder: "e.g., C-Suite executive summary tables with prioritized 90-day execution milestones",
    livePreviewTitle: "⚡ Live MBA Mega-Prompt Preview",
    btnCopyPrompt: "📋 Copy Prompt",
    btnCopied: "✅ Copied to Clipboard!",
    btnExportMd: "📥 .md",
    launchTitle: "🚀 Launch Direct in AI (1-Click Launch):",
    filterAll: "✨ All Frameworks",
    filterClassic: "🏛️ 1. Classic MBA",
    filterBschool: "🎓 2. Elite B-Schools",
    filterCognitive: "🧠 3. Cognitive & GoT",
    searchPlaceholder: "🔍 Search frameworks, e.g., SWOT, TOWS, Five Forces, GoT, Co-Intelligence...",
    btnOpenBuilder: "Launch Prompt Studio",
    switchLanguage: "สลับเป็นภาษาไทย 🇹🇭",
    footerText: "Copyright © 2026 AI MBA Handbook | Authored & Designed by Cheeptham Khamwiset & FastAI Team"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { AI_MBA_RTCF_DATA, AI_MBA_MODELS, AI_MBA_I18N };
}
