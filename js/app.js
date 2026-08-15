/**
 * AI MBA Handbook - Main Application Entrypoint
 * Authors: Cheeptham Khamwiset & Codex
 */

import { MBA_CURRICULUM } from './data/curriculum.js';
import { PromptEngine } from './prompt-engine.js';
import { MBASimulator } from './simulator.js';

class AIMBAApp {
  constructor() {
    this.promptEngine = new PromptEngine();
    this.simulator = new MBASimulator(this.promptEngine);
    this.currentTheme = localStorage.getItem('ai-mba-theme') || 'light';
    this.fontSizeLevel = localStorage.getItem('ai-mba-fontsize') || 'md';
    
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyFontSize(this.fontSizeLevel);
    this.renderSidebarNav();
    this.renderAllModules();
    this.initEventListeners();
    this.initReadingProgress();
    this.initFAQAccordion();
  }

  renderSidebarNav() {
    const navList = document.getElementById('module-nav-list');
    if (!navList) return;

    navList.innerHTML = MBA_CURRICULUM.map((mod, idx) => `
      <li>
        <button type="button" class="nav-item-btn ${idx === 0 ? 'active' : ''}" data-target="${mod.id}">
          <span>${mod.num}. ${mod.titleTh}</span>
          <span class="nav-item-num">${mod.school.split(' ')[0]}</span>
        </button>
      </li>
    `).join('');
  }

  renderAllModules() {
    const container = document.getElementById('modules-container');
    if (!container) return;

    container.innerHTML = MBA_CURRICULUM.map(mod => {
      // Sections
      const sectionsHtml = mod.sections.map(sec => `
        <div class="content-subsection" style="margin-bottom: 1.75rem;">
          <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--text-primary);">${sec.heading}</h3>
          <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; white-space: pre-line;">${sec.content}</div>
        </div>
      `).join('');

      // Framework Cheatsheets
      const frameworksHtml = mod.frameworks.map(fw => `
        <div class="framework-card">
          <h4>
            <span>${fw.name}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </h4>
          <p>${fw.description}</p>
          <div class="framework-pill-list">
            ${fw.tags.map(t => `<span class="framework-pill">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');

      // Prompt Card
      const promptCardHtml = this.promptEngine.renderPromptCard(mod.id);

      // Simulator Section
      const simulatorHtml = this.simulator.renderSimulatorSection(mod.id, mod.titleTh);

      return `
        <article class="chapter-article" id="${mod.id}">
          <div class="chapter-meta-bar">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="badge-school ${mod.schoolBadge}">${mod.school}</span>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">MODULE ${mod.num}</span>
            </div>
            <button type="button" class="btn-icon btn-share-chapter" data-chapter="${mod.id}" title="คัดลอกลิงก์บทนี้">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </button>
          </div>

          <h2 class="chapter-title">${mod.titleTh}</h2>
          <p style="font-size: 1.05rem; color: var(--text-muted); font-weight: 500; margin-bottom: 1.25rem;">${mod.title}</p>

          <!-- Direct Answer for AEO & Quick Summary -->
          <div class="direct-answer-aeo-box">
            <div class="direct-answer-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              DIRECT EXECUTIVE SUMMARY (AEO ANSWER)
            </div>
            <div class="direct-answer-text">${mod.directAnswer}</div>
          </div>

          <!-- Main Text Sections -->
          <div class="chapter-body-text">
            ${sectionsHtml}
          </div>

          <!-- Key MBA Frameworks -->
          <div style="margin: 2rem 0 1rem;">
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem;">📚 เฟรมเวิร์กสำคัญประจำโมดูล (${mod.school})</h3>
            <div class="frameworks-grid">
              ${frameworksHtml}
            </div>
          </div>

          <!-- Interactive Multi-AI Prompt Selector -->
          ${promptCardHtml}

          <!-- Business Case Simulator -->
          ${simulatorHtml}

          <!-- Practical Action Challenge -->
          <div style="background: var(--bg-subtle); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--hbs-crimson); margin-top: 1.5rem;">
            <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--text-primary);">🎯 แบบฝึกหัดท้าทายประจำบท (Executive Challenge)</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.3rem;"><strong>${mod.exercise.title}</strong></p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${mod.exercise.instructions}</p>
          </div>
        </article>
      `;
    }).join('');

    // Attach dynamic events to newly rendered cards
    this.promptEngine.attachCardEvents(container);
    this.simulator.attachSimulatorEvents(container);
  }

  initEventListeners() {
    // Navigation item click
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.querySelectorAll('.nav-item-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });

    // Theme toggle button
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('ai-mba-theme', this.currentTheme);
      });
    }

    // Font size buttons
    const fontIncBtn = document.getElementById('btn-font-increase');
    const fontDecBtn = document.getElementById('btn-font-decrease');
    const sizes = ['sm', 'md', 'lg', 'xl'];

    if (fontIncBtn) {
      fontIncBtn.addEventListener('click', () => {
        const currentIndex = sizes.indexOf(this.fontSizeLevel);
        if (currentIndex < sizes.length - 1) {
          this.fontSizeLevel = sizes[currentIndex + 1];
          this.applyFontSize(this.fontSizeLevel);
          localStorage.setItem('ai-mba-fontsize', this.fontSizeLevel);
        }
      });
    }

    if (fontDecBtn) {
      fontDecBtn.addEventListener('click', () => {
        const currentIndex = sizes.indexOf(this.fontSizeLevel);
        if (currentIndex > 0) {
          this.fontSizeLevel = sizes[currentIndex - 1];
          this.applyFontSize(this.fontSizeLevel);
          localStorage.setItem('ai-mba-fontsize', this.fontSizeLevel);
        }
      });
    }

    // Live Instant Search
    const searchInput = document.getElementById('sidebar-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterContent(query);
      });
    }

    // NotebookLM Knowledge Base Export Button
    const notebookExportBtn = document.getElementById('btn-export-notebooklm');
    if (notebookExportBtn) {
      notebookExportBtn.addEventListener('click', () => {
        this.exportNotebookLMSources();
      });
    }

    // Share chapter link
    document.addEventListener('click', (e) => {
      const shareBtn = e.target.closest('.btn-share-chapter');
      if (!shareBtn) return;
      const chapterId = shareBtn.getAttribute('data-chapter');
      const url = `${window.location.origin}${window.location.pathname}#${chapterId}`;
      navigator.clipboard.writeText(url);
      this.promptEngine.showToast('🔗 คัดลอกลิงก์ตรงสำหรับบทนี้เรียบร้อย!');
    });
  }

  filterContent(query) {
    const articles = document.querySelectorAll('.chapter-article');
    const navItems = document.querySelectorAll('.nav-item-btn');

    articles.forEach((art, idx) => {
      const text = art.textContent.toLowerCase();
      const match = text.includes(query);
      art.style.display = match ? 'block' : 'none';
      if (navItems[idx]) {
        navItems[idx].parentElement.style.display = match ? 'block' : 'none';
      }
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.title = theme === 'dark' ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด';
    }
  }

  applyFontSize(size) {
    document.body.classList.remove('font-sm', 'font-md', 'font-lg', 'font-xl');
    document.body.classList.add(`font-${size}`);
  }

  initReadingProgress() {
    const progressFill = document.getElementById('reading-progress-fill');
    if (!progressFill) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressFill.style.width = scrolled + '%';

      // Update active nav item based on scroll position
      const articles = document.querySelectorAll('.chapter-article');
      articles.forEach(art => {
        const rect = art.getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 180) {
          const id = art.getAttribute('id');
          document.querySelectorAll('.nav-item-btn').forEach(btn => {
            if (btn.getAttribute('data-target') === id) {
              btn.classList.add('active');
            } else {
              btn.classList.remove('active');
            }
          });
        }
      });
    });
  }

  initFAQAccordion() {
    document.addEventListener('click', (e) => {
      const faqBtn = e.target.closest('.faq-question-btn');
      if (!faqBtn) return;
      const item = faqBtn.closest('.faq-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  }

  exportNotebookLMSources() {
    let markdownContent = `# AI MBA Handbook - Knowledge Base Source for Google NotebookLM\n`;
    markdownContent += `เขียนและเรียบเรียงโดย: ชีพธรรม คำวิเศษณ์ ร่วมกับ Codex\n\n`;
    markdownContent += `เอกสารนี้สรุปเนื้อหา 7 โมดูล MBA สากล (HBS, MIT, Stanford, Wharton) เพื่อใช้เป็น Grounded Source สำหรับสร้าง AI Audio Overview และ Podcast ใน NotebookLM\n\n`;
    markdownContent += `---\n\n`;

    MBA_CURRICULUM.forEach(mod => {
      markdownContent += `## Module ${mod.num}: ${mod.titleTh} (${mod.title})\n`;
      markdownContent += `สถาบันอ้างอิง: ${mod.school}\n`;
      markdownContent += `Executive Summary: ${mod.directAnswer}\n\n`;
      mod.sections.forEach(sec => {
        markdownContent += `### ${sec.heading}\n${sec.content}\n\n`;
      });
      markdownContent += `---\n\n`;
    });

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'AI-MBA-NotebookLM-Sources.md';
    link.click();
    this.promptEngine.showToast('📥 ดาวน์โหลดไฟล์ Markdown สำหรับ NotebookLM เรียบร้อย!');
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new AIMBAApp();
});
