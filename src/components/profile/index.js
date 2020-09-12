import React, { useState } from "react";
import Post from "../posts/";

const Profile = (props) => {
  const { username } = props;
  const [isFollowed, setIsFollowed] = useState(false);
  const [inputAccount, setInputAccount] = useState("");
  const postCount = 11;
  const posts = [...Array(postCount)];

  return (
    <React.Fragment>
      <input
        onChange={({ target: { value } }) => {
          setInputAccount(value);
        }}
        placeholder="search profile"
      />
      <div>Search Result for account: {inputAccount}</div>
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      {/* <Button variantColor="blue" onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </Button> */}
      <div>{postCount} Posts</div>
      <div>Follower</div>
      <div>Following</div>
      <div>Bio</div>
      {postCount === 0 ? (
        <div>No Posts</div>
      ) : (
        <div className="posts">
          {posts.map((_, idx) => (
            <Post
              src="https://via.placeholder.com/300"
              key={idx}
              className="post"
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
