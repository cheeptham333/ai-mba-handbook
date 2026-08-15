/**
 * AI MBA Handbook - Interactive Business Case Simulator & Prompt Builder
 * Allows users to input real business parameters and generate bespoke MBA prompts
 */

export class MBASimulator {
  constructor(promptEngine) {
    this.promptEngine = promptEngine;
  }

  renderSimulatorSection(moduleId, moduleTitle) {
    return `
      <div class="simulator-workspace-card" id="sim-workspace-${moduleId}">
        <div class="sim-header">
          <div class="sim-icon">⚡</div>
          <div>
            <h3>MBA Interactive Case Simulator: ปรับแต่ง Prompt ด้วยข้อมูลจริง</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">
              กรอกข้อมูลธุรกิจของคุณด้านล่าง เพื่อสร้างชุดคำสั่งผู้บริหารระดับ C-Level ที่วิเคราะห์เคสของคุณโดยตรง
            </p>
          </div>
        </div>

        <form class="sim-form" data-module="${moduleId}" onsubmit="return false;">
          <div class="sim-form-grid">
            <div class="form-group">
              <label for="sim-biz-name-${moduleId}">ชื่อธุรกิจ หรือ ผลิตภัณฑ์ / บริการ</label>
              <input type="text" id="sim-biz-name-${moduleId}" placeholder="เช่น บริษัท กาแฟพิเศษไทย จำกัด, SaaS HR Tech" required>
            </div>
            <div class="form-group">
              <label for="sim-biz-type-${moduleId}">โมเดลธุรกิจหลัก</label>
              <select id="sim-biz-type-${moduleId}">
                <option value="B2B (Business to Business)">B2B (ขายให้องค์กร / ธุรกิจ)</option>
                <option value="B2C (Business to Consumer)">B2C (ขายให้ลูกค้ารายย่อยทั่วไป)</option>
                <option value="D2C / E-Commerce">D2C / ร้านค้าออนไลน์</option>
                <option value="Subscription / SaaS">Subscription / รายเดือน / แพลตฟอร์ม</option>
                <option value="Marketplace & Platform">Marketplace หรือ แพลตฟอร์มตัวกลาง</option>
                <option value="Traditional Retail & Service">ค้าปลีกและบริการหน้าร้าน</option>
              </select>
            </div>
            <div class="form-group" style="grid-column: span 2;">
              <label for="sim-biz-problem-${moduleId}">ความท้าทายหลัก หรือ ปัญหาที่ต้องการให้ AI ช่วยตัดสินใจ</label>
              <textarea id="sim-biz-problem-${moduleId}" rows="2" placeholder="เช่น ยอดขายทรงตัว ต้องการลดต้นทุนการตลาด 30% แต่รักษาการเติบโต, ลูกค้าใหม่มี Churn Rate สูงในเดือนแรก, ต้องการขยายสู่ตลาดต่างประเทศ"></textarea>
            </div>
            <div class="form-group">
              <label for="sim-target-school-${moduleId}">เลือกกรอบคิดสถาบันที่ต้องการนำมาวิเคราะห์</label>
              <select id="sim-target-school-${moduleId}">
                <option value="HBS (Harvard Business School) - Case Study & Competitive Advantage">HBS - Five Forces, Moat & Strategic Leadership</option>
                <option value="Wharton School - Corporate Finance & Valuation Analysis">Wharton - Unit Economics, DCF & Financial Health</option>
                <option value="MIT Sloan - Operations, System Dynamics & Bottlenecks">MIT Sloan - Process Automation & Supply Chain Optimization</option>
                <option value="Stanford GSB - Disruption, Growth Loops & Innovation">Stanford GSB - Blue Ocean, Product-Led Growth & AEO</option>
              </select>
            </div>
            <div class="form-group">
              <label for="sim-ai-target-${moduleId}">เลือกโมเดล AI ปลายทางที่จะนำไปวาง</label>
              <select id="sim-ai-target-${moduleId}">
                <option value="Gemini 2.0 / NotebookLM">Gemini 2.0 / Google NotebookLM</option>
                <option value="Claude 3.7 Sonnet">Claude 3.7 Sonnet (Deep Reasoning)</option>
                <option value="ChatGPT 4o">ChatGPT-4o / SearchGPT</option>
                <option value="Grok 3">Grok 3 (Brutal Reality Check)</option>
                <option value="Perplexity AI">Perplexity AI (Market Research)</option>
                <option value="Microsoft Copilot">Microsoft Copilot (Word/Excel Report)</option>
              </select>
            </div>
          </div>

          <button type="button" class="btn-download-hero btn-generate-sim" data-module="${moduleId}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
            <span>สร้าง Executive Master-Prompt ส่วนตัว</span>
          </button>
        </form>

        <div class="sim-output-box" id="sim-output-box-${moduleId}" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <strong style="font-size: 0.95rem; color: var(--wharton-navy);">✨ Prompt ที่สร้างเสร็จสมบูรณ์ พร้อมคัดลอก:</strong>
            <button type="button" class="btn-copy-prompt" data-copy-target="sim-generated-text-${moduleId}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>คัดลอกทันที</span>
            </button>
          </div>
          <pre class="prompt-code-display" id="sim-generated-text-${moduleId}"></pre>
        </div>
      </div>
    `;
  }

