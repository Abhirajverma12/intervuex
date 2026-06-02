import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Landing from "./pages/Landing";
import InterviewRoom from "./pages/InterviewRoom";
import InterviewSetup from "./pages/InterviewSetup";
import AttemptDetails from "./pages/AttemptDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/interview-setup" element={<InterviewSetup />} />
        <Route path="/interview-room" element={<InterviewRoom />} />
        <Route path="/attempt-details" element={<AttemptDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;