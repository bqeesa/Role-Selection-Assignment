import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

function TutorDashboard() {
  const navigate = useNavigate();

  const [schedule] = useState([
    { id: 1, time: '09:00', period: 'AM', title: 'Quran', students: 5, duration: '1 hour', isStartable: true },
    { id: 2, time: '12:00', period: 'PM', title: 'Fiqh', students: 5, duration: '1 hour', isStartable: false },
    { id: 3, time: '05:00', period: 'PM', title: 'Hadith', students: 5, duration: '1 hour', isStartable: false }
  ]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        {/* Top Search Bar Row */}
        <div className="top-bar">
          <span className="top-bar-title">Dashboard</span>
          <div className="top-search-wrapper">
            <span className="top-search-icon">🔍</span>
            <input
              type="text"
              placeholder=""
              className="top-search-input"
            />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="dashboard-header">
          <h1 className="page-title">Welcome back, Mustopha 👋</h1>
          <p className="page-subtitle">Here is your teaching overview for today</p>
        </div>

        {/* Overview Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card" onClick={() => navigate('/tutor/students')}>
            <div className="stat-icon-box stat-icon-green">🎓</div>
            <div>
              <div className="stat-number">20</div>
              <div className="stat-label">Total Students</div>
            </div>
          </div>

          <div className="stat-card" onClick={() => navigate('/tutor/classes')}>
            <div className="stat-icon-box stat-icon-coral">📘</div>
            <div>
              <div className="stat-number">0</div>
              <div className="stat-label">Active Classes</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box stat-icon-yellow">📅</div>
            <div>
              <div className="stat-number">3</div>
              <div className="stat-label">Upcoming Lessons</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box stat-icon-blue">☑</div>
            <div>
              <div className="stat-number">4</div>
              <div className="stat-label">Completed Lessons</div>
            </div>
          </div>
        </div>

        {/* Schedule & Side Panels Grid */}
        <div className="dashboard-grid-2-1">
          {/* Today's Schedule Card */}
          <div className="tutor-card">
            <div className="card-header-flex">
              <h3 className="card-title-text">Today's Schedule</h3>
              <span className="card-date-subtext">Tuesday, November 3rd, 2025</span>
            </div>

            <div className="schedule-list">
              {schedule.map((item) => (
                <div key={item.id} className="schedule-item">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="schedule-time-box">
                      <div>{item.time}</div>
                      <div>{item.period}</div>
                    </div>
                    <div>
                      <div className="schedule-title">{item.title}</div>
                      <div className="schedule-meta">
                        👥 {item.students} students &nbsp; ⏱ {item.duration}
                      </div>
                    </div>
                  </div>

                  {item.isStartable ? (
                    <button
                      type="button"
                      className="btn-start-session"
                      onClick={() => alert(`Starting session for ${item.title}`)}
                    >
                      Start Session
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-view-details"
                      onClick={() => alert(`Details for ${item.title}`)}
                    >
                      View Details
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Quick Actions & Notifications) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Quick Actions */}
            <div className="tutor-card">
              <h3 className="card-title-text" style={{ marginBottom: '16px' }}>Quick Actions</h3>

              <div className="quick-action-card" onClick={() => navigate('/tutor/classes')}>
                <div className="quick-action-left">
                  <div className="quick-action-icon-box stat-icon-green">+</div>
                  <div>
                    <div className="quick-action-title">Create New Class</div>
                    <div className="quick-action-sub">Schedule a session</div>
                  </div>
                </div>
                <span className="quick-action-arrow">&gt;</span>
              </div>

              <div className="quick-action-card" onClick={() => navigate('/tutor/resources')}>
                <div className="quick-action-left">
                  <div className="quick-action-icon-box stat-icon-green">upload</div>
                  <div>
                    <div className="quick-action-title">Upload Resources</div>
                    <div className="quick-action-sub">Share files with students</div>
                  </div>
                </div>
                <span className="quick-action-arrow">&gt;</span>
              </div>
            </div>

            {/* Notifications */}
            <div className="tutor-card">
              <h3 className="card-title-text" style={{ marginBottom: '16px' }}>Notifications</h3>

              <div className="notification-item">
                <span className="notification-dot green"></span>
                <div>
                  <div className="notification-text">New booking request from Aisha</div>
                  <div className="notification-time">2 mins ago</div>
                </div>
              </div>

              <div className="notification-item" style={{ marginBottom: 0 }}>
                <span className="notification-dot gray"></span>
                <div>
                  <div className="notification-text">Session for Tawheed cancelled</div>
                  <div className="notification-time">9 mins ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorDashboard;