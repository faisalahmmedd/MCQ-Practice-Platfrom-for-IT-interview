import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CQPage from "./components/CQPage";
import FindJob from "./components/FindJob";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ChatbotBubble from "./components/ChatbotBubble";
import PageSearch from "./components/PageSearch";


function App() {
  return (
    <Router>
      
      <div className="app-container">
        <Header />
        <PageSearch />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/cq/:category" element={<CQPage />} />
            <Route path="/find-job" element={<FindJob />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {/* Protected Profile Route */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
        <ChatbotBubble />

      </div>
    </Router>
  );
}

export default App;
