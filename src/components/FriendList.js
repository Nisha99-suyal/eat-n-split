import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, selectedFriend, onSelection }) {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
