import React, { useState } from "react";
import "./styles.css";

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{props.username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      <Post src="https://via.placeholder.com/300" />;
    </>
  );
};

const Post = (props) => (
  <>
    <img src={props.src} alt="profile-picture" />
  </>
);

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
