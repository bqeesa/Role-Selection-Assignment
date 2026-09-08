import  { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function TutorClasses() {
  const [searchTerm, setSearchTerm] = useState('');

  const classesList = [
    { id: 1, title: 'Mathematics 101', schedule: 'Mon & Wed • 10:00 AM', studentsCount: 12, status: 'Active' },
    { id: 2, title: 'Physics Basics', schedule: 'Tue & Thu • 02:00 PM', studentsCount: 8, status: 'Active' },
    { id: 3, title: 'Chemistry Advanced', schedule: 'Friday • 11:00 AM', studentsCount: 4, status: 'Upcoming' }
  ];

  const filteredClasses = classesList.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="dashboard-title">My Classes</h1>
          <button
            style={{
              backgroundColor: 'rgba(212, 165, 82, 1)',
              color: 'rgba(255, 255, 255, 1)',
              padding: '10px 18px',
              borderRadius: '6px',
              fontWeight: '600'
            }}
          >
            Create New Class
          </button>
        </div>

        {/* Search input */}
        <div style={{ marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
              border: '1px solid rgba(220, 220, 220, 1)',
              width: '300px',
              outline: 'none'
            }}
          />
        </div>

        {/* Grid of Class Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '10px',
                padding: '20px',
                border: '1px solid rgba(230, 230, 230, 1)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <span
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '600',
                    backgroundColor: item.status === 'Active' ? 'rgba(220, 245, 220, 1)' : 'rgba(240, 240, 240, 1)',
                    color: item.status === 'Active' ? 'rgba(30, 120, 30, 1)' : 'rgba(100, 100, 100, 1)',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  {item.status}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'rgba(18, 12, 38, 1)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(100, 100, 100, 1)', marginBottom: '16px' }}>
                  {item.schedule}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(240, 240, 240, 1)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(120, 120, 120, 1)' }}>
                  {item.studentsCount} Students
                </span>
                <button
                  style={{
                    backgroundColor: 'rgba(18, 12, 38, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TutorClasses;