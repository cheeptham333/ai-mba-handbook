import json, html

with open('book_data.json', 'r', encoding='utf-8') as f:
    chapters = json.load(f)

# Define parts
parts = [
    {"num": 1, "title": "ส่วนที่ 1: ปฐมบท — สี่สถาบัน ความจริง และเครื่องมือชิ้นแรก", "range": "บทที่ 1 - 3", "icon": "🏛️"},
    {"num": 2, "title": "ส่วนที่ 2: ผ่าตัดใหญ่สี่สถาบัน — เมื่อ AI นั่งโต๊ะสัมมนา", "range": "บทที่ 4 - 7", "icon": "🎓"},
    {"num": 3, "title": "ส่วนที่ 3: ชำแหละเครื่องมือคลาสสิก 8 ชิ้น — ตัวไหนตาย ตัวไหนรอด ตัวไหนต้องอัปเกรด", "range": "บทที่ 8 - 15", "icon": "⚙️"},
    {"num": 4, "title": "ส่วนที่ 4: ปรากฏการณ์ใหม่ที่ไม่มีในตำราเดิม", "range": "บทที่ 16 - 19", "icon": "⚡"},
    {"num": 5, "title": "ส่วนที่ 5: ลงมือทำ — คู่มือปฏิบัติการสำหรับผู้บริหารไทย", "range": "บทที่ 20 - 22", "icon": "🚀"}
]

# Build curriculum.js
curr_js = f"""/**
 * AI MBA Handbook - Full 22 Chapters Dataset
 * Authors: Cheeptham Khamwiset & Codex
 * CI: Harvard Business School, MIT Sloan, Stanford GSB, Wharton
 */

export const BOOK_PARTS = {json.dumps(parts, ensure_ascii=False, indent=2)};

export const BOOK_CHAPTERS = {json.dumps(chapters, ensure_ascii=False, indent=2)};
"""

with open('js/data/curriculum.js', 'w', encoding='utf-8') as f:
    f.write(curr_js)

print("Generated js/data/curriculum.js!")

# Generate HTML Sidebar
sidebar_html = '<div class="sidebar-parts-list">\n'
for p in parts:
    p_num = p['num']
    p_chaps = [c for c in chapters if c['part'] == p_num]
    sidebar_html += f'''  <div class="sidebar-part-group">
    <div class="sidebar-part-header">
      <span class="part-icon">{p['icon']}</span>
      <span class="part-title-text">{p['title']}</span>
    </div>
    <ul class="sidebar-chapter-list">
'''
    for ch in p_chaps:
        active_class = " active" if ch['num'] == 1 else ""
        sidebar_html += f'''      <li class="sidebar-item">
        <a href="#chap-{ch['num']}" class="sidebar-link{active_class}" data-chapter="chap-{ch['num']}">
          <span class="chap-num-badge">{ch['num']:02d}</span>
          <span class="chap-link-title">{ch['title']}</span>
        </a>
      </li>
'''
    sidebar_html += '    </ul>\n  </div>\n'
sidebar_html += '</div>\n'

# AI Platforms dictionary
ai_platforms = [
    {"id": "gemini", "name": "Gemini", "icon": "✨"},
    {"id": "notebooklm", "name": "NotebookLM", "icon": "📓"},
    {"id": "claude", "name": "Claude", "icon": "🧠"},
    {"id": "grok", "name": "Grok", "icon": "⚡"},
    {"id": "copilot", "name": "Copilot", "icon": "💼"},
    {"id": "perplexity", "name": "Perplexity", "icon": "🔍"},
    {"id": "chatgpt", "name": "ChatGPT", "icon": "🟢"}
]

