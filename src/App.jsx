import React, { useEffect, useState } from "react";
import Index from "./Index";
import Sobre from "./Sobre";
import Login from "./Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem("portfolio.auth");
    setIsAuthenticated(savedAuth === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("portfolio.auth");
    setIsAuthenticated(false);
  };

  const path = window.location.pathname;

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  if (path === "/sobre") {
    return <Sobre onLogout={handleLogout} />;
  }

  return <Index onLogout={handleLogout} />;
}
