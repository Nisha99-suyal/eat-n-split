import React from "react";
import Button from "./Button";

export default function Friend({ friend, selectedFriend, onSelection }) {
  const isSelected = selectedFriend?.id === friend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>
        {friend.balance < 0 && (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)}{" "}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}
          </p>
        )}
        {friend.balance === 0 && (
          <p className="black">You and {friend.name} are even</p>
        )}
      </p>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
