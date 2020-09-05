import React, { useState } from "react";
import "./styles.css";

const Post = ({ src }) => (
  <>
    <img src={src} alt="profile-picture" />
  </>
);

const Profile = (props) => {
  const { username } = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const postCount = 0;
  const posts = [...Array(postCount)];

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
        posts.map((_, idx) => (
          <Post src="https://via.placeholder.com/300" key={idx} />
        ))
      )}
    </>
  );
};

export default function App() {
  const username = "instagram";
  return <Profile username={username} />;
}
