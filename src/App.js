import React from "react";
import "./styles.css";

export default function App() {
  const username = "instagram";

  return (
    <>
      <img src="https://via.placeholder.com/300" alt="profile picture" />
      <div>@{username}</div>
      <button>Follow</button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
    </>
  );
}
