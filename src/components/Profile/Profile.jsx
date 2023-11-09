import React from "react";
import { Container, Image, Item, List, NameTitle } from "./Profile.style";

const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
        <Container className="profile">
  <div className="description">
    <Image
      src= {avatar}
      alt="User avatar"
      className="avatar"
    />
    <NameTitle className="name">{username}</NameTitle>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <List className="stats">
    <Item> 
      <span className="label">Followers: </span>
      <span className="quantity">{followers}</span>
    </Item>
    <Item>
      <span className="label">Views: </span>
      <span className="quantity">{views}</span>
    </Item>
    <Item>
      <span className="label">Likes: </span>
      <span className="quantity">{likes}</span>
    </Item>
  </List>
</Container>
    );
}

export default Profile;