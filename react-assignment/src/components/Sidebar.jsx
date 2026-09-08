import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/tutor/dashboard' },
    { label: 'My Classes', path: '/tutor/classes' },
    { label: 'Students', path: '/tutor/students' },
    { label: 'Resources', path: '/tutor/resources' },
    { label: 'Settings', path: '/tutor/settings' }
  ];

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-brand">The Edge</div>
        <div className="sidebar-subbrand">Tutor Portal</div>

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>

            
          ))}
        </ul>
      </div>
              

      <div>
        <div className="sidebar-user">
          <div className="user-avatar"></div>
          <div>
            <div className="user-name">Mustopha Adesina</div>
            <div className="user-role">Tutor</div>
          </div>
        </div>
        <button
          className="logout-btn"
          onClick={() => navigate('/login')}
        >
          ↳ Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;