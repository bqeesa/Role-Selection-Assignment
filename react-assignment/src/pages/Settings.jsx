import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function Settings() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your account preferences and notification settings</p>
        </div>

        <div className="tutor-card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 className="card-title-text" style={{ fontSize: '20px', marginBottom: '8px' }}>
            Feature Coming Soon
          </h2>
          <p style={{ color: 'rgba(140, 140, 140, 1)', fontSize: '13px', maxWidth: '400px', margin: '0 auto' }}>
            We are working on bringing account configuration and profile management to your dashboard. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;