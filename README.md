<h1>🌐 Bynry Profile Dashboard</h1>

<p>
A modern <b>React-based Profile Management System</b> created for the 
<b>Bynry Frontend Case Study 2024</b>.  
The system allows viewing user profiles, map-based locations, and managing 
profiles using a dedicated admin panel.
</p>

<hr>

<h2>📸 Output Screenshots</h2>

<p>Replace these with your actual images:</p>

<img src="assets/home.png" width="800" />
<br><br>

<img src="assets/details.png" width="800" />
<br><br>

<img src="assets/admin.png" width="800" />
<br><br>

<img src="assets/map.png" width="800" />

<hr>

<h2>📄 Project Overview</h2>

<p>
A complete profile management dashboard with:
</p>

<ul>
    <li>Glassmorphic UI for modern appearance</li>
    <li>Leaflet maps for accurate location display</li>
    <li>Admin panel with full CRUD</li>
    <li>Persistent data using Zustand + LocalStorage</li>
</ul>

<hr>

<h2>📌 Project Objectives</h2>

<ul>
    <li>View professional user profiles</li>
    <li>Display map-based summaries</li>
    <li>Allow Add/Edit/Delete operations</li>
    <li>Maintain a clean and responsive UI</li>
    <li>Ensure persistent storage across sessions</li>
</ul>

<hr>

<h2>🛠️ Tools & Technologies</h2>

<ul>
    <li><b>Framework:</b> React + Vite</li>
    <li><b>State Management:</b> Zustand</li>
    <li><b>Persistent Storage:</b> Zustand Persist Middleware</li>
    <li><b>Routing:</b> React Router DOM</li>
    <li><b>Maps:</b> Leaflet + React Leaflet</li>
    <li><b>Styling:</b> CSS Modules + Custom UI</li>
    <li><b>Build Tool:</b> Vite</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
bynry-profile-dashboard/
│── src/
│   ├── assets/               # Images
│   ├── components/           # Reusable components
│   │     ├── ProfileCard.jsx
│   │     ├── MapView.jsx
│   │     ├── ProfileCard.module.css
│   ├── pages/
│   │     ├── Home.jsx
│   │     ├── Detail.jsx
│   │     ├── Admin.jsx
│   │     ├── Admin.module.css
│   ├── data/
│   │     └── seedProfiles.js
│   ├── store/
│   │     └── useProfiles.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── README.md
</pre>

<hr>

<h2>⚙️ Methodology</h2>

<ol>
<li><b>Profile Rendering</b></li>
<ul>
<li>Modern glass-style cards</li>
<li>Displays photo, name, title, and location</li>
<li>Buttons for Summary and Details</li>
</ul>

<li><b>Map Integration</b></li>
<ul>
<li>Implemented with React Leaflet</li>
<li>Shows marker with popup text</li>
<li>Supports zooming and dragging</li>
</ul>

<li><b>Admin CRUD</b></li>
<ul>
<li>Form-based Add operation</li>
<li>Edit functionality with pre-filled data</li>
<li>Instant Delete behavior</li>
<li>State updated using Zustand</li>
</ul>

<li><b>Persistent Storage</b></li>
<ul>
<li>LocalStorage is used to save profile data</li>
<li>Hydration logic ensures no empty UI states</li>
<li>No backend required</li>
</ul>
</ol>

<h2>🚀 How to Run</h2>

<ol>

<li><b>Clone the Repository</b></li>
<ul>
<li>git clone https://github.com/Abhishekkhanai07/Bynry-profile-dashboard.git</li>
</ul>

<li><b>Install Dependencies</b></li>
<ul>
<li>npm install</li>
</ul>

<li><b>Start Development Server</b></li>
<ul>
<li>npm run dev</li>
</ul>

<li><b>Build for Production</b></li>
<ul>
<li>npm run build</li>
</ul>

</ol>

<h2>🗑 Reset Local Storage</h2>
<p>To clear all saved profiles:</p>

<pre>localStorage.removeItem('bynry-profiles')</pre>

<hr>

<h2>🙋‍♂️ Author</h2>

<p>
<b>Abhishek Khanai</b><br>
Frontend Developer<br>
GitHub: 
<a href="https://github.com/Abhishekkhanai07">Abhishekkhanai07</a>
</p>
