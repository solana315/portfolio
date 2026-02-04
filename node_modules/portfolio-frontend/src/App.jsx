import React from "react";
import Index from "./Index";
import Sobre from "./Sobre";

export default function App() {
  const path = window.location.pathname;

  if (path === "/sobre") {
    return <Sobre />;
  }

  return <Index />;
}