# Generate Chapter Articles HTML
chapters_html = ""
for idx, ch in enumerate(chapters):
    prev_chap = chapters[idx - 1] if idx > 0 else None
    next_chap = chapters[idx + 1] if idx < len(chapters) - 1 else None
    
    # Format content with paragraphs
    paragraphs = ch['content'].split('\n\n')
    formatted_content = ""
    for p in paragraphs:
        p_text = p.strip()
        if p_text.startswith('- **') or p_text.startswith('1. **') or p_text.startswith('2. **') or p_text.startswith('3. **'):
            formatted_content += f'<div class="content-list-item">{p_text}</div>\n'
        else:
            formatted_content += f'<p>{p_text}</p>\n'

    # AI Tab buttons
    ai_buttons_html = ""
    for p_idx, platform in enumerate(ai_platforms):
        btn_active = " active" if p_idx == 0 else ""
        ai_buttons_html += f'<button type="button" class="ai-tab-btn{btn_active}" data-target="chap-{ch["num"]}" data-ai="{platform["name"]}"><span class="ai-btn-icon">{platform["icon"]}</span><span>{platform["name"]}</span></button>\n'

    # Theme Tags
    tags_html = "".join([f'<span class="theme-pill">#{t}</span>' for t in ch['keyThemes']])

    # Step navigation
    prev_btn_html = f'<a href="#chap-{prev_chap["num"]}" class="btn-step-nav btn-step-prev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> <span>บทที่ {prev_chap["num"]:02d}: {prev_chap["title"][:22]}...</span></a>' if prev_chap else '<div class="step-nav-placeholder"></div>'
    next_btn_html = f'<a href="#chap-{next_chap["num"]}" class="btn-step-nav btn-step-next"><span>บทที่ {next_chap["num"]:02d}: {next_chap["title"][:22]}...</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></a>' if next_chap else '<div class="step-nav-placeholder"></div>'

    default_prompt_text = ch['prompt'].replace('{AI_TARGET}', 'Google Gemini')

    chapters_html += f'''
        <!-- Chapter {ch['num']:02d}: {ch['title']} -->
        <article class="chapter-article" id="chap-{ch['num']}">
          
          <div class="chapter-header-card">
            <div class="chapter-meta-top">
              <span class="part-indicator-badge">{ch['partTitle'].split('—')[0].strip()}</span>
              <span class="badge-school {ch['badge']}">{ch['school']}</span>
              <span class="reading-time-pill">⏱️ 5 นาที</span>
            </div>
            <h2 class="chapter-title">
              <span class="chapter-number-prefix">บทที่ {ch['num']:02d}</span>
              {ch['title']}
            </h2>
            <div class="chapter-summary-callout">
              <div class="summary-icon">💡</div>
              <div class="summary-text-box">
                <strong>แก่นความคิดหลัก (Executive Takeaway):</strong>
                <p>{ch['summary']}</p>
              </div>
            </div>
          </div>

          <div class="chapter-body-content">
            {formatted_content}
          </div>

          <div class="chapter-themes-row">
            <span class="themes-label">หัวข้อสำคัญ:</span>
            <div class="themes-tags-list">
              {tags_html}
            </div>
          </div>

          <!-- AI Mega-Prompt Section -->
          <div class="prompt-engine-container">
            <div class="prompt-engine-header">
              <div class="prompt-title-group">
                <div class="prompt-badge-icon">⚡</div>
                <div>
                  <h4>AI Mega-Prompt ประจำบทที่ {ch['num']:02d}</h4>
                  <p class="prompt-subtitle">สลับแพลตฟอร์ม AI แล้วกดคัดลอกไปวางเพื่อใช้งานได้ทันที</p>
                </div>
              </div>
            </div>

            <div class="ai-tabs-toolbar">
              <div class="ai-tabs-scroll">
                {ai_buttons_html}
              </div>
            </div>

            <div class="prompt-content-box">
              <div class="prompt-box-topbar">
                <span class="prompt-target-indicator" id="target-label-chap-{ch['num']}">เป้าหมาย: <strong>Google Gemini</strong></span>
                <button type="button" class="btn-copy-prompt" data-target="prompt-code-chap-{ch['num']}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>คัดลอกคำสั่ง (1-Click Copy)</span>
                </button>
              </div>
              <pre class="prompt-code-display"><code id="prompt-code-chap-{ch['num']}">{html.escape(default_prompt_text)}</code></pre>
            </div>
          </div>

          <!-- Chapter Exercise Challenge -->
          <div class="exercise-challenge-box">
            <div class="exercise-header">
              <span class="exercise-icon">🎯</span>
              <h4>แบบฝึกหัดลงมือทำจริงประจำบทที่ {ch['num']:02d} (Mobile & iPad Challenge)</h4>
            </div>
            <p class="exercise-desc">{ch['exercise']}</p>
          </div>

          <!-- Share Chapter Bar -->
          <div class="chapter-share-bar">
            <div class="share-label">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              <span>แชร์บทเรียนที่ {ch['num']:02d}:</span>
            </div>
            <div class="share-buttons-list">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://aimba.cheeptham.com/%23chap-{ch['num']}" target="_blank" rel="noopener" class="btn-share-item share-fb" title="แชร์ลง Facebook">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span>Facebook</span>
              </a>
              <a href="https://social-plugins.line.me/lineit/share?url=https://aimba.cheeptham.com/%23chap-{ch['num']}" target="_blank" rel="noopener" class="btn-share-item share-line" title="แชร์ทาง LINE">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.034 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.646 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.574-3.844 2.574-5.991z"/></svg>
                <span>LINE</span>
              </a>
              <a href="https://twitter.com/intent/tweet?text=บทที่+{ch['num']:02d}:+{ch['title']}+-+AI+MBA+Handbook&url=https://aimba.cheeptham.com/%23chap-{ch['num']}" target="_blank" rel="noopener" class="btn-share-item share-x" title="แชร์ลง X">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>X</span>
              </a>
              <button type="button" class="btn-share-item share-copy" data-anchor="chap-{ch['num']}" title="คัดลอกลิงก์บทเรียนนี้">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                <span>คัดลอกลิงก์</span>
              </button>
            </div>
          </div>

          <!-- Step-by-Step Navigation -->
          <nav class="chapter-step-nav" aria-label="การนำทางบทเรียน">
            {prev_btn_html}
            <a href="#table-of-contents" class="btn-step-nav btn-step-toc">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              <span>สารบัญ</span>
            </a>
            {next_btn_html}
          </nav>

        </article>
'''

