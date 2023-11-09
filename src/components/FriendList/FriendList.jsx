import React from "react";
import FriendItem from "./FriendItem";
import List from './FriendList.style'

const FriendList = ({ friends }) => {
    return (
    <List className="friend-list">
       { friends.map(el => {
        return (
        <FriendItem key={el.id} {...el}/>
        );          
    }) }
       
    </List>
    );
}

export default FriendList; 