/**
 * AI MBA Interactive Prompt Engineering Lab - Application Controller
 * Dual-Mode Engine: 1) MBA RTCF Mega-Prompt Wizard + 2) Single Framework Deep-Dive
 * Co-Authored by: Cheeptham Khamwiset (ชีพธรรม คำวิเศษณ์) & FastAI Team
 * 100% Bilingual Reactive Architecture
 */

class AiMbaPromptStudio {
  constructor() {
    this.currentLang = localStorage.getItem("aimba_lang") || "th";
    this.currentMode = "wizard"; // "wizard" or "deepdive"
    this.currentCategory = "all";
    this.searchQuery = "";
    
    // Mode 1: RTCF Wizard State
    this.rtcfInputs = {
      role: "",
      userProfession: "",
      businessType: "",
      strengths: "",
      challenges: "",
      goal: "",
      selectedModels: ["swot", "tows", "bcg", "blue-ocean", "got"],
      formatTone: "",
      outputLanguage: ""
    };
    this.wizardAiTarget = "ChatGPT (GPT-4o / o1 / o3)";

    // Mode 2: Deep Dive State
    this.activeModel = null;
    this.activeAiTarget = "ChatGPT (GPT-4o / o1 / o3)";
    this.deepDiveInputs = {};

    this.favorites = JSON.parse(localStorage.getItem("aimba_favorites") || "[]");

    this.init();
  }

  init() {
    this.bindGlobalEvents();
    this.setupTheme();
    this.initDefaultRtcfValues();
    this.applyLanguage();
    this.renderRtcfChipsAndFrameworks();
    this.updateWizardLivePreview();
    this.renderModelGrid();
  }