# Read index.html template and inject
with open('index.html', 'r', encoding='utf-8') as f:
    old_html = f.read()

# Read all CSS files to embed directly inline for 100% guaranteed rendering on Vercel/GitHub
with open('css/main.css', 'r', encoding='utf-8') as f:
    main_css = f.read()
with open('css/reader.css', 'r', encoding='utf-8') as f:
    reader_css = f.read()
with open('css/components.css', 'r', encoding='utf-8') as f:
    components_css = f.read()

all_css_content = main_css + "\n" + reader_css + "\n" + components_css

# Build full index.html
new_html_content = f'''<!DOCTYPE html>
<html lang="th" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  
  <!-- SEO Primary Meta Tags -->
  <title>AI MBA Handbook | คู่มือเรียน MBA ระดับโลกด้วยตนเองผ่าน Generative AI — ชีพธรรม คำวิเศษณ์ & Codex</title>
  <meta name="title" content="AI MBA Handbook | คู่มือเรียน MBA ระดับโลกด้วยตนเองผ่าน Generative AI — ชีพธรรม คำวิเศษณ์ & Codex">
  <meta name="description" content="คู่มือเรียนรู้ MBA ระดับโลกด้วยตนเอง 5 ส่วน 22 บท ผ่านพลัง Generative AI (Gemini, NotebookLM, Claude, Grok, Copilot, Perplexity, ChatGPT) ผสานองค์ความรู้และ Corporate Identity จาก 4 สถาบันชั้นนำ: HBS, MIT Sloan, Stanford GSB, Wharton เขียนและเรียบเรียงโดย ชีพธรรม คำวิเศษณ์ ร่วมกับ Codex">
  <meta name="keywords" content="AI MBA, เรียน MBA ด้วยตนเอง, ชีพธรรม คำวิเศษณ์, Codex AI, HBS, Harvard Business School, MIT Sloan, Stanford GSB, Wharton, AI Prompts, Gemini, Claude, Grok, NotebookLM, ChatGPT, Copilot, Perplexity, Prompt Engineering สำหรับผู้บริหาร, 22 บทเรียน MBA">
  <meta name="author" content="ชีพธรรม คำวิเศษณ์ (Cheeptham Khamwiset) & Codex">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="https://aimba.cheeptham.com/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://aimba.cheeptham.com/">
  <meta property="og:title" content="AI MBA Handbook | คู่มือเรียน MBA ระดับโลกด้วยตนเองผ่าน Generative AI">
  <meta property="og:description" content="คู่มือ 5 ส่วน 22 บท สู่ระดับ C-Suite ด้วยหลักสูตร MBA สากล (HBS, MIT, Stanford, Wharton) พร้อมสูตร Mega-Prompts 1-Click Copy สำหรับ Gemini, Claude, Grok, NotebookLM, Perplexity, Copilot, ChatGPT">
  <meta property="og:image" content="AI MBA.png">
  <meta property="og:locale" content="th_TH">
  <meta property="og:site_name" content="AI MBA Handbook">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://aimba.cheeptham.com/">
  <meta property="twitter:title" content="AI MBA Handbook | คู่มือเรียน MBA ระดับโลกด้วยตนเองผ่าน Generative AI">
  <meta property="twitter:description" content="เรียน MBA สากล 22 บท ด้วยตนเองผ่าน AI Prompt Engineering จากสถาบันชั้นนำระดับโลก โดย ชีพธรรม คำวิเศษณ์ ร่วมกับ Codex">
  <meta property="twitter:image" content="AI MBA.png">

  <!-- Schema.org JSON-LD Structured Data for SEO & AEO -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "Book",
        "@id": "https://aimba.cheeptham.com/#book",
        "name": "AI MBA: เมื่อโลกธุรกิจถูก AI เขียนใหม่",
        "alternateName": "Codex AI MBA Handbook (Thai Edition)",
        "isbn": "978-616-000-000-0",
        "inLanguage": "th-TH",
        "numberOfPages": 132,
        "datePublished": "2026-03-01",
        "image": "https://aimba.cheeptham.com/AI%20MBA.png",
        "author": [
          {{
            "@type": "Person",
            "name": "ชีพธรรม คำวิเศษณ์",
            "jobTitle": "ผู้ก่อตั้ง Tri AI Consulting | โค้ชชิ่ง AI",
            "sameAs": [
              "https://www.facebook.com/cheeptham333",
              "https://www.youtube.com/trimemory",
              "https://x.com/tri333"
            ]
          }},
          {{
            "@type": "Organization",
            "name": "Codex"
          }}
        ],
        "description": "หนังสือและเว็บแอปพลิเคชันเพื่อการศึกษา MBA ด้วยตนเอง 5 ส่วน 22 บทเรียน ถอดรหัส Corporate Identity ของ Harvard, MIT, Stanford และ Wharton พร้อมชุดคำสั่ง Mega-Prompts เจาะจงสำหรับโมเดล AI ชั้นนำ"
      }}
    ]
  }}
  </script>

  <!-- Google Fonts: Inter & Sarabun for High Legibility -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Embedded Bundled CSS (100% Guaranteed Load on Vercel, GitHub Pages & Offline) -->
  <style>
  {all_css_content}
  </style>

  <!-- Fallback External Stylesheets -->
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/reader.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>

  <!-- Top Sticky Progress Bar -->
  <div class="reading-progress-track" aria-hidden="true">
    <div class="reading-progress-bar" id="reading-progress-bar"></div>
  </div>

  <!-- Header Navigation -->
  <header class="site-header" id="site-header">
    <div class="container header-container">
      
      <div class="header-brand-group">
        <a href="#" class="brand-logo-link">
          <div class="brand-crest">
            <span class="crest-text">AI</span>
          </div>
          <div class="brand-titles">
            <span class="brand-main-title">AI MBA HANDBOOK</span>
            <span class="brand-sub-title">ชีพธรรม คำวิเศษณ์ & Codex</span>
          </div>
        </a>

        <!-- Ivy League & Elite CI School Badges -->
        <div class="header-school-badges" aria-label="Corporate Identity Reference Institutions">
          <span class="badge-school badge-hbs" title="Harvard Business School CI">HBS</span>
          <span class="badge-school badge-mit" title="MIT Sloan School of Management CI">MIT</span>
          <span class="badge-school badge-stanford" title="Stanford Graduate School of Business CI">Stanford</span>
          <span class="badge-school badge-wharton" title="The Wharton School of the University of Pennsylvania CI">Wharton</span>
        </div>
      </div>

      <!-- Quick Action Controls & Social Links -->
      <div class="header-controls">
        
        <!-- Author Social Links (Top Right) -->
        <div class="header-social-links" aria-label="ช่องทางติดต่อ อาจารย์ชีพธรรม คำวิเศษณ์">
          <a href="https://www.facebook.com/cheeptham333" target="_blank" rel="noopener" class="btn-social-icon btn-social-fb" title="Facebook: ชีพธรรม คำวิเศษณ์">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.youtube.com/trimemory" target="_blank" rel="noopener" class="btn-social-icon btn-social-yt" title="YouTube: ชีพธรรม คำวิเศษณ์ (230,000+ ผู้ติดตาม)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://x.com/tri333" target="_blank" rel="noopener" class="btn-social-icon btn-social-x" title="X (Twitter): @tri333">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        <div class="header-divider"></div>

        <!-- Direct PDF Download Button -->
        <a href="Codex-AI-MBA-Handbook-TH.pdf" download class="btn-nav-download" title="ดาวน์โหลด E-Book ฉบับเต็ม (PDF 132 หน้า)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>ดาวน์โหลด PDF</span>
        </a>

        <!-- Font Resizer -->
        <div class="control-group font-resizer" aria-label="ปรับขนาดตัวอักษร">
          <button type="button" class="btn-control-icon" id="btn-font-dec" title="ลดขนาดตัวอักษร" aria-label="ลดขนาดตัวอักษร">A-</button>
          <button type="button" class="btn-control-icon" id="btn-font-inc" title="เพิ่มขนาดตัวอักษร" aria-label="เพิ่มขนาดตัวอักษร">A+</button>
        </div>

        <!-- Dark / Light Theme Toggle -->
        <button type="button" class="btn-control-icon theme-toggle-btn" id="btn-theme-toggle" title="สลับธีม สว่าง/มืด" aria-label="สลับโหมดการแสดงผล">
          <svg class="sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>

    </div>
  </header>

  <!-- Hero Section & 3D Book Showcase (Dual Version Evolution) -->
  <section class="hero-section">
    <div class="container hero-container">
      <div class="hero-grid">
        
        <!-- Left: Dual Book Showcase (V1 & V2 Evolution) -->
        <div class="hero-book-showcase">
          
          <div class="evolution-header-badge">
            <span>✨ วิวัฒนาการ 17 ปี จากตำนานเล่มแรก สู่เวอร์ชัน 2.0 ยุค AI ✨</span>
          </div>

          <div class="dual-books-row">
            
            <!-- Book V1.0 (2552) -->
            <div class="book-card-item book-v1">
              <div class="book-edition-badge badge-v1">Version 1.0 (พ.ศ. 2552)</div>
              <div class="book-mini-3d">
                <img src="Free-HBS-MBA-v1.png" alt="ปกหนังสือ เรียน MBA ฟรี... ที่ฮาร์วาร์ด??? (2552) โดย ชีพธรรม คำวิเศษณ์" class="book-cover-img img-v1" loading="eager">
              </div>
              <div class="book-edition-caption">
                <strong>เรียน MBA ฟรี... ที่ฮาร์วาร์ด???</strong>
                <span>ปฐมบทตำนานการเรียนรู้ด้วยตนเอง</span>
                <a href="https://www.slideshare.net/slideshow/mba-2764368/2764368" target="_blank" rel="noopener" class="btn-v1-archive-link" title="เปิดดูสไลด์และเนื้อหา Version 1.0 บน SlideShare">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>ดูสไลด์ Version 1 (SlideShare)</span>
                </a>
              </div>
            </div>

            <!-- Evolution Arrow Icon -->
            <div class="evolution-arrow-connector">
              <div class="arrow-circle">➔</div>
              <span class="evolution-pill">พัฒนาสู่</span>
            </div>

            <!-- Book V2.0 (2569 - New Flagship) -->
            <div class="book-card-item book-v2 active-edition">
              <div class="book-edition-badge badge-v2">Version 2.0 (พ.ศ. 2569 — ฉบับล่าสุด)</div>
              <div class="book-mini-3d">
                <img src="AI MBA.png" alt="ปกหนังสือ AI MBA: เมื่อโลกธุรกิจถูก AI เขียนใหม่ โดย ชีพธรรม คำวิเศษณ์ & Codex" class="book-cover-img img-v2" loading="eager">
              </div>
              <div class="book-edition-caption">
                <strong>AI MBA: เมื่อโลกธุรกิจถูก AI เขียนใหม่</strong>
                <span>5 ส่วน 22 บทเรียน + Mega-Prompts</span>
              </div>
            </div>

          </div>

          <div class="book-download-action">
            <a href="Codex-AI-MBA-Handbook-TH.pdf" download class="btn-hero-download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>ดาวน์โหลด E-Book Version 2 (PDF 132 หน้า)</span>
            </a>
            
            <div class="archive-footer-row">
              <a href="https://www.slideshare.net/slideshow/mba-2764368/2764368" target="_blank" rel="noopener" class="link-archive-slideshare">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>เปิดดูสไลด์ต้นฉบับ Version 1 (2552) บน SlideShare</span>
              </a>
            </div>
            <span class="download-caption">บันทึกเปิดเพื่อการศึกษา ฟรีสำหรับคนไทยทุกคน</span>
          </div>

        </div>

        <!-- Right: Executive Overview -->
        <div class="hero-content">
          <div class="hero-tag-badge">
            <span class="tag-dot"></span>
            <span>จากผู้เขียน “เรียน MBA ฟรี... ที่ฮาร์วาร์ด???” (2552)</span>
          </div>

          <h1 class="hero-headline">
            <span class="hero-title-cover-main">AI MBA</span>
            <span class="hero-title-cover-sub">เมื่อโลกธุรกิจถูก AI เขียนใหม่</span>
          </h1>

          <p class="hero-b-school-line">
            HARVARD • WHARTON • STANFORD • MIT
          </p>

          <p class="hero-subtitle">
            บทเรียนจาก 4 สถาบันระดับโลก สู่การลงมือทำในบริบทไทย (5 ส่วน 22 บทเรียนฉบับสมบูรณ์) พร้อมสูตร Mega-Prompts 1-Click Copy เจาะจงสำหรับ <strong>Gemini, Claude, Grok, NotebookLM, Perplexity, Copilot, และ ChatGPT</strong>
          </p>

          <!-- Author Box -->
          <div class="author-banner">
            <div class="author-avatar">ช</div>
            <div class="author-info">
              <h4>ชีพธรรม คำวิเศษณ์ ร่วมกับ Codex</h4>
              <p>ผู้ก่อตั้ง Tri AI Consulting | โค้ชชิ่ง AI</p>
              <div class="author-social-row">
                <a href="https://www.facebook.com/cheeptham333" target="_blank" rel="noopener" class="author-social-badge fb" title="Facebook: ชีพธรรม คำวิเศษณ์">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>
                <a href="https://www.youtube.com/trimemory" target="_blank" rel="noopener" class="author-social-badge yt" title="YouTube: ชีพธรรม คำวิเศษณ์ (230,000+ ผู้ติดตาม)">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube (230k+)</span>
                </a>
                <a href="https://x.com/tri333" target="_blank" rel="noopener" class="author-social-badge x" title="X: @tri333">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span>@tri333</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Quote Pill -->
          <div class="hero-quote-box">
            <span class="quote-text">“แค่เราไม่ใช้ AI ก็แพ้แล้วครับ!”</span>
          </div>

          <!-- Quick Stats Row -->
          <div class="hero-stats-row" id="table-of-contents">
            <div class="stat-box">
              <div class="stat-num">5</div>
              <div class="stat-label">ส่วนสำคัญ</div>
            </div>
            <div class="stat-box">
              <div class="stat-num">22</div>
              <div class="stat-label">บทเรียนสมบูรณ์</div>
            </div>
            <div class="stat-box">
              <div class="stat-num">4</div>
              <div class="stat-label">สุดยอดสถาบันโลก</div>
            </div>
            <div class="stat-box">
              <div class="stat-num">100%</div>
              <div class="stat-label">ฟรีสำหรับคนไทย</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Main Reader Workspace -->
  <main class="reader-workspace">
    <div class="container">
      <div class="reader-layout-grid">
        
        <!-- Left Sticky Sidebar Navigation & Search -->
        <aside class="reader-sidebar">
          <div class="sidebar-sticky-panel">
            
            <div class="sidebar-header">
              <h3 class="sidebar-title">สารบัญ 22 บทเรียน</h3>
              <span class="curriculum-badge">5 ส่วน (Parts)</span>
            </div>

            <!-- Instant Search Box -->
            <div class="search-box-container">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="curriculum-search" placeholder="ค้นหาบทเรียน, เครื่องมือ, AI..." aria-label="ค้นหาบทเรียนในหลักสูตร">
            </div>

            <!-- Sidebar Navigation Links -->
            <nav class="curriculum-nav" aria-label="สารบัญหลักสูตร">
              {sidebar_html}
            </nav>

            <div class="sidebar-footer-action">
              <a href="Codex-AI-MBA-Handbook-TH.pdf" download class="btn-sidebar-download">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>ดาวน์โหลด E-Book (PDF)</span>
              </a>
            </div>

          </div>
        </aside>

        <!-- Main Reading Content (22 Pre-rendered Chapters) -->
        <div class="reader-content-area" id="reader-content-area">
          {chapters_html}
        </div>

      </div>
    </div>
  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>AI MBA Handbook</h3>
          <p>
            เขียนและเรียบเรียงโดย <strong>ชีพธรรม คำวิเศษณ์</strong> ร่วมกับ <strong>Codex</strong><br>
            เพื่อมอบเป็นองค์ความรู้เปิดสำหรับคนไทยในการพัฒนาตนเอง สู่การเป็นผู้นำองค์กรและผู้ประกอบการยุค AI สากล (5 ส่วน 22 บทเรียนฉบับสมบูรณ์)
          </p>
          <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
            <span class="badge-school badge-hbs">HBS</span>
            <span class="badge-school badge-mit">MIT</span>
            <span class="badge-school badge-stanford">Stanford</span>
            <span class="badge-school badge-wharton">Wharton</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>แพลตฟอร์ม AI ที่รองรับ</h4>
          <ul class="footer-links">
            <li><a href="https://gemini.google.com" target="_blank" rel="noopener">✨ Google Gemini</a></li>
            <li><a href="https://notebooklm.google.com" target="_blank" rel="noopener">📓 Google NotebookLM</a></li>
            <li><a href="https://claude.ai" target="_blank" rel="noopener">🧠 Anthropic Claude</a></li>
            <li><a href="https://chatgpt.com" target="_blank" rel="noopener">🟢 OpenAI ChatGPT</a></li>
            <li><a href="https://x.ai" target="_blank" rel="noopener">⚡ xAI Grok</a></li>
            <li><a href="https://perplexity.ai" target="_blank" rel="noopener">🔍 Perplexity AI</a></li>
            <li><a href="https://copilot.microsoft.com" target="_blank" rel="noopener">💼 Microsoft Copilot</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 AI MBA Handbook by ชีพธรรม คำวิเศษณ์ & Codex. ไม่สงวนลิขสิทธิ์ สำหรับการเผยแพร่และเรียนรู้เพื่อคนไทย
        </div>
        <div style="color: #64748B;">
          Corporate Identity inspired by Harvard, MIT, Stanford, and Wharton.
        </div>
      </div>
    </div>
  </footer>

  <!-- Toast Notification -->
  <div class="toast-notification" id="toast" role="status" aria-live="polite">
    <div class="toast-content">
      <span class="toast-icon">📋</span>
      <span class="toast-message" id="toast-message">คัดลอกคำสั่งเรียบร้อยแล้ว!</span>
    </div>
  </div>

  <!-- Embedded Standalone Controller for Offline & file:/// Execution -->
  <script>
  (function() {{
    'use strict';

    const rawChapters = {json.dumps(chapters, ensure_ascii=False)};

    // Toast Notification helper
    function showToast(msg) {{
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-message');
      if (toast && toastMsg) {{
        toastMsg.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }}
    }}

    // Reading Progress Track
    window.addEventListener('scroll', () => {{
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      const bar = document.getElementById('reading-progress-bar');
      if (bar) bar.style.width = scrolled + '%';
    }}, {{ passive: true }});

    // Theme Toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    const savedTheme = localStorage.getItem('aimba_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeBtn?.addEventListener('click', () => {{
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('aimba_theme', next);
    }});

    // Font Resizer
    let currentFontSize = 100;
    document.getElementById('btn-font-inc')?.addEventListener('click', () => {{
      if (currentFontSize < 130) {{
        currentFontSize += 10;
        document.documentElement.style.fontSize = currentFontSize + '%';
      }}
    }});
    document.getElementById('btn-font-dec')?.addEventListener('click', () => {{
      if (currentFontSize > 85) {{
        currentFontSize -= 10;
        document.documentElement.style.fontSize = currentFontSize + '%';
      }}
    }});

    // 1-Click Copy Engine
    document.querySelectorAll('.btn-copy-prompt').forEach(btn => {{
      btn.addEventListener('click', async (e) => {{
        const targetId = btn.getAttribute('data-target');
        const codeEl = document.getElementById(targetId);
        if (codeEl) {{
          const text = codeEl.textContent;
          try {{
            await navigator.clipboard.writeText(text);
            showToast('📋 คัดลอกคำสั่ง Mega-Prompt เรียบร้อยแล้ว!');
          }} catch (err) {{
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('📋 คัดลอกคำสั่งเรียบร้อยแล้ว!');
          }}
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 1500);
        }}
      }});
    }});

    // 1-Click Share Link Copy
    document.querySelectorAll('.share-copy').forEach(btn => {{
      btn.addEventListener('click', async () => {{
        const anchor = btn.getAttribute('data-anchor');
        const url = window.location.href.split('#')[0] + '#' + anchor;
        try {{
          await navigator.clipboard.writeText(url);
          showToast('🔗 คัดลอกลิงก์บทเรียนเรียบร้อยแล้ว!');
        }} catch (err) {{
          const ta = document.createElement('textarea');
          ta.value = url;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          showToast('🔗 คัดลอกลิงก์บทเรียนเรียบร้อยแล้ว!');
        }}
      }});
    }});

    // Multi-AI Platform Switcher per Chapter
    document.querySelectorAll('.ai-tab-btn').forEach(btn => {{
      btn.addEventListener('click', () => {{
        const chapId = btn.getAttribute('data-target');
        const aiName = btn.getAttribute('data-ai');
        const parentToolbar = btn.closest('.ai-tabs-toolbar');
        if (parentToolbar) {{
          parentToolbar.querySelectorAll('.ai-tab-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }}

        // Update target label
        const targetLabel = document.getElementById('target-label-' + chapId);
        if (targetLabel) {{
          targetLabel.innerHTML = 'เป้าหมาย: <strong>' + aiName + '</strong>';
        }}

        // Update prompt text
        const codeDisplay = document.getElementById('prompt-code-' + chapId);
        const chapNum = parseInt(chapId.replace('chap-', ''), 10);
        const foundChap = rawChapters.find(c => c.num === chapNum);
        if (codeDisplay && foundChap) {{
          let promptStr = foundChap.prompt.replace('{{AI_TARGET}}', aiName);
          codeDisplay.textContent = promptStr;
        }}
      }});
    }});

    // Instant Chapter Search
    const searchInput = document.getElementById('curriculum-search');
    searchInput?.addEventListener('input', (e) => {{
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.chapter-article').forEach(art => {{
        const text = art.textContent.toLowerCase();
        const chapId = art.id;
        const navLink = document.querySelector('.sidebar-link[data-chapter="' + chapId + '"]');
        if (query === '' || text.includes(query)) {{
          art.style.display = 'block';
          if (navLink) navLink.closest('.sidebar-item').style.display = 'block';
        }} else {{
          art.style.display = 'none';
          if (navLink) navLink.closest('.sidebar-item').style.display = 'none';
        }}
      }});
    }});

    // Active Sidebar Spy
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          const id = entry.target.id;
          document.querySelectorAll('.sidebar-link').forEach(link => {{
            link.classList.toggle('active', link.getAttribute('data-chapter') === id);
          }});
        }}
      }});
    }}, {{ rootMargin: '-20% 0px -70% 0px' }});

    document.querySelectorAll('.chapter-article').forEach(article => {{
      observer.observe(article);
    }});

  }})();
  </script>

</body>
</html>
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html_content)

print("Generated complete index.html with all 22 chapters!")
