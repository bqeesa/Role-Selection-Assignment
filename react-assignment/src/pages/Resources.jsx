import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function Resources() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">Access learning material and class files</p>
        </div>

        <div className="tutor-card" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 className="card-title-text" style={{ fontSize: '20px', marginBottom: '8px' }}>
            Feature Coming Soon
          </h2>
          <p style={{ color: 'rgba(140, 140, 140, 1)', fontSize: '13px', maxWidth: '400px', margin: '0 auto' }}>
            We are working on bringing file sharing and resource management to your dashboard. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resources;