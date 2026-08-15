/**
 * AI MBA Handbook - Prompt Engine
 * Handles AI model tab switching, prompt formatting, and 1-click clipboard copy
 */

import { AI_MODELS, PROMPTS_DATABASE } from './data/prompts.js';

export class PromptEngine {
  constructor() {
    this.activeModel = 'gemini';
    this.initGlobalCopyListener();
  }

  renderPromptCard(moduleId) {
    const promptData = PROMPTS_DATABASE[moduleId];
    if (!promptData) return '';

    const currentModelObj = AI_MODELS.find(m => m.id === this.activeModel) || AI_MODELS[0];
    const promptText = promptData.variations[this.activeModel] || promptData.variations['gemini'];

    const tabsHtml = AI_MODELS.map(model => `
      <button 
        type="button" 
        class="ai-tab-btn ${model.id === this.activeModel ? 'active' : ''}" 
        data-model="${model.id}"
        data-module="${moduleId}"
        title="${model.name}">
        <span>${model.icon}</span> ${model.name}
      </button>
    `).join('');

    return `
      <div class="prompt-card" id="prompt-card-${moduleId}" data-module="${moduleId}">
        <div class="prompt-card-header">
          <div class="prompt-title-group">
            <span class="prompt-tag-badge">AI MEGA-PROMPT</span>
            <span class="prompt-title-text">${promptData.baseTitle}</span>
          </div>
          <div class="ai-platform-tabs">
            ${tabsHtml}
          </div>
        </div>
        <div class="prompt-content-box">
          <pre class="prompt-code-display" id="prompt-display-${moduleId}">${this.escapeHtml(promptText)}</pre>
        </div>
        <div class="prompt-actions-bar">
          <span class="prompt-model-note">${currentModelObj.icon} ${currentModelObj.note}</span>
          <button type="button" class="btn-copy-prompt" data-copy-target="prompt-display-${moduleId}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>คัดลอก Prompt สำหรับ ${currentModelObj.name}</span>
          </button>
        </div>
      </div>
    `;
  }

  attachCardEvents(container) {
    container.querySelectorAll('.ai-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modelId = btn.getAttribute('data-model');
        const moduleId = btn.getAttribute('data-module');
        this.switchModel(modelId, moduleId, container);
      });
    });
  }

  switchModel(modelId, moduleId, container) {
    this.activeModel = modelId;
    
    // Update active tab styles across cards or specifically for this module
    container.querySelectorAll(`.prompt-card[data-module="${moduleId}"] .ai-tab-btn`).forEach(b => {
      if (b.getAttribute('data-model') === modelId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // Update text
    const displayEl = container.querySelector(`#prompt-display-${moduleId}`);
    const promptData = PROMPTS_DATABASE[moduleId];
    const currentModelObj = AI_MODELS.find(m => m.id === modelId) || AI_MODELS[0];

    if (displayEl && promptData) {
      const newText = promptData.variations[modelId] || promptData.variations['gemini'];
      displayEl.textContent = newText;
    }

    // Update note & button text
    const cardEl = container.querySelector(`#prompt-card-${moduleId}`);
    if (cardEl) {
      const noteEl = cardEl.querySelector('.prompt-model-note');
      if (noteEl) noteEl.innerHTML = `${currentModelObj.icon} ${currentModelObj.note}`;
      const btnSpan = cardEl.querySelector('.btn-copy-prompt span');
      if (btnSpan) btnSpan.textContent = `คัดลอก Prompt สำหรับ ${currentModelObj.name}`;
    }
  }

  initGlobalCopyListener() {
    document.addEventListener('click', async (e) => {
      const copyBtn = e.target.closest('.btn-copy-prompt');
      if (!copyBtn) return;

      const targetId = copyBtn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const textToCopy = targetEl.textContent;
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.showCopyFeedback(copyBtn);
        this.showToast('✅ คัดลอก Prompt ไปยัง Clipboard เรียบร้อย! สามารถนำไปวางใน AI ได้ทันที');
      } catch (err) {
        // Fallback for clipboard
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        this.showCopyFeedback(copyBtn);
        this.showToast('✅ คัดลอก Prompt สำเร็จ!');
      }
    });
  }

  showCopyFeedback(btn) {
    const originalHtml = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>คัดลอกเรียบร้อย!</span>
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalHtml;
    }, 2000);
  }

  showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
