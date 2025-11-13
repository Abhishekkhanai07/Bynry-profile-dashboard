
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Bynry Profile Dashboard</title>
</head>
<body>

<h1>🌐 Bynry Profile Dashboard</h1>

<p>
A modern <b>profile management system</b> developed using 
<b>React, Zustand, Leaflet Maps, and Vite</b> as part of the 
<strong>Bynry Frontend Case Study 2024</strong>.  
This application allows viewing profiles, checking mapped locations, 
and managing users through a complete admin module.
</p>

<hr>

<h2>📄 Project Report</h2>
<p>
You can explore the full project details here:  
<a href="#" target="_blank">Project Documentation</a>
</p>

<hr>

<h2>📌 Project Objective</h2>

<ul>
    <li>Display professional user profiles with photos and details</li>
    <li>Show exact location using interactive Leaflet maps</li>
    <li>Manage profiles using Add, Edit, Delete (CRUD) operations</li>
    <li>Implement persistent storage with Zustand + LocalStorage</li>
    <li>Provide clean and modern UI using CSS modules + glassmorphism effects</li>
</ul>

<hr>

<h2>🛠️ Tools & Technologies</h2>

<ul>
    <li><b>Frontend Framework:</b> React + Vite</li>
    <li><b>State Management:</b> Zustand (with persist)</li>
    <li><b>Routing:</b> React Router DOM</li>
    <li><b>Maps:</b> Leaflet + React Leaflet</li>
    <li><b>Styling:</b> CSS Modules, Custom Glassmorphism</li>
    <li><b>Build Tools:</b> Vite, ESLint</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
bynry-profile-dashboard/
│── public/
│── src/
│   ├── assets/               # Photos & images
│   ├── components/           # UI Components
│   │     ├── ProfileCard.jsx
│   │     ├── MapView.jsx
│   │     ├── ProfileCard.module.css
│   ├── data/
│   │     └── seedProfiles.js
│   ├── pages/
│   │     ├── Home.jsx
│   │     ├── Detail.jsx
│   │     ├── Admin.jsx
│   │     ├── Admin.module.css
│   ├── store/
│   │     └── useProfiles.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── README.md
</pre>

<hr>

<h2>⚙️ Methodology</h2>

<ol>
    <li><b>Profile Display</b>
        <ul>
            <li>Modern glass-style cards for each profile</li>
            <li>Responsive grid layout</li>
            <li>Clean typography and design</li>
        </ul>
    </li>

    <li><b>Map Integration</b>
        <ul>
            <li>Rendered using React Leaflet</li>
            <li>Shows marker with popup</li>
            <li>Zoom, drag, tile loading included</li>
        </ul>
    </li>

    <li><b>Admin Management (CRUD)</b>
        <ul>
            <li>Add new profiles via form</li>
            <li>Edit existing profiles</li>
            <li>Delete profiles instantly</li>
            <li>Zustand store updates UI in real-time</li>
        </ul>
    </li>

    <li><b>Data Persistence</b>
        <ul>
            <li>LocalStorage is used to save all profiles</li>
            <li>Data remains after browser refresh</li>
            <li>Hydration issue fixed with Zustand patterns</li>
        </ul>
    </li>
</ol>

<hr>

<h2>📌 Features</h2>

<ul>
    <li>Glassmorphic profile cards</li>
    <li>Summary modal with map</li>
    <li>Full profile details page</li>
    <li>Interactive Leaflet map</li>
    <li>Admin panel with Add/Edit/Delete</li>
    <li>Zustand-based global state</li>
    <li>Persistent data storage</li>
</ul>

<hr>

<h2>🚀 How to Run</h2>

<ol>
    <li>Clone the repository:
        <pre>git clone https://github.com/Abhishekkhanai07/Bynry-profile-dashboard.git</pre>
    </li>

    <li>Install dependencies:
        <pre>npm install</pre>
    </li>

    <li>Start development:
        <pre>npm run dev</pre>
    </li>

    <li>Build for production:
        <pre>npm run build</pre>
    </li>
</ol>

<hr>

<h2>🗺️ Reset Local Storage (Optional)</h2>

<p>Run in browser console:</p>

<pre>localStorage.removeItem('bynry-profiles')</pre>

<hr>

<h2>🙋‍♂️ Author</h2>

<p>
<b>Abhishek Khanai</b><br>
Frontend Developer<br>
GitHub: <a href="https://github.com/Abhishekkhanai07">Abhishekkhanai07</a>
</p>

</body>
</html>
