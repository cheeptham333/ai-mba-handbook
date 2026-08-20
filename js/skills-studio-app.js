/**
 * AI MBA Co-Intelligence & Skill Studio — Main Application Controller
 * Co-Authored: Cheeptham Khamwiset (ชีพธรรม คำวิเศษณ์) & FastAI Team
 * Supports: agentskills.io (SKILL.md standard), Gemini Gems, OpenAI Custom GPTs, Google Spark
 */

(function () {
  'use strict';

  // State Management
  const state = {
    activeTab: 'wizard', // 'wizard', 'comparison', 'diagnostic', 'library', 'guides'
    activePlatformFormat: 'claude', // 'claude', 'gemini', 'gpt', 'spark'
    activeRole: 'coworker', // 'coach', 'coworker', 'innovator', 'extender'
    activePresetId: 'strategy_consultant',
    formData: {
      skillName: '',
      skillSlug: '',
      category: 'General MBA Strategy',
      author: 'Cheeptham Khamwiset & FastAI Team',
      context: '',
      objective: '',
      workflow: '',
      guardrails: '',
      tone: 'Executive, Rigorous, Direct & Decisive',
      starters: []
    },
    diagnosticAnswers: {
      q1: null,
      q2: null,
      q3: null
    },
    theme: localStorage.getItem('aimba_theme') || 'light'
  };

  // DOM Element References
  let elements = {};

  function initElements() {
    elements = {
      // Theme & Nav
      themeToggleBtn: document.getElementById('themeToggleBtn'),
      langToggleBtn: document.getElementById('langToggleBtn'),
      tabBtns: document.querySelectorAll('.tab-btn'),
      tabSections: document.querySelectorAll('.tab-section'),

      // Wizard Inputs
      presetChipsContainer: document.getElementById('presetChipsContainer'),
      roleCardSelectors: document.querySelectorAll('.role-card-select'),
      inputSkillName: document.getElementById('inputSkillName'),
      inputSkillSlug: document.getElementById('inputSkillSlug'),
      inputCategory: document.getElementById('inputCategory'),
      inputContext: document.getElementById('inputContext'),
      inputObjective: document.getElementById('inputObjective'),
      inputWorkflow: document.getElementById('inputWorkflow'),
      inputGuardrails: document.getElementById('inputGuardrails'),
      inputTone: document.getElementById('inputTone'),
      inputStarters: document.getElementById('inputStarters'),

      // Realtime Quality Score
      qualityScoreBadge: document.getElementById('qualityScoreBadge'),
      qualityBarFill: document.getElementById('qualityBarFill'),
      qualityFeedbackText: document.getElementById('qualityFeedbackText'),

      // Previewer & Exporter
      formatTabBtns: document.querySelectorAll('.format-tab-btn'),
      codePreviewOutput: document.getElementById('codePreviewOutput'),
      btnCopyOutput: document.getElementById('btnCopyOutput'),
      btnDownloadMd: document.getElementById('btnDownloadMd'),
      btnDownloadAll: document.getElementById('btnDownloadAll'),
      toastNotice: document.getElementById('toastNotice'),
      toastNoticeText: document.getElementById('toastNoticeText'),

      // Quiz Elements
      quizForm: document.getElementById('quizForm'),
      quizResultCard: document.getElementById('quizResultCard'),
      quizResultTitle: document.getElementById('quizResultTitle'),
      quizResultDesc: document.getElementById('quizResultDesc'),
      quizResultBadge: document.getElementById('quizResultBadge'),

      // Library
      libraryGrid: document.getElementById('libraryGrid')
    };
  }

  // Set Theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aimba_theme', theme);
    state.theme = theme;
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  // Tab Switching
  function switchTab(tabId) {
    state.activeTab = tabId;
    elements.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    elements.tabSections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `tab-${tabId}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Load Preset into Wizard Form
  function loadPreset(presetId) {
    const preset = SKILL_STUDIO_DATA.businessPresets.find(p => p.id === presetId);
    if (!preset) return;

    state.activePresetId = presetId;
    state.activeRole = preset.role;
    state.formData = {
      skillName: preset.nameTh,
      skillSlug: preset.id.replace(/_/g, '-'),
      category: preset.category,
      author: 'ชีพธรรม คำวิเศษณ์ & FastAI Team',
      context: preset.context,
      objective: preset.objective,
      workflow: preset.workflow,
      guardrails: preset.guardrails,
      tone: preset.tone,
      starters: preset.starters || []
    };

    // Update Input Fields
    if (elements.inputSkillName) elements.inputSkillName.value = state.formData.skillName;
    if (elements.inputSkillSlug) elements.inputSkillSlug.value = state.formData.skillSlug;
    if (elements.inputCategory) elements.inputCategory.value = state.formData.category;
    if (elements.inputContext) elements.inputContext.value = state.formData.context;
    if (elements.inputObjective) elements.inputObjective.value = state.formData.objective;
    if (elements.inputWorkflow) elements.inputWorkflow.value = state.formData.workflow;
    if (elements.inputGuardrails) elements.inputGuardrails.value = state.formData.guardrails;
    if (elements.inputTone) elements.inputTone.value = state.formData.tone;
    if (elements.inputStarters) elements.inputStarters.value = state.formData.starters.join('\n');

    // Update Role UI
    elements.roleCardSelectors.forEach(card => {
      card.classList.toggle('selected', card.dataset.role === preset.role);
    });

    // Update Preset Chips UI
    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.presetId === presetId);
    });

    updateRealtimeOutputs();
  }

  // Read Form Data from DOM
  function syncFormDataFromInputs() {
    state.formData.skillName = elements.inputSkillName ? elements.inputSkillName.value.trim() : '';
    state.formData.skillSlug = elements.inputSkillSlug ? elements.inputSkillSlug.value.trim() : '';
    state.formData.category = elements.inputCategory ? elements.inputCategory.value.trim() : '';
    state.formData.context = elements.inputContext ? elements.inputContext.value.trim() : '';
    state.formData.objective = elements.inputObjective ? elements.inputObjective.value.trim() : '';
    state.formData.workflow = elements.inputWorkflow ? elements.inputWorkflow.value.trim() : '';
    state.formData.guardrails = elements.inputGuardrails ? elements.inputGuardrails.value.trim() : '';
    state.formData.tone = elements.inputTone ? elements.inputTone.value.trim() : '';
    
    if (elements.inputStarters) {
      state.formData.starters = elements.inputStarters.value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    }
  }

  // Calculate Quality Score
  function calculateQualityScore() {
    let score = 0;
    const tips = [];

    if (state.formData.skillName.length >= 5) score += 15;
    else tips.push('เพิ่มชื่อ Skill ให้ชัดเจน');

    if (state.formData.context.length >= 20) score += 20;
    else tips.push('ระบุบริบทธุรกิจ (Context) ให้ละเอียดขึ้น');

    if (state.formData.objective.length >= 20) score += 20;
    else tips.push('ระบุเป้าหมาย (Objective) ให้ชัดเจน');

    if (state.formData.workflow.length >= 30) score += 25;
    else tips.push('เพิ่มขั้นตอนการทำงาน Step-by-Step');

    if (state.formData.guardrails.length >= 20) score += 20;
    else tips.push('ระบุกฎเหล็กและข้อห้าม (Guardrails)');

    return { score, tips };
  }

  // Generate Output for Each Platform Format
  function generateFormattedText(format) {
    const roleObj = SKILL_STUDIO_DATA.coIntelligenceRoles.find(r => r.id === state.activeRole) || SKILL_STUDIO_DATA.coIntelligenceRoles[1];
    const name = state.formData.skillName || 'AI MBA Executive Assistant';
    const slug = state.formData.skillSlug || 'ai-mba-assistant';
    const category = state.formData.category || 'Executive Management';
    const author = state.formData.author || 'Cheeptham Khamwiset & FastAI Team';
    const context = state.formData.context || 'Enterprise Business Context';
    const objective = state.formData.objective || 'Provide elite MBA-level strategic advice and rigorous execution.';
    const workflow = state.formData.workflow || '1. Analyze business situation.\n2. Apply strategic frameworks.\n3. Formulate decisive recommendations.';
    const guardrails = state.formData.guardrails || '- Avoid vague generalities.\n- Provide concrete business rationale and data points.\n- Strictly adhere to executive boardroom tone.';
    const tone = state.formData.tone || 'Executive, Rigorous, Direct & Decisive';
    const starters = state.formData.starters.length > 0 ? state.formData.starters : [
      'ช่วยวิเคราะห์กลยุทธ์ตามกรอบ TOWS Matrix',
      'ช่วยประเมินความคุ้มค่าโครงการและการเงิน',
      'ช่วยร่าง 1-Page Executive Memo สำหรับบอร์ดบริหาร'
    ];

    if (format === 'claude') {
      // Agent Skills Standard (agentskills.io) SKILL.md format
      return `---
name: ${slug}
description: ${name} (${category}) - Co-Intelligence AI Assistant designed for executive decision making and strategic rigor.
version: 1.0.0
author: ${author}
tags:
  - mba
  - strategy
  - co-intelligence
  - ${roleObj.id}
---

# ${name}

> Grounded in Ethan Mollick's *Co-Intelligence* Framework (${roleObj.titleTh})
> Developed by Cheeptham Khamwiset (ชีพธรรม คำวิเศษณ์) & FastAI Team

## 1. Role & Operational Persona
${roleObj.promptModifier}

**Tone & Voice**: ${tone}

## 2. Business Context & Strategic Mission
**Context**:
${context}

**Primary Objective**:
${objective}

## 3. Step-by-Step Execution Workflow
${workflow}

## 4. Critical Guardrails & Governance
${guardrails}

## 5. Output Standards
- Use structured Markdown with bold headers, bullet points, and executive comparison tables.
- Keep executive summaries concise, placing core recommendations at the top (Pyramid Principle).
- Quantify assumptions and business impact wherever feasible.
`;
    } else if (format === 'gemini') {
      // Gemini Gem System Prompt Format
      return `[GEM SYSTEM INSTRUCTIONS: ${name.toUpperCase()}]

You are ${name}, an elite AI Business Specialist designed for C-Suite executives and MBA leaders.
Role Mode: ${roleObj.titleTh} (${roleObj.descriptionTh})

[STRATEGIC CONTEXT]
${context}

[MISSION & CORE OBJECTIVE]
${objective}

[EXECUTION WORKFLOW]
Follow these steps systematically in every response:
${workflow}

[CRITICAL GOVERNANCE & GUARDRAILS]
${guardrails}

[TONE & COMMUNICATION STYLE]
${tone}
- Emphasize clarity, strategic depth, and actionable insights.
- Provide executive tables and bullet points for high readability.
- When referencing live data or Google Workspace documents, verify key figures.
`;
    } else if (format === 'gpt') {
      // OpenAI Custom GPT Configuration Format
      return `[CUSTOM GPT CONFIGURATION]

Name: ${name}
Description: ${roleObj.titleTh} - ${category}. พัฒนาโดย ชีพธรรม คำวิเศษณ์ & FastAI

--- INSTRUCTIONS ---
You are ${name}, operating as a ${roleObj.titleTh} based on Ethan Mollick's Co-Intelligence principles.

### BUSINESS CONTEXT:
${context}

### OBJECTIVE:
${objective}

### STEP-BY-STEP WORKFLOW:
${workflow}

### RULES & GUARDRAILS:
${guardrails}

### TONE & FORMAT:
${tone}
Structure all answers with clear headings, bulleted action items, and executive summaries.

--- CONVERSATION STARTERS ---
${starters.map(s => `• ${s}`).join('\n')}
`;
    } else if (format === 'spark') {
      // Google Spark / Universal Agent Skill JSON-compatible Markdown
      return `# Google Spark AI Agent Skill Spec: ${slug}

\`\`\`json
{
  "skill_id": "${slug}",
  "display_name": "${name}",
  "category": "${category}",
  "role_paradigm": "${roleObj.id}",
  "version": "1.0.0",
  "author": "${author}",
  "compatibility": ["claude-code", "gemini-spark", "antigravity", "openai-gpt"],
  "triggers": ${JSON.stringify(starters)}
}
\`\`\`

## System Instructions
${roleObj.promptModifier}

### Business Context:
${context}

### Execution Workflow:
${workflow}

### Guardrails:
${guardrails}
`;
    }

    return '';
  }

  // Update Preview & Quality Bar
  function updateRealtimeOutputs() {
    syncFormDataFromInputs();

    // Quality Score
    const { score, tips } = calculateQualityScore();
    if (elements.qualityScoreBadge) elements.qualityScoreBadge.textContent = `${score}%`;
    if (elements.qualityBarFill) elements.qualityBarFill.style.width = `${score}%`;
    if (elements.qualityFeedbackText) {
      if (score === 100) {
        elements.qualityFeedbackText.textContent = '✨ ยอดเยี่ยม! สเปก Skill สมบูรณ์แบบ พร้อมนำไปติดตั้ง';
        elements.qualityFeedbackText.style.color = '#10B981';
      } else {
        elements.qualityFeedbackText.textContent = `คำแนะนำ: ${tips.join(' • ')}`;
        elements.qualityFeedbackText.style.color = 'var(--text-muted)';
      }
    }

    // Update Output Preview
    const outputText = generateFormattedText(state.activePlatformFormat);
    if (elements.codePreviewOutput) {
      elements.codePreviewOutput.textContent = outputText;
    }
  }

  // Show Toast Notice
  function showToast(message) {
    if (!elements.toastNotice) return;
    if (elements.toastNoticeText) elements.toastNoticeText.textContent = message;
    elements.toastNotice.classList.add('show');
    setTimeout(() => {
      elements.toastNotice.classList.remove('show');
    }, 3000);
  }

  // Copy to Clipboard
  function copyPreviewOutput() {
    const text = elements.codePreviewOutput ? elements.codePreviewOutput.textContent : '';
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      showToast('📋 คัดลอก System Prompt / Skill เรียบร้อยแล้ว!');
    }).catch(() => {
      showToast('⚠️ ไม่สามารถคัดลอกได้อัตโนมัติ กรุณาคัดลอกด้วยตนเอง');
    });
  }

  // Download SKILL.md file
  function downloadSkillMarkdown() {
    const markdownContent = generateFormattedText('claude');
    const slug = state.formData.skillSlug || 'ai-mba-skill';
    const filename = `${slug}.skill.md`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`📥 ดาวน์โหลดไฟล์ ${filename} สำเร็จ!`);
  }

  // Download All Bundle
  function downloadAllBundle() {
    const claudeText = generateFormattedText('claude');
    const geminiText = generateFormattedText('gemini');
    const gptText = generateFormattedText('gpt');
    const sparkText = generateFormattedText('spark');

    const fullPackage = `# AI MBA Co-Intelligence Skill Package
Author: ชีพธรรม คำวิเศษณ์ & FastAI Team
Grounded in: Ethan Mollick's Co-Intelligence & Agent Skills Standard (agentskills.io)

================================================================================
FILE 1: SKILL.md (Claude Code / Agent Skills Standard)
================================================================================
${claudeText}

================================================================================
FILE 2: GEMINI_GEM_INSTRUCTIONS.txt (Google Gemini Gem)
================================================================================
${geminiText}

================================================================================
FILE 3: CUSTOM_GPT_INSTRUCTIONS.txt (OpenAI Custom GPT)
================================================================================
${gptText}

================================================================================
FILE 4: GOOGLE_SPARK_SKILL.md (Google Spark AI)
================================================================================
${sparkText}
`;

    const slug = state.formData.skillSlug || 'ai-mba-skill';
    const filename = `${slug}-complete-suite.txt`;

    const blob = new Blob([fullPackage], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`📦 ดาวน์โหลดชุดแพ็กเกจ ${filename} สำเร็จ!`);
  }

  // Render Preset Chips in Wizard
  function renderPresetChips() {
    if (!elements.presetChipsContainer) return;
    elements.presetChipsContainer.innerHTML = SKILL_STUDIO_DATA.businessPresets.map(preset => `
      <button class="preset-chip ${preset.id === state.activePresetId ? 'active' : ''}" data-preset-id="${preset.id}">
        <span>${preset.icon}</span>
        <span>${preset.nameTh}</span>
      </button>
    `).join('');

    elements.presetChipsContainer.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.presetId;
        loadPreset(id);
      });
    });
  }

  // Render Library Grid
  function renderLibraryGrid() {
    if (!elements.libraryGrid) return;
    elements.libraryGrid.innerHTML = SKILL_STUDIO_DATA.businessPresets.map(preset => `
      <div class="library-card">
        <div>
          <div class="library-card-header">
            <span class="library-card-icon">${preset.icon}</span>
            <div>
              <h3 class="library-card-name">${preset.nameTh}</h3>
              <div class="library-card-category">${preset.category} • ${preset.badge}</div>
            </div>
          </div>
          <p class="library-card-summary">${preset.summaryTh}</p>
        </div>
        <div class="library-card-actions">
          <button class="btn-lib-load" data-load-id="${preset.id}">⚡ โหลดเข้า Studio</button>
          <button class="btn-lib-md" data-md-id="${preset.id}">📥 .md</button>
        </div>
      </div>
    `).join('');

    elements.libraryGrid.querySelectorAll('.btn-lib-load').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.loadId;
        loadPreset(id);
        switchTab('wizard');
        showToast(`⚡ โหลดแม่แบบ ${id} เข้าสตูดิโอเรียบร้อย`);
      });
    });

    elements.libraryGrid.querySelectorAll('.btn-lib-md').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.mdId;
        loadPreset(id);
        downloadSkillMarkdown();
      });
    });
  }

  // Diagnostic Quiz Engine
  function initDiagnosticQuiz() {
    const quizForm = document.getElementById('quizForm');
    if (!quizForm) return;

    quizForm.addEventListener('change', () => {
      const q1Val = quizForm.querySelector('input[name="q1"]:checked')?.value;
      const q2Val = quizForm.querySelector('input[name="q2"]:checked')?.value;
      const q3Val = quizForm.querySelector('input[name="q3"]:checked')?.value;

      if (q1Val && q2Val && q3Val) {
        evaluateQuizResults(q1Val, q2Val, q3Val);
      }
    });
  }

  function evaluateQuizResults(q1Val, q2Val, q3Val) {
    const scores = { claude: 0, gemini: 0, gpt: 0, spark: 0 };

    [
      { q: SKILL_STUDIO_DATA.diagnosticQuestions[0], val: q1Val },
      { q: SKILL_STUDIO_DATA.diagnosticQuestions[1], val: q2Val },
      { q: SKILL_STUDIO_DATA.diagnosticQuestions[2], val: q3Val }
    ].forEach(({ q, val }) => {
      const opt = q.options.find(o => o.id === val);
      if (opt && opt.weight) {
        scores.claude += opt.weight.claude || 0;
        scores.gemini += opt.weight.gemini || 0;
        scores.gpt += opt.weight.gpt || 0;
        scores.spark += opt.weight.spark || 0;
      }
    });

    let topPlatform = 'claude';
    let maxScore = -1;
    Object.keys(scores).forEach(p => {
      if (scores[p] > maxScore) {
        maxScore = scores[p];
        topPlatform = p;
      }
    });

    const recommendations = {
      claude: {
        badge: '🟣 แนะนำสูงสุด: Claude Skill (Anthropic / agentskills.io)',
        title: 'โจทย์ของคุณเหมาะกับ Claude Skill และมาตรฐาน SKILL.md ที่สุด',
        desc: 'งานของคุณต้องการการคิดวิเคราะห์เชิงลึก (Deep Strategic Reasoning) ตรรกะขั้นสูง และการเขียนภาษาที่เป็นธรรมชาติสูงสุด การสร้างเป็นไฟล์ SKILL.md จะช่วยให้คุณนำไปใช้งานกับ Claude Projects และ Agent Tools ได้อย่างมีประสิทธิภาพสูงสุด'
      },
      gemini: {
        badge: '🔵 แนะนำสูงสุด: Gemini Gem (Google AI / Workspace)',
        title: 'โจทย์ของคุณเหมาะกับ Gemini Gem และ Google Workspace ที่สุด',
        desc: 'งานของคุณเน้นการจัดการเอกสารจำนวนมากหลายร้อยหน้า งบการเงิน หรือการดึงข้อมูลสดผ่าน Google Search Grounding และ Google Drive ความจุ Context 1M-2M tokens ของ Gemini จะตอบโจทย์นี้ได้ไร้คู่แข่ง'
      },
      gpt: {
        badge: '🟢 แนะนำสูงสุด: Custom GPT (OpenAI / My GPTs)',
        title: 'โจทย์ของคุณเหมาะกับ Custom GPT และ ChatGPT Store ที่สุด',
        desc: 'งานของคุณต้องการความสะดวกในการแชร์ให้ทีมในองค์กรใช้งาน มีระบบสนทนาโต้ตอบที่ยืดหยุ่น การคำนวณและวาดกราฟิก หรือการเชื่อมต่อกับระบบ API หลังบ้านผ่าน Actions'
      },
      spark: {
        badge: '✨ แนะนำสูงสุด: Google Spark & Cross-Platform Agent Skill',
        title: 'โจทย์ของคุณเหมาะกับ Agent Skills มาตรฐานเปิด (agentskills.io) ที่สุด',
        desc: 'องค์กรของคุณต้องการสร้าง AI Skill กลางที่พกพาไปรันได้ทุกค่าย (Vendor-Agnostic) และเชื่อมต่อการทำงานอัตโนมัติหลายเอเจนต์ร่วมกันอย่างเป็นระบบ'
      }
    };

    const res = recommendations[topPlatform];
    if (elements.quizResultCard) {
      elements.quizResultCard.style.display = 'block';
      if (elements.quizResultBadge) elements.quizResultBadge.textContent = res.badge;
      if (elements.quizResultTitle) elements.quizResultTitle.textContent = res.title;
      if (elements.quizResultDesc) elements.quizResultDesc.textContent = res.desc;
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Theme & Navigation
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }

    elements.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Format Tab Switcher in Preview Panel
    elements.formatTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.activePlatformFormat = btn.dataset.format;
        elements.formatTabBtns.forEach(b => b.classList.toggle('active', b === btn));
        updateRealtimeOutputs();
      });
    });

    // Role Card Selectors
    elements.roleCardSelectors.forEach(card => {
      card.addEventListener('click', () => {
        state.activeRole = card.dataset.role;
        elements.roleCardSelectors.forEach(c => c.classList.toggle('selected', c === card));
        updateRealtimeOutputs();
      });
    });

    // Input Listeners
    const inputs = [
      elements.inputSkillName,
      elements.inputSkillSlug,
      elements.inputCategory,
      elements.inputContext,
      elements.inputObjective,
      elements.inputWorkflow,
      elements.inputGuardrails,
      elements.inputTone,
      elements.inputStarters
    ];

    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', updateRealtimeOutputs);
      }
    });

    // Export Buttons
    if (elements.btnCopyOutput) elements.btnCopyOutput.addEventListener('click', copyPreviewOutput);
    if (elements.btnDownloadMd) elements.btnDownloadMd.addEventListener('click', downloadSkillMarkdown);
    if (elements.btnDownloadAll) elements.btnDownloadAll.addEventListener('click', downloadAllBundle);
  }

  // Initialization
  function init() {
    initElements();
    applyTheme(state.theme);
    renderPresetChips();
    renderLibraryGrid();
    initDiagnosticQuiz();
    setupEventListeners();
    loadPreset('strategy_consultant');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
