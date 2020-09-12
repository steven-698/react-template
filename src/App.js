import React from "react";
import Profile from "./components/profile";
import "./styles.css";

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
