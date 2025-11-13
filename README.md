<h1>🌐 Bynry Profile Dashboard</h1>

<p>
A modern <b>React-based Profile Management System</b> developed as part of 
the <b>Bynry Frontend Case Study 2024</b>.  
This project integrates <b>profile cards, admin CRUD, maps, and persistent storage</b> 
to deliver a clean and interactive user directory.
</p>

<hr>

<h2>📸 Output Screenshots</h2>

<p>Replace these links with your actual screenshots:</p>

<img src="assets/home.png" width="800" />
<br><br>

<img src="assets/detail.png" width="800" />
<br><br>

<img src="assets/admin.png" width="800" />
<br><br>

<img src="assets/map.png" width="800" />

<hr>

<h2>📄 Project Overview</h2>

<ul>
    <li>User profile listing with modern UI</li>
    <li>Interactive map summary using Leaflet</li>
    <li>Profile detail page with complete information</li>
    <li>Admin dashboard (Add, Edit, Delete)</li>
    <li>Permanent storage using Zustand Persist</li>
</ul>

<hr>

<h2>📌 Project Objectives</h2>

<ul>
    <li>Display multiple user profiles beautifully</li>
    <li>Show the exact location on an interactive map</li>
    <li>Allow admin to fully manage profiles (CRUD)</li>
    <li>Ensure persistent data across refreshes</li>
    <li>Use modern UI with CSS modules & glass styles</li>
</ul>

<hr>

<h2>🛠️ Tools & Technologies</h2>

<ul>
    <li><b>Frontend:</b> React + Vite</li>
    <li><b>State Management:</b> Zustand (with persist)</li>
    <li><b>Routing:</b> React Router DOM</li>
    <li><b>Maps:</b> Leaflet + React Leaflet</li>
    <li><b>Styling:</b> CSS Modules + custom UI</li>
    <li><b>Build Tools:</b> Vite & ESLint</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
bynry-profile-dashboard/
│── src/
│   ├── assets/               # Images
│   ├── components/
│   │     ├── ProfileCard.jsx
│   │     ├── MapView.jsx
│   │     ├── ProfileCard.module.css
│   ├── pages/
│   │     ├── Home.jsx
│   │     ├── Detail.jsx
│   │     ├── Admin.jsx
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
    <li><b>Profile Rendering</b>
        <ul>
            <li>Modern glass-style cards</li>
            <li>Displays photo, name, title, location</li>
            <li>Buttons for Summary and Details</li>
        </ul>
    </li>

    <li><b>Map Integration</b>
        <ul>
            <li>Interactive map built with React Leaflet</li>
            <li>Marker shows exact user location</li>
            <li>Zoom, drag and popup support</li>
        </ul>
    </li>

    <li><b>Admin CRUD</b>
        <ul>
            <li>Add new profiles</li>
            <li>Edit existing profiles</li>
            <li>Delete profiles</li>
            <li>Instant UI updates with Zustand</li>
        </ul>
    </li>

    <li><b>Persistent Storage</b>
        <ul>
            <li>Stored in LocalStorage</li>
            <li>Hydration fixed using Zustand middleware</li>
            <li>No backend required</li>
        </ul>
    </li>
</ol>

<hr>

<h2>🚀 How to Run</h2>

<ol>
    <li>Clone the repository  
        <pre>git clone https://github.com/Abhishekkhanai07/Bynry-profile-dashboard.git</pre>
    </li>

    <li>Install dependencies  
        <pre>npm install</pre>
    </li>

    <li>Start development server  
        <pre>npm run dev</pre>
    </li>

    <li>Build for production  
        <pre>npm run build</pre>
    </li>
</ol>

<hr>

<h2>🗑 Reset Local Storage</h2>

<p>Run in browser console:</p>

<pre>localStorage.removeItem('bynry-profiles')</pre>

<hr>

<h2>🙋‍♂️ Author</h2>

<p>
<b>Abhishek Khanai</b><br>
Frontend Developer<br>
GitHub: 
<a href="https://github.com/Abhishekkhanai07">Abhishekkhanai07</a>
</p>

</body>
</html>
