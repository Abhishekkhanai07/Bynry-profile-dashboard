<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>🌐 Bynry Profile Dashboard</title>
</head>
<body>

<h1>🌐 Bynry Profile Dashboard</h1>

<p>
A modern <b>React-based Profile Management System</b> developed as part of the 
<b>Bynry Frontend Case Study 2024</b>.  
This project integrates <b>profile cards, admin CRUD, maps, and persistent storage</b> 
to deliver a complete user directory dashboard.
</p>

<hr>

<h2>📸 Output Screenshots</h2>

<p>Here are some UI previews of the project:</p>

<!-- Replace these image paths with your uploaded GitHub images -->

<img src="assets/homepage.png" width="800" alt="Home Page Screenshot"/>
<br><br>

<img src="assets/detailpage.png" width="800" alt="Detail Page Screenshot"/>
<br><br>

<img src="assets/adminpage.png" width="800" alt="Admin Page Screenshot"/>
<br><br>

<img src="assets/mapsummary.png" width="800" alt="Map Summary Screenshot"/>

<hr>

<h2>📄 Project Overview</h2>

<ul>
    <li>User profile listing with modern glass UI</li>
    <li>Interactive map summary using Leaflet</li>
    <li>Full profile detail pages</li>
    <li>Admin dashboard for Add/Edit/Delete</li>
    <li>Persistent state using Zustand + LocalStorage</li>
</ul>

<hr>

<h2>📌 Objectives</h2>
<ul>
    <li>Display multiple user profiles cleanly</li>
    <li>Show each user’s location on a map</li>
    <li>Allow Admin to manage profiles (CRUD)</li>
    <li>Create a visually appealing UI with modern design</li>
    <li>Ensure data is stored and persists after refresh</li>
</ul>

<hr>

<h2>🛠️ Tools & Technologies</h2>

<ul>
    <li><b>Frontend:</b> React + Vite</li>
    <li><b>State Management:</b> Zustand (with persist)</li>
    <li><b>Routing:</b> React Router DOM</li>
    <li><b>Maps:</b> Leaflet + React-Leaflet</li>
    <li><b>Styling:</b> CSS Modules + Custom Glassmorphism</li>
    <li><b>Build Tools:</b> Vite, ESlint</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
bynry-profile-dashboard/
│── public/
│── src/
│   ├── assets/               # Images, photos
│   ├── components/
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
    <li><b>Profile Rendering</b>
        <ul>
            <li>Glassmorphic cards</li>
            <li>Image preview + name + title</li>
            <li>Buttons for Summary & Details</li>
        </ul>
    </li>

    <li><b>Map Summary</b>
        <ul>
            <li>Leaflet map loads with exact lat/lng</li>
            <li>Marker + popup displays user name</li>
            <li>Fully interactive map</li>
        </ul>
    </li>

    <li><b>Admin CRUD</b>
        <ul>
            <li>Add profile form</li>
            <li>Edit selected profile</li>
            <li>Delete profile instantly</li>
            <li>Data stored in Zustand state</li>
        </ul>
    </li>

    <li><b>Persistent Storage</b>
        <ul>
            <li>LocalStorage auto-sync using Zustand persist</li>
            <li>Hydration handling to avoid blank state</li>
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

    <li>Run development server  
        <pre>npm run dev</pre>
    </li>

    <li>Build for production  
        <pre>npm run build</pre>
    </li>
</ol>

<hr>

<h2>🗑️ Reset Local Storage (Optional)</h2>

<p>If you want to reset all profiles:</p>

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
