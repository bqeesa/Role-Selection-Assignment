import  { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function TutorStudents() {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 1, name: 'Mustopha Adesina', subject: 'Quran', level: 'Beginner', status: 'Active' },
    { id: 2, name: 'Aisha Adeyemi', subject: 'Fiqh', level: 'Advanced', status: 'Active' },
    { id: 3, name: 'Soffiyah Abd Razaq', subject: 'Siroh', level: 'Intermediate', status: 'Completed' },
    { id: 4, name: 'Azeez Abd Hafeez', subject: 'Quran', level: 'Advanced', status: 'Active' },
    { id: 5, name: 'Abdulmalik Zayd', subject: 'Arabic', level: 'Beginner', status: 'Completed' },
    { id: 6, name: 'Badru Zainab', subject: 'Tafsir', level: 'Intermediate', status: 'Active' },
    { id: 7, name: 'AbdulJelil Alaka', subject: 'Quran', level: 'Beginner', status: 'Active' }
  ];

  const filteredStudents = students.filter(
    (student) => student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1 className="page-title">Students</h1>
            <p className="page-subtitle">View and track students across your classes</p>
          </div>
        </div>

        {/* Top Summary Stat Cards */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div className="stat-card" style={{ width: '220px' }}>
            <div className="stat-icon-box stat-icon-green">🎓</div>
            <div>
              <div className="stat-number">20</div>
              <div className="stat-label">Total Students</div>
            </div>
          </div>
          <div className="stat-card" style={{ width: '220px' }}>
            <div className="stat-icon-box stat-icon-green">👨‍🎓</div>
            <div>
              <div className="stat-number">11</div>
              <div className="stat-label">Active Students</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(220, 220, 220, 1)',
              width: '260px',
              outline: 'none',
              fontSize: '12px'
            }}
          />
        </div>

        {/* Table View */}
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '12px', border: '1px solid rgba(235, 235, 235, 1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(245, 245, 245, 1)', fontSize: '11px', color: 'rgba(120, 120, 120, 1)', letterSpacing: '0.5px' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>NAME</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>SUBJECT</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>LEVEL</th>
                <th style={{ padding: '14px 20px', textAlign: 'left' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s) => (
                <tr key={s.id} style={{ borderBottom: '1px solid rgba(245, 245, 245, 1)', fontSize: '13px' }}>
                  <td style={{ padding: '14px 20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(220, 220, 220, 1)' }}></div>
                    {s.name}
                  </td>
                  <td style={{ padding: '14px 20px', color: 'rgba(100, 100, 100, 1)' }}>{s.subject}</td>
                  <td style={{ padding: '14px 20px', color: 'rgba(100, 100, 100, 1)' }}>{s.level}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '600',
                        backgroundColor: s.status === 'Active' ? 'rgba(223, 240, 216, 1)' : 'rgba(217, 237, 247, 1)',
                        color: s.status === 'Active' ? 'rgba(40, 138, 59, 1)' : 'rgba(49, 112, 143, 1)'
                      }}
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TutorStudents;