import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import MentorDashboard from "./pages/MentorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CalendarComponent from "./components/Calendar";
import VideoCall from "./components/VideoCall";
import PreMeetingTools from "./components/PreMeetingTools";
import ResourceLibrary from "./components/ResourceLibrary";
import MultiPersonSession from "./components/MultiPersonSession";
import FeedbackForm from "./components/FeedbackForm";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import CancellationRescheduling from "./components/CancellationRescheduling";
import ResponsiveComponent from "./components/ResponsiveComponent";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/mentor-dashboard" element={MentorDashboard} />
        <ProtectedRoute path="/student-dashboard" element={StudentDashboard} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/pre-meeting-tools" element={<PreMeetingTools />} />
        <Route path="/resource-library" element={<ResourceLibrary />} />
        <Route path="/multi-person-session" element={<MultiPersonSession />} />
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
        <Route
          path="/cancellation-rescheduling"
          element={<CancellationRescheduling />}
        />
        <Route path="/responsive-component" element={<ResponsiveComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
