import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import SignUp from './pages/SignUp';
import './styles/index.css';
import ProtectedRoute from './components/ProtectedRoute';
import Verification from './pages/Verification';
import Login from './pages/Login';
import TutorOnboardingDocs from './pages/TutorOnboardingDocs';
import TutorOnboardingAvailability from './pages/TutorOnboardingAvailability';
import TutorDashboard from './pages/TutorDashboard';
import TutorStudents from './pages/TutorStudents';
import TutorClasses from './pages/TutorClasses';
import Resources from './pages/Resources';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';

function App() {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole'));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection setUserRole={setUserRole} />} />

        <Route 
          element={
            <ProtectedRoute 
              isAllowed={Boolean(userRole)} 
              redirectPath="/" 
            />
          }
        >
          <Route path="/signup" element={<SignUp userRole={userRole} />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/login" element={<Login userRole={userRole} setIsAuthenticated={setIsAuthenticated} />} />
        </Route>

        <Route 
          element={
            <ProtectedRoute 
              isAllowed={userRole === 'student' && isAuthenticated} 
              redirectPath="/" 
            />
          }
        >
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student/resources" element={<Resources />} />
        </Route>

        <Route 
          element={
            <ProtectedRoute 
              isAllowed={userRole === 'tutor' && isAuthenticated} 
              redirectPath="/" 
            />
          }
        >
          <Route path="/tutor-onboarding/docs" element={<TutorOnboardingDocs />} />
          <Route path="/tutor-onboarding/availability" element={<TutorOnboardingAvailability />} />
          <Route path="/tutor/dashboard" element={<TutorDashboard />} />
          <Route path="/tutor/students" element={<TutorStudents />} />
          <Route path="/tutor/classes" element={<TutorClasses />} />
          <Route path="/tutor/resources" element={<Resources />} />
          <Route path="/tutor/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;