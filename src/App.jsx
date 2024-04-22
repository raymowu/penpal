import React, { useContext } from "react";
import "./global.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import VocabGame from "./pages/VocabGame"; 

function App() {
  const { currentUser } = useContext(AuthContext);

  // Component for a protected route
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!currentUser ? <Navigate to="/login" replace /> : <Navigate to="/main" replace />} />
        <Route path="login" element={!currentUser ? <Login /> : <Navigate to="/main" replace />} />
        <Route path="register" element={!currentUser ? <Register /> : <Navigate to="/main" replace />} />
        <Route path="main" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="vocab-game" element={<ProtectedRoute><VocabGame /></ProtectedRoute>} />
        {/* Redirects any non-defined route to the main route */}
        <Route path="*" element={!currentUser ? <Navigate to="/login" replace /> : <Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
