// import './index.css'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/admin">Admin</Link>
      </header>
      <Outlet />
    </div>
  )
}