  attachSimulatorEvents(container) {
    container.querySelectorAll('.btn-generate-sim').forEach(btn => {
      btn.addEventListener('click', () => {
        const moduleId = btn.getAttribute('data-module');
        this.generateCustomPrompt(moduleId, container);
      });
    });
  }

  generateCustomPrompt(moduleId, container) {
    const bizName = container.querySelector(`#sim-biz-name-${moduleId}`)?.value.trim() || 'บริษัทของฉัน';
    const bizType = container.querySelector(`#sim-biz-type-${moduleId}`)?.value || 'B2B';
    const bizProblem = container.querySelector(`#sim-biz-problem-${moduleId}`)?.value.trim() || 'ต้องการเพิ่มประสิทธิภาพการทำกำไรและปรับปรุงการบริหารงานด้วย AI';
    const targetSchool = container.querySelector(`#sim-target-school-${moduleId}`)?.value || 'HBS';
    const aiTarget = container.querySelector(`#sim-ai-target-${moduleId}`)?.value || 'Claude 3.7';

    const generatedPrompt = `[คำสั่ง C-Level Executive Advisor สำหรับ ${aiTarget}]

บทบาทของคุณ: คุณคือประธานที่ปรึกษากลยุทธ์และศาสตราจารย์ MBA ผู้เชี่ยวชาญด้าน ${targetSchool}
ผมต้องการให้คุณเป็นคู่คิดทางธุรกิจ (Executive Co-Strategist) เพื่อวิเคราะห์และวางแผนแก้ปัญหาให้ธุรกิจของผมอย่างจริงจัง

ข้อมูลบริบทธุรกิจ (Business Context):
- ชื่อธุรกิจ / สินค้า: ${bizName}
- โมเดลธุรกิจ: ${bizType}
- โจทย์สำคัญ / ความท้าทายที่ต้องแก้ไข: ${bizProblem}

คำสั่งปฏิบัติการ (Action Steps):
1. วิเคราะห์สถานการณ์ปัจจุบัน (Diagnostic Phase): ชี้จุดแข็ง จุดอ่อน และระบุคอขวดที่ซ่อนอยู่โดยใช้กรอบคิดจาก ${targetSchool}
2. แผนกลยุทธ์ 3 ขั้นตอน (Strategic Roadmap):
   - Phase 1 (Quick Wins ใน 14 วัน): สิ่งที่ทำได้ทันทีเพื่อหยุดการรั่วไหลหรือเพิ่มผลผลิต
   - Phase 2 (Optimization ใน 90 วัน): การนำ Generative AI และ Automation มาปรับกระบวนการทำงาน
   - Phase 3 (Sustainable Moats ใน 1-2 ปี): การสร้างความได้เปรียบที่คู่แข่งเลียนแบบไม่ได้
3. การคำนวณและตัวชี้วัด (Financial & Operational Metrics): ระบุ KPI สำคัญ 3 ตัวที่ผมในฐานะผู้นำต้องตรวจทุกสัปดาห์
4. ข้อควรระวัง (Blind Spots & Red Flags): 2 สิ่งที่ห้ามทำโดยเด็ดขาดในสถานการณ์นี้

โปรดตอบอย่างกระชับ เจาะจง ไม่อ้อมค้อม พร้อมตารางสรุป Action Plan ที่ชัดเจน`;

    const outputBox = container.querySelector(`#sim-output-box-${moduleId}`);
    const outputText = container.querySelector(`#sim-generated-text-${moduleId}`);

    if (outputBox && outputText) {
      outputText.textContent = generatedPrompt;
      outputBox.style.display = 'block';
      outputBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      this.promptEngine.showToast('🚀 สร้าง Master-Prompt ปรับแต่งเฉพาะธุรกิจของคุณเรียบร้อย!');
    }
  }
}