  bindGlobalEvents() {
    // Language Toggle
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        this.currentLang = this.currentLang === "th" ? "en" : "th";
        localStorage.setItem("aimba_lang", this.currentLang);
        this.initDefaultRtcfValues();
        this.applyLanguage();
        this.renderRtcfChipsAndFrameworks();
        this.updateWizardLivePreview();
        this.renderModelGrid();
        if (this.activeModel) {
          this.renderModalContent();
        }
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("aimba_theme", newTheme);
        themeBtn.innerHTML = newTheme === "dark" ? "☀️ Light" : "🌙 Dark";
      });
    }

    // Search Input for Mode 2
    const searchInput = document.getElementById("modelSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderModelGrid();
      });
    }

    // Modal Close Events
    const closeBtn = document.getElementById("modalCloseBtn");
    const modalBackdrop = document.getElementById("modalBackdrop");
    if (closeBtn && modalBackdrop) {
      closeBtn.addEventListener("click", () => this.closeModal());
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) this.closeModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("active")) {
        this.closeModal();
      }
    });
  }

  setupTheme() {
    const savedTheme = localStorage.getItem("aimba_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.innerHTML = savedTheme === "dark" ? "☀️ Light" : "🌙 Dark";
    }
  }

  switchMode(mode) {
    this.currentMode = mode;
    const tabWizard = document.getElementById("tabWizardBtn");
    const tabDeepDive = document.getElementById("tabDeepDiveBtn");
    const wizardView = document.getElementById("wizardWorkspace");
    const deepDiveView = document.getElementById("deepdiveWorkspace");

    if (mode === "wizard") {
      if (tabWizard) tabWizard.classList.add("active");
      if (tabDeepDive) tabDeepDive.classList.remove("active");
      if (wizardView) wizardView.classList.add("active");
      if (deepDiveView) deepDiveView.classList.remove("active");
    } else {
      if (tabWizard) tabWizard.classList.remove("active");
      if (tabDeepDive) tabDeepDive.classList.add("active");
      if (wizardView) wizardView.classList.remove("active");
      if (deepDiveView) deepDiveView.classList.add("active");
      this.renderModelGrid();
    }
  }

  setFilterCategory(category, element) {
    this.currentCategory = category;
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    if (element) element.classList.add("active");
    this.renderModelGrid();
  }

  applyLanguage() {
    const t = AI_MBA_I18N[this.currentLang];
    document.documentElement.setAttribute("lang", this.currentLang);

    // Header & Buttons
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) langBtn.innerHTML = `🌐 ${t.switchLanguage}`;

    const navHome = document.getElementById("navHomeText");
    if (navHome) navHome.innerText = t.navHome;

    const tabWizard = document.getElementById("tabWizardBtn");
    if (tabWizard) tabWizard.innerText = t.navWizardTab;

    const tabDeepDive = document.getElementById("tabDeepDiveBtn");
    if (tabDeepDive) tabDeepDive.innerText = t.navDeepDiveTab;

    // Hero Section
    const titleEl = document.getElementById("heroSiteTitle");
    if (titleEl) titleEl.innerText = t.siteTitle;

    const subEl = document.getElementById("heroSiteSubtitle");
    if (subEl) subEl.innerText = t.siteSubtitle;

    const authorEl = document.getElementById("heroAuthorTag");
    if (authorEl) authorEl.innerText = t.authorTag;

    const fastAiCap = document.getElementById("fastAiCardCaption");
    if (fastAiCap) fastAiCap.innerText = t.fastAiCaption;

    const fastAiSub = document.getElementById("fastAiCardSubcaption");
    if (fastAiSub) fastAiSub.innerText = t.fastAiSubcaption;

    // Presets & Progress
    const presetTitleEl = document.getElementById("presetsCardTitle");
    if (presetTitleEl) presetTitleEl.innerHTML = `<span>💡</span> ${t.presetsTitle}`;

    const progressLabelEl = document.getElementById("progressLabelText");
    if (progressLabelEl) progressLabelEl.innerText = t.progressLabel;

    // RTCF Section 1: Role
    const roleBadge = document.getElementById("rtcfRoleBadge");
    if (roleBadge) roleBadge.innerText = t.rtcfRoleBadge;
    const roleTitle = document.getElementById("rtcfRoleTitle");
    if (roleTitle) roleTitle.innerText = t.rtcfRoleTitle;
    const roleLabel = document.getElementById("rtcfRoleLabel");
    if (roleLabel) roleLabel.innerText = t.rtcfRoleLabel;
    const roleInput = document.querySelector('[data-rtcf="role"]');
    if (roleInput) roleInput.placeholder = t.rtcfRolePlaceholder;

    // RTCF Section 2: Context
    const contextBadge = document.getElementById("rtcfContextBadge");
    if (contextBadge) contextBadge.innerText = t.rtcfContextBadge;
    const contextTitle = document.getElementById("rtcfContextTitle");
    if (contextTitle) contextTitle.innerText = t.rtcfContextTitle;
    const profLabel = document.getElementById("rtcfProfLabel");
    if (profLabel) profLabel.innerText = t.rtcfProfLabel;
    const profInput = document.querySelector('[data-rtcf="userProfession"]');
    if (profInput) profInput.placeholder = t.rtcfProfPlaceholder;

    const bizLabel = document.getElementById("rtcfBizLabel");
    if (bizLabel) bizLabel.innerText = t.rtcfBizLabel;
    const bizInput = document.querySelector('[data-rtcf="businessType"]');
    if (bizInput) bizInput.placeholder = t.rtcfBizPlaceholder;

    const strLabel = document.getElementById("rtcfStrengthLabel");
    if (strLabel) strLabel.innerText = t.rtcfStrengthLabel;
    const strInput = document.querySelector('[data-rtcf="strengths"]');
    if (strInput) strInput.placeholder = t.rtcfStrengthPlaceholder;

    const chalLabel = document.getElementById("rtcfChalLabel");
    if (chalLabel) chalLabel.innerText = t.rtcfChalLabel;
    const chalInput = document.querySelector('[data-rtcf="challenges"]');
    if (chalInput) chalInput.placeholder = t.rtcfChalPlaceholder;

    const goalLabel = document.getElementById("rtcfGoalLabel");
    if (goalLabel) goalLabel.innerText = t.rtcfGoalLabel;
    const goalInput = document.querySelector('[data-rtcf="goal"]');
    if (goalInput) goalInput.placeholder = t.rtcfGoalPlaceholder;

    // RTCF Section 3: Task
    const taskBadge = document.getElementById("rtcfTaskBadge");
    if (taskBadge) taskBadge.innerText = t.rtcfTaskBadge;
    const taskTitle = document.getElementById("rtcfTaskTitle");
    if (taskTitle) taskTitle.innerText = t.rtcfTaskTitle;
    const taskDesc = document.getElementById("rtcfTaskDesc");
    if (taskDesc) taskDesc.innerText = t.rtcfTaskDesc;

    // RTCF Section 4: Format
    const formatBadge = document.getElementById("rtcfFormatBadge");
    if (formatBadge) formatBadge.innerText = t.rtcfFormatBadge;
    const formatTitle = document.getElementById("rtcfFormatTitle");
    if (formatTitle) formatTitle.innerText = t.rtcfFormatTitle;
    const formatLabel = document.getElementById("rtcfFormatLabel");
    if (formatLabel) formatLabel.innerText = t.rtcfFormatLabel;
    const formatInput = document.querySelector('[data-rtcf="formatTone"]');
    if (formatInput) formatInput.placeholder = t.rtcfFormatPlaceholder;

    // Output Header & Actions
    const liveTitle = document.getElementById("livePreviewTitle");
    if (liveTitle) liveTitle.innerText = t.livePreviewTitle;
    const launchTitle = document.getElementById("wizardLaunchTitle");
    if (launchTitle) launchTitle.innerText = t.launchTitle;

    // Deep-Dive Filters & Search
    const filterAll = document.querySelector('.filter-btn[data-category="all"]');
    if (filterAll) filterAll.innerText = t.filterAll;
    const filterClassic = document.querySelector('.filter-btn[data-category="classic"]');
    if (filterClassic) filterClassic.innerText = t.filterClassic;
    const filterBschool = document.querySelector('.filter-btn[data-category="bschool"]');
    if (filterBschool) filterBschool.innerText = t.filterBschool;
    const filterCognitive = document.querySelector('.filter-btn[data-category="cognitive"]');
    if (filterCognitive) filterCognitive.innerText = t.filterCognitive;

    const searchInput = document.getElementById("modelSearchInput");
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // Footer
    const footerEl = document.getElementById("footerCopyright");
    if (footerEl) footerEl.innerText = t.footerText;
  }

  // ==========================================
  // MODE 1: RTCF WIZARD METHODS
  // ==========================================
  initDefaultRtcfValues() {
    const presets = AI_MBA_RTCF_DATA[this.currentLang].presets;
    if (presets && presets.length > 0) {
      this.rtcfInputs = { ...presets[0].data };
    }
  }

  renderRtcfChipsAndFrameworks() {
    const rtcfData = AI_MBA_RTCF_DATA[this.currentLang];

    // Presets bar
    const presetContainer = document.getElementById("rtcfPresetsList");
    if (presetContainer) {
      presetContainer.innerHTML = rtcfData.presets.map((p) => `
        <button class="preset-chip" onclick="window.promptStudio.loadRtcfPreset('${p.id}')">
          ${p.name}
        </button>
      `).join("");
    }

    // Role Chips
    this.renderChipsList("roleChipsTray", rtcfData.chips.role, "role");
    this.renderChipsList("userProfChipsTray", rtcfData.chips.userProfession, "userProfession");
    this.renderChipsList("bizTypeChipsTray", rtcfData.chips.businessType, "businessType");
    this.renderChipsList("strengthsChipsTray", rtcfData.chips.strengths, "strengths");
    this.renderChipsList("challengesChipsTray", rtcfData.chips.challenges, "challenges");
    this.renderChipsList("goalChipsTray", rtcfData.chips.goal, "goal");
    this.renderChipsList("formatChipsTray", rtcfData.chips.formatTone, "formatTone");

    // Framework Cards (Task Section)
    const frameworkContainer = document.getElementById("frameworkGridSelector");
    if (frameworkContainer) {
      frameworkContainer.innerHTML = rtcfData.frameworkCards.map(fc => {
        const isSelected = this.rtcfInputs.selectedModels.includes(fc.id);
        const activeClass = isSelected ? " selected" : "";
        const checkIcon = isSelected ? "✓" : "";
        return `
          <div class="framework-toggle-card${activeClass}" onclick="window.promptStudio.toggleFramework('${fc.id}')" data-fid="${fc.id}">
            <div class="framework-card-top">
              <div class="framework-icon-name">
                <span>${fc.icon}</span> ${fc.name}
              </div>
              <div class="check-indicator">${checkIcon}</div>
            </div>
            <div class="framework-card-desc">${fc.desc}</div>
          </div>
        `;
      }).join("");
    }

    // Update Input field values
    this.syncRtcfDomInputs();
  }

  renderChipsList(containerId, chipsArray, targetKey) {
    const container = document.getElementById(containerId);
    if (!container || !chipsArray) return;
    container.innerHTML = chipsArray.map(chipText => `
      <button class="chip-btn" onclick="window.promptStudio.fillRtcfChip('${targetKey}', '${chipText.replace(/'/g, "\\'")}')">
        + ${chipText}
      </button>
    `).join("");
  }

  syncRtcfDomInputs() {
    for (const [key, val] of Object.entries(this.rtcfInputs)) {
      if (key === "selectedModels") continue;
      const el = document.querySelector(`[data-rtcf="${key}"]`);
      if (el) el.value = val;
    }
  }

  fillRtcfChip(key, text) {
    this.rtcfInputs[key] = text;
    const el = document.querySelector(`[data-rtcf="${key}"]`);
    if (el) el.value = text;
    this.updateWizardLivePreview();
    this.showToast(this.currentLang === "th" ? "เติมข้อความเรียบร้อย!" : "Field filled from suggestion!");
  }

  handleRtcfInput(key, value) {
    this.rtcfInputs[key] = value;
    this.updateWizardLivePreview();
  }

  toggleFramework(frameworkId) {
    const idx = this.rtcfInputs.selectedModels.indexOf(frameworkId);
    if (idx > -1) {
      this.rtcfInputs.selectedModels.splice(idx, 1);
    } else {
      this.rtcfInputs.selectedModels.push(frameworkId);
    }

    // Update UI card classes
    const cards = document.querySelectorAll(".framework-toggle-card");
    cards.forEach(card => {
      const fid = card.getAttribute("data-fid");
      const isSel = this.rtcfInputs.selectedModels.includes(fid);
      if (isSel) {
        card.classList.add("selected");
        const ind = card.querySelector(".check-indicator");
        if (ind) ind.innerText = "✓";
      } else {
        card.classList.remove("selected");
        const ind = card.querySelector(".check-indicator");
        if (ind) ind.innerText = "";
      }
    });

    this.updateWizardLivePreview();
  }

  loadRtcfPreset(presetId) {
    const presets = AI_MBA_RTCF_DATA[this.currentLang].presets;
    const preset = presets.find(p => p.id === presetId);
    if (!preset) return;

    this.rtcfInputs = { ...preset.data };
    this.renderRtcfChipsAndFrameworks();
    this.updateWizardLivePreview();
    this.showToast(this.currentLang === "th" ? `โหลดสูตร: ${preset.name}` : `Loaded Preset: ${preset.name}`);
  }

  calculateRtcfProgress() {
    let filledCount = 0;
    const totalFields = 7; // role, userProf, bizType, strengths, challenges, goal, formatTone
    if (this.rtcfInputs.role) filledCount++;
    if (this.rtcfInputs.userProfession) filledCount++;
    if (this.rtcfInputs.businessType) filledCount++;
    if (this.rtcfInputs.strengths) filledCount++;
    if (this.rtcfInputs.challenges) filledCount++;
    if (this.rtcfInputs.goal) filledCount++;
    if (this.rtcfInputs.formatTone) filledCount++;

    const pct = Math.round((filledCount / totalFields) * 100);
    const fillBar = document.getElementById("rtcfProgressFill");
    const pctText = document.getElementById("rtcfProgressPct");
    if (fillBar) fillBar.style.width = `${pct}%`;
    if (pctText) pctText.innerText = `${pct}%`;
  }

  generateRtcfMegaPrompt() {
    const isTh = this.currentLang === "th";
    const inps = this.rtcfInputs;
    const models = inps.selectedModels;

    let modelDirectives = "";
    let stepNum = 1;

    if (isTh) {
      if (models.includes("swot")) {
        modelDirectives += `\n${stepNum++}. 📊 [SWOT & Competitor Deep-Dive Analysis]:
   - สร้างตาราง SWOT Matrix 4 ช่อง เจาะลึกจุดแข็งที่เลียนแบบยาก (Core Competency) จุดอ่อนคอขวด โอกาสเติบโต และอุปสรรคคู่แข่งที่ตัดราคาหรือเข้ามาแย่งตลาด พร้อมระบุผลกระทบเชิงตัวเลข`;
      }

      if (models.includes("tows")) {
        modelDirectives += `\n${stepNum++}. 🔄 [TOWS Action Strategy Matrix]:
   - จับคู่ปัจจัยสู่ 4 ยุทธศาสตร์ปฏิบัติการ: 1) SO Strategies (รุกฆาต), 2) WO Strategies (ปรับปรุงระบบ), 3) ST Strategies (ตั้งรับเชิงรุก), และ 4) WT Strategies (บริหารความเสี่ยงและ Cash Flow)`;
      }

      if (models.includes("bcg")) {
        modelDirectives += `\n${stepNum++}. ⭐ [BCG Growth-Share Matrix & Capital Allocation]:
   - จำแนกพอร์ตสินค้า/บริการออกเป็น Stars, Cash Cows, Question Marks, และ Dogs พร้อมกำหนดสัดส่วนการกระจายเงินทุน (%) และนำกระแสเงินสดมาสร้าง S-Curve ใหม่`;
      }

      if (models.includes("blue-ocean")) {
        modelDirectives += `\n${stepNum++}. 🌊 [Blue Ocean Strategy & ERRC Grid]:
   - ฉีกหนีสงครามราคา Red Ocean ด้วยตาราง ERRC:
     * Eliminate (ตัดทิ้ง): 3 สิ่งที่ทำตามๆ กันมาแต่สิ้นเปลืองต้นทุน
     * Reduce (ลดทอน): 3 สิ่งที่เกินความจำเป็น
     * Raise (ยกระดับ): 3 ปัจจัยที่ลูกค้าโหยหา
     * Create (สร้างใหม่): 3 นวัตกรรมคุณค่า 10x ที่ใช้ AI และเทคโนโลยี`;
      }

      if (models.includes("got")) {
        modelDirectives += `\n${stepNum++}. 🧠 [Graph of Thoughts (GoT) Strategic Verdict]:
   - ดำเนินการคิดแบบโครงข่ายกราฟ (Graph Reasoning):
     * แตกกิ่งความคิด 3 เส้นทางกลยุทธ์ (Path A: รุกเร็ว / Path B: มั่นคง / Path C: นอกกรอบ)
     * ผสานจุดแข็งข้ามเส้นทาง (Cross-Node Merging)
     * ให้คะแนนเกณฑ์ความคุ้มค่า (1-100 คะแนน)
     * ฟันธงมติการตัดสินใจที่ดีที่สุดเพียง 1 ทางเลือก พร้อม Action Plan สัปดาห์ที่ 1-12`;
      }

      if (models.includes("five-forces")) {
        modelDirectives += `\n${stepNum++}. 🥊 [Porter's Five Forces Scorecard]:
   - ประเมินคะแนนแรงกดดัน 5 ด้าน (คู่แข่งเดิม, ลูกค้า, ซัพพลายเออร์, ผู้เล่นใหม่, สินค้าทดแทน AI) พร้อม 3 ป้อมปราการทางธุรกิจ (Economic Moats)`;
      }

      return `[คำสั่ง Executive MBA Multi-Framework Strategic Master Prompt สำหรับ ${this.wizardAiTarget}]

🏛️ บทบาทของคุณ (ROLE):
${inps.role || "คุณคือประธานที่ปรึกษากลยุทธ์ธุรกิจและ Executive Coach สาย MBA ชั้นนำ"}

🏢 บริบทและข้อมูลธุรกิจของผม (CONTEXT):
- อาชีพและความเชี่ยวชาญของผม: ${inps.userProfession || "[ระบุอาชีพและความเชี่ยวชาญ]"}
- ประเภทธุรกิจและกลุ่มเป้าหมาย: ${inps.businessType || "[ระบุประเภทธุรกิจ]"}
- จุดเด่นและจุดแข็งในปัจจุบัน: ${inps.strengths || "[ระบุจุดเด่น]"}
- ความท้าทาย ปัญหา หรือคู่แข่งที่เผชิญ: ${inps.challenges || "[ระบุปัญหา/คู่แข่ง]"}
- เป้าหมายเชิงกลยุทธ์ (6-12 เดือน): ${inps.goal || "[ระบุเป้าหมาย]"}

🎯 ภารกิจและโมเดลธุรกิจที่ต้องวิเคราะห์แบบบูรณาการ (TASKS & FRAMEWORKS):
โปรดนำข้อมูลบริบทข้างต้นมาวิเคราะห์ผ่านกรอบโมเดลธุรกิจสากลต่อไปนี้อย่างเป็นระบบและเฉียบคม:${modelDirectives || "\n1. ทำการวิเคราะห์ภาพรวมกลยุทธ์ธุรกิจรอบด้าน"}

📋 รูปแบบผลลัพธ์และสไตล์การนำเสนอ (FORMAT & TONE):
- รูปแบบและภาษา: ${inps.formatTone || "ตารางสรุปข้อมูลแบบเข้าใจง่าย ภาษาทางการระดับ C-Suite พร้อม Action Plan"}
- ภาษาผลลัพธ์: ${inps.outputLanguage || "ภาษาไทย (เน้นตัวเลขและชื่อคู่แข่งที่เป็นรูปธรรม)"}
- ส่งมอบบทสรุปผู้บริหาร (Executive Summary) ความยาว 3 บรรทัดที่จุดเริ่มต้นของคำตอบ`;
    } else {
      // 100% Pure English Mega-Prompt Directives
      if (models.includes("swot")) {
        modelDirectives += `\n${stepNum++}. 📊 [SWOT & Competitor Deep-Dive Audit]:
   - Construct a rigorous 4-quadrant SWOT Matrix isolating defensible core competencies, operational bottlenecks, market expansion opportunities, and competitor price disruption threats with quantifiable financial impacts.`;
      }

      if (models.includes("tows")) {
        modelDirectives += `\n${stepNum++}. 🔄 [TOWS Action Strategy Matrix]:
   - Cross-match internal and external factors into 4 dynamic strategic action plays: 1) SO Strategies (Aggressive offensive), 2) WO Strategies (Systemic overhaul), 3) ST Strategies (Proactive defensive moats), and 4) WT Strategies (Crisis risk insulation & cash flow preservation).`;
      }

      if (models.includes("bcg")) {
        modelDirectives += `\n${stepNum++}. ⭐ [BCG Growth-Share Matrix & Capital Allocation]:
   - Categorize products and business units into Stars, Cash Cows, Question Marks, and Dogs; prescribe capital allocation percentages (%) and design a reinvestment engine from Cash Cows to next-generation AI Stars.`;
      }

      if (models.includes("blue-ocean")) {
        modelDirectives += `\n${stepNum++}. 🌊 [Blue Ocean Strategy & ERRC Grid]:
   - Escape commodity price wars through the ERRC Four Actions Framework:
     * Eliminate: 3 obsolete industry standard practices that drain margins
     * Reduce: 3 over-engineered cost drivers
     * Raise: 3 critical value propositions customers urgently crave
     * Create: 3 breakthrough 10x value innovations powered by AI & automation.`;
      }

      if (models.includes("got")) {
        modelDirectives += `\n${stepNum++}. 🧠 [Graph of Thoughts (GoT) Strategic Verdict]:
   - Execute non-linear graph-structured reasoning:
     * Generate 3 divergent strategic hypotheses (Path A: Aggressive Growth / Path B: Resilient Fortification / Path C: Disruptive Non-Traditional)
     * Perform cross-node merging to combine high-leverage advantages
     * Evaluate options via a multi-criteria scoring matrix (1-100 scale)
     * Deliver a single definitive consensus verdict accompanied by a week-by-week 90-day execution roadmap.`;
      }

      if (models.includes("five-forces")) {
        modelDirectives += `\n${stepNum++}. 🥊 [Porter's Five Forces Scorecard]:
   - Evaluate the 5 structural industry competitive pressures (Rivals, Buyers, Suppliers, New Entrants, AI Substitutes) and engineer 3 defensible economic moats.`;
      }

      return `[Executive MBA Multi-Framework Strategic Master Prompt for ${this.wizardAiTarget}]

🏛️ ROLE & SPECIALIZED PERSONA:
${inps.role || "You are an Elite MBA Strategy Chair and Senior Executive Leadership Partner."}

🏢 PROFESSIONAL & BUSINESS CONTEXT:
- Founder Background & Expertise: ${inps.userProfession || "[User Profession]"}
- Business Model & Target Market: ${inps.businessType || "[Business Model]"}
- Core Competencies & Current Moats: ${inps.strengths || "[Strengths]"}
- Primary Bottlenecks & Competitive Pressures: ${inps.challenges || "[Challenges & Competitors]"}
- 6-12 Month Strategic Ambition: ${inps.goal || "[Strategic Goal]"}

🎯 INTEGRATED STRATEGIC DIRECTIVES & FRAMEWORKS:
Execute an exhaustive multi-framework strategic audit incorporating the following selected methodologies:${modelDirectives || "\n1. Conduct comprehensive strategic business assessment"}

📋 DELIVERABLE FORMAT & TONE:
- Format & Executive Tone: ${inps.formatTone || "C-Suite executive tables with prioritized action roadmaps"}
- Output Language: ${inps.outputLanguage || "English"}
- Include a 3-bullet Executive Summary flash briefing at the very top.`;
    }
  }

  updateWizardLivePreview() {
    this.calculateRtcfProgress();
    const previewEl = document.getElementById("wizardLivePromptText");
    if (!previewEl) return;

    const megaPrompt = this.generateRtcfMegaPrompt();
    previewEl.innerText = megaPrompt;

    // Update Quick Launch Buttons
    const encoded = encodeURIComponent(megaPrompt);
    const gptBtn = document.getElementById("wLaunchChatGPT");
    if (gptBtn) gptBtn.href = `https://chatgpt.com/?q=${encoded}`;

    const claudeBtn = document.getElementById("wLaunchClaude");
    if (claudeBtn) claudeBtn.href = `https://claude.ai/new`;

    const geminiBtn = document.getElementById("wLaunchGemini");
    if (geminiBtn) geminiBtn.href = `https://gemini.google.com/app`;

    const perpBtn = document.getElementById("wLaunchPerplexity");
    if (perpBtn) perpBtn.href = `https://www.perplexity.ai/search?q=${encoded}`;
  }

  copyWizardPrompt() {
    const prompt = this.generateRtcfMegaPrompt();
    navigator.clipboard.writeText(prompt).then(() => {
      const t = AI_MBA_I18N[this.currentLang];
      this.showToast(t.btnCopied);
    }).catch(err => {
      console.error(err);
    });
  }

  exportWizardMarkdown() {
    const prompt = this.generateRtcfMegaPrompt();
    const blob = new Blob([`# AI MBA Master Mega-Prompt\n\nGenerated via AI MBA Prompt Engineering Lab (RTCF Studio)\nAuthors: Cheeptham Khamwiset & FastAI Team\n\n---\n\n${prompt}`], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AI-MBA-Mega-Prompt-${this.currentLang}.md`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast(this.currentLang === "th" ? "ดาวน์โหลดไฟล์ Markdown เรียบร้อย!" : "Exported .md successfully!");
  }

  // ==========================================
  // MODE 2: SINGLE FRAMEWORK DEEP-DIVE METHODS
  // ==========================================
  renderModelGrid() {
    const grid = document.getElementById("modelGrid");
    if (!grid) return;

    const t = AI_MBA_I18N[this.currentLang];
    const filtered = AI_MBA_MODELS.filter(m => {
      const matchCategory = this.currentCategory === "all" || m.category === this.currentCategory;
      const title = (m.title[this.currentLang] || m.title.en || "").toLowerCase();
      const subtitle = (m.subtitle[this.currentLang] || m.subtitle.en || "").toLowerCase();
      const school = (m.school || "").toLowerCase();
      const matchSearch = !this.searchQuery || title.includes(this.searchQuery) || subtitle.includes(this.searchQuery) || school.includes(this.searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>${this.currentLang === 'th' ? 'ไม่พบโมเดลธุรกิจที่ตรงกับคำค้นหา' : 'No frameworks match your search criteria'}</h3>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(m => {
      const title = m.title[this.currentLang] || m.title.en;
      const subtitle = m.subtitle[this.currentLang] || m.subtitle.en;

      return `
        <div class="model-card" data-id="${m.id}">
          <div class="model-card-header">
            <div class="model-badges">
              <span class="school-tag ${m.badge}">${m.school}</span>
              <span class="diff-badge">${m.difficulty}</span>
            </div>
            <h3 class="model-title">${title}</h3>
            <p class="model-subtitle">${subtitle}</p>
          </div>
          <div class="model-card-footer">
            <button class="btn-open-modal" onclick="window.promptStudio.openModelModal('${m.id}')">
              <span>⚡</span> ${t.btnOpenBuilder}
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  openModelModal(modelId) {
    const model = AI_MBA_MODELS.find(m => m.id === modelId);
    if (!model) return;

    this.activeModel = model;
    this.deepDiveInputs = {};

    if (model.examples && model.examples.length > 0) {
      this.deepDiveInputs = { ...model.examples[0].data };
    } else {
      model.fields.forEach(f => {
        this.deepDiveInputs[f.key] = "";
      });
    }

    const backdrop = document.getElementById("modalBackdrop");
    if (backdrop) {
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    this.renderModalContent();
  }

  closeModal() {
    const backdrop = document.getElementById("modalBackdrop");
    if (backdrop) {
      backdrop.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    this.activeModel = null;
  }

  renderModalContent() {
    if (!this.activeModel) return;
    const m = this.activeModel;
    const t = AI_MBA_I18N[this.currentLang];

    const modalTitle = document.getElementById("modalTitle");
    if (modalTitle) {
      modalTitle.innerHTML = `<span class="school-tag ${m.badge}" style="font-size:0.8rem; margin-right:0.5rem;">${m.school}</span> ${m.title[this.currentLang] || m.title.en}`;
    }

    const modalSub = document.getElementById("modalSubtitle");
    if (modalSub) modalSub.innerText = m.subtitle[this.currentLang] || m.subtitle.en;

    const eduWhatIs = document.getElementById("eduWhatIs");
    if (eduWhatIs) eduWhatIs.innerText = m.description.whatIs[this.currentLang] || m.description.whatIs.en;

    const eduHowTo = document.getElementById("eduHowTo");
    if (eduHowTo) eduHowTo.innerText = m.description.howToUse[this.currentLang] || m.description.howToUse.en;

    const eduCoach = document.getElementById("eduCoachInsight");
    if (eduCoach) eduCoach.innerText = m.description.coachingInsight[this.currentLang] || m.description.coachingInsight.en;

    const chapterRef = document.getElementById("eduChapterRef");
    if (chapterRef && m.bookChapterId) {
      const chTitle = m.bookChapterTitle ? (m.bookChapterTitle[this.currentLang] || m.bookChapterTitle.en) : "";
      chapterRef.innerHTML = `
        <div style="margin-top:0.85rem; padding: 0.6rem 0.85rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-size:0.85rem;">
          <strong>📖 ${this.currentLang === 'th' ? 'บทเรียนที่เกี่ยวข้อง' : 'Related Chapter'}:</strong> 
          <a href="index.html#${m.bookChapterId}" target="_blank" style="color: var(--wharton-navy); text-decoration: underline; font-weight:700; margin-left:0.35rem;">
            ${chTitle} ↗
          </a>
        </div>
      `;
    }

    const formContainer = document.getElementById("dynamicFormFields");
    if (formContainer) {
      formContainer.innerHTML = m.fields.map(f => {
        const label = f.label[this.currentLang] || f.label.en;
        const placeholder = f.placeholder[this.currentLang] || f.placeholder.en;
        const val = this.deepDiveInputs[f.key] || "";

        if (f.type === "textarea") {
          return `
            <div class="form-group">
              <label class="form-label">${label}</label>
              <textarea class="form-textarea" data-key="${f.key}" placeholder="${placeholder}" oninput="window.promptStudio.handleDeepDiveInput('${f.key}', this.value)">${val}</textarea>
            </div>
          `;
        } else {
          return `
            <div class="form-group">
              <label class="form-label">${label}</label>
              <input type="text" class="form-input" data-key="${f.key}" placeholder="${placeholder}" value="${val}" oninput="window.promptStudio.handleDeepDiveInput('${f.key}', this.value)">
            </div>
          `;
        }
      }).join("");
    }

    this.updateDeepDiveLivePromptPreview();
  }

  handleDeepDiveInput(key, val) {
    this.deepDiveInputs[key] = val;
    this.updateDeepDiveLivePromptPreview();
  }

  setAiTarget(target) {
    this.activeAiTarget = target;
    this.updateDeepDiveLivePromptPreview();
  }

  updateDeepDiveLivePromptPreview() {
    const previewEl = document.getElementById("livePromptText");
    if (!previewEl || !this.activeModel) return;

    const finalPrompt = this.activeModel.promptTemplate(this.deepDiveInputs, this.activeAiTarget, this.currentLang);
    previewEl.innerText = finalPrompt;

    const encoded = encodeURIComponent(finalPrompt);
    const gptBtn = document.getElementById("launchChatGPT");
    if (gptBtn) gptBtn.href = `https://chatgpt.com/?q=${encoded}`;

    const claudeBtn = document.getElementById("launchClaude");
    if (claudeBtn) claudeBtn.href = `https://claude.ai/new`;

    const geminiBtn = document.getElementById("launchGemini");
    if (geminiBtn) geminiBtn.href = `https://gemini.google.com/app`;

    const perpBtn = document.getElementById("launchPerplexity");
    if (perpBtn) perpBtn.href = `https://www.perplexity.ai/search?q=${encoded}`;
  }

  copyPrompt() {
    if (!this.activeModel) return;
    const finalPrompt = this.activeModel.promptTemplate(this.deepDiveInputs, this.activeAiTarget, this.currentLang);
    navigator.clipboard.writeText(finalPrompt).then(() => {
      const t = AI_MBA_I18N[this.currentLang];
      this.showToast(t.btnCopied);
    });
  }

  exportMarkdown() {
    if (!this.activeModel) return;
    const finalPrompt = this.activeModel.promptTemplate(this.deepDiveInputs, this.activeAiTarget, this.currentLang);
    const title = this.activeModel.title[this.currentLang] || this.activeModel.title.en;
    const blob = new Blob([`# ${title}\n\nGenerated via AI MBA Prompt Engineering Lab\nAuthor: Cheeptham Khamwiset & FastAI Team\n\n---\n\n${finalPrompt}`], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AI-MBA-${this.activeModel.id}-${this.currentLang}.md`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast(this.currentLang === "th" ? "ดาวน์โหลดไฟล์ Markdown เรียบร้อย!" : "Exported .md successfully!");
  }

  showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✨</span> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s";
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}

// Global bootstrap
document.addEventListener("DOMContentLoaded", () => {
  window.promptStudio = new AiMbaPromptStudio();
});
