<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>📂 Bynry Profile Dashboard — Project Overview</title>
  <style>
    :root{
      --bg:#071126;
      --card:#0f1724;
      --muted:#9aa6b3;
      --accent:#60A5FA;
      --glass: rgba(255,255,255,0.04);
      --mono: 'SFMono-Regular', ui-monospace, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
    }
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#041025 0%, #071126 60%);color:#e6eef8;font-family:Inter,ui-sans-serif,system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;}
    .wrap{max-width:1100px;margin:36px auto;padding:28px;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));box-shadow:0 8px 30px rgba(2,6,23,0.7);border:1px solid rgba(255,255,255,0.03);}
    header{display:flex;align-items:center;gap:16px;margin-bottom:18px}
    h1{font-size:1.5rem;margin:0}
    .subtitle{color:var(--muted);font-size:0.95rem;margin-top:6px}
    section{margin-top:20px;padding:18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent);border:1px solid rgba(255,255,255,0.02)}
    h2{margin:0 0 12px 0;font-size:1.05rem;color:#dbeafe}
    p{color:var(--muted);line-height:1.5}
    ul{color:var(--muted);margin:8px 0 0 18px}
    pre{background:var(--card);padding:12px;border-radius:8px;color:#dbeafe;overflow:auto;font-family:var(--mono);font-size:0.92rem}
    code{background:rgba(255,255,255,0.02);padding:2px 6px;border-radius:6px;color:#cbe7ff;font-family:var(--mono)}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px}
    .meta{display:flex;gap:10px;flex-wrap:wrap}
    .pill{background:var(--glass);padding:8px 12px;border-radius:999px;color:var(--muted);font-weight:600;border:1px solid rgba(255,255,255,0.02)}
    .cmd{display:flex;gap:8px;align-items:center}
    .btn{background:linear-gradient(90deg,var(--accent),#3b82f6);color:#04202b;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;font-weight:700}
    .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
    .small{font-size:0.85rem;color:var(--muted)}
    footer{margin-top:22px;color:var(--muted);font-size:0.9rem;text-align:center}
    .code-grid{display:flex;gap:10px;flex-wrap:wrap}
    .left-col{min-width:240px}
    .screenshot{width:100%;height:160px;border-radius:8px;background:linear-gradient(135deg,#0b1220,#061029);display:flex;align-items:center;justify-content:center;color:var(--muted);border:1px dashed rgba(255,255,255,0.02)}
    .label{font-size:0.85rem;color:var(--muted);margin-top:8px}
    .flex-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
    .note{background:#062235;border-left:4px solid var(--accent);padding:10px 12px;border-radius:8px;color:var(--muted);margin-top:8px}
    a.link{color:var(--accent);text-decoration:none;font-weight:700}
    .cmd-copy{background:#01131a;border:1px solid rgba(255,255,255,0.03);padding:6px 10px;border-radius:8px;color:var(--muted);cursor:pointer;font-family:var(--mono)}
    @media (max-width:640px){.wrap{margin:14px;padding:18px}}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div style="width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#0b1220,#083058);display:flex;align-items:center;justify-content:center;font-size:22px">🗂️</div>
      <div>
        <h1>📂 Bynry Profile Dashboard</h1>
        <div class="subtitle">React + Vite • Zustand • React-Leaflet — Profile management with map visualization and admin CRUD</div>
      </div>
    </header>

    <section>
      <h2>📄 Project Summary</h2>
      <p>
        A modern profile management system built as the Bynry frontend case study. View user profiles, see exact coordinates on an interactive map, and manage profiles (add / edit / delete) through an admin dashboard. Data persists using Zustand + localStorage with robust rehydration handling.
      </p>

      <div class="grid" style="margin-top:12px">
        <div>
          <h2>🚀 Features</h2>
          <ul>
            <li>Profile card grid with photo, title, city, and coordinates</li>
            <li>Interactive map summary using <code>react-leaflet</code></li>
            <li>Profile details page (route per profile)</li>
            <li>Admin CRUD panel (Add / Edit / Delete)</li>
            <li>Persistent state via <code>zustand</code> + <code>persist</code></li>
          </ul>
        </div>

        <div>
          <h2>🧩 Tech Stack</h2>
          <div class="meta">
            <div class="pill">React</div>
            <div class="pill">Vite</div>
            <div class="pill">Zustand</div>
            <div class="pill">Leaflet</div>
            <div class="pill">React Router</div>
            <div class="pill">CSS Modules</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>📁 Project Structure</h2>
      <pre>
bynry-profile-dashboard/
├─ src/
│  ├─ assets/                # images
│  ├─ components/
│  │  ├─ ProfileCard.jsx
│  │  ├─ MapView.jsx
│  │  └─ ProfileCard.module.css
│  ├─ data/
│  │  └─ seedProfiles.js
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Detail.jsx
│  │  └─ Admin.jsx
│  ├─ store/
│  │  └─ useProfiles.js
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md
      </pre>
    </section>

    <section>
      <h2>⚙️ Setup & Run</h2>
      <p class="small">Clone, install, run — clear and simple.</p>
      <div style="margin-top:8px" class="code-grid">
        <pre style="flex:1;min-width:220px">git clone https://github.com/Abhishekkhanai07/Bynry-profile-dashboard.git
cd Bynry-profile-dashboard
npm install
npm run dev</pre>

        <div style="min-width:220px">
          <div class="label">Copy commands</div>
          <div style="margin-top:8px" class="flex-row">
            <button class="cmd-copy" onclick="copyText(`git clone https://github.com/Abhishekkhanai07/Bynry-profile-dashboard.git`)">Copy clone</button>
            <button class="cmd-copy" onclick="copyText('npm install')">Copy install</button>
            <button class="cmd-copy" onclick="copyText('npm run dev')">Copy dev</button>
          </div>

          <div class="note" style="margin-top:12px">
            <strong>Tip:</strong> If you have persisted data and want to reset, run <code>localStorage.removeItem('bynry-profiles')</code> in the browser console.
            <div style="margin-top:8px">
              <button class="btn ghost" onclick="localStorage.removeItem('bynry-profiles'); alert('Cleared bynry-profiles from localStorage')">Clear bynry-profiles</button>
              <button class="btn ghost" onclick="localStorage.clear(); alert('Cleared all localStorage')">Clear all localStorage</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>📦 Libraries / Dependencies</h2>
      <p class="small">Main packages used (install via <code>npm install</code>).</p>
      <pre>react
react-dom
react-router-dom
zustand
zustand/middleware
leaflet
react-leaflet
lucide-react (optional icons)
vite</pre>
    </section>

    <section>
      <h2>🛠️ Important Implementation Notes</h2>
      <ul>
        <li><strong>Images:</strong> Import images from <code>src/assets</code> (use <code>import photo from '../assets/..'</code>), or place in <code>public/images</code> and reference with <code>/images/name.jpg</code>.</li>
        <li><strong>Zustand + Persist:</strong> store includes a <code>hydrated</code> flag — Home page waits for rehydration to avoid empty/flash states.</li>
        <li><strong>Map icons:</strong> Leaflet requires fixing default marker URLs when used with Vite (set <code>L.Icon.Default.mergeOptions({ iconUrl, ... })</code>).</li>
      </ul>
    </section>

    <section>
      <h2>🖼️ Screenshots / Preview</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
        <div>
          <div class="screenshot">Home / Grid Preview</div>
          <div class="label">Home Page</div>
        </div>
        <div>
          <div class="screenshot">Profile Details</div>
          <div class="label">Detail Page</div>
        </div>
        <div>
          <div class="screenshot">Admin Panel</div>
          <div class="label">Admin CRUD</div>
        </div>
      </div>
    </section>

    <section>
      <h2>📌 Reset & Dev Tips</h2>
      <ul>
        <li>To reset & reload default seed data: <code>localStorage.removeItem('bynry-profiles')</code> then refresh.</li>
        <li>If images don't show in development, check import paths and case-sensitivity.</li>
        <li>To push repo properly: if your local branch is <code>master</code> and remote expects <code>main</code>, run <code>git push origin master:main</code> (or rename branch <code>git branch -M main</code>).</li>
      </ul>
    </section>

    <section>
      <h2>🙋‍♂️ Author</h2>
      <p class="small"><strong>Abhishek Khanai</strong><br/>Frontend Developer<br/>GitHub: <a class="link" href="https://github.com/Abhishekkhanai07" target="_blank">github.com/Abhishekkhanai07</a><br/>Email: abhishekkhanai264@gmail.com</p>
    </section>

    <footer>
      <div class="small">© <span id="year"></span> Bynry Profile Dashboard — Built with React, Vite & ❤️</div>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();

    function copyText(t){
      navigator.clipboard.writeText(t).then(()=>{
        alert('Copied: ' + t);
      }).catch(()=>{ alert('Copy failed — please copy manually') })
    }
  </script>
</body>
</html>
