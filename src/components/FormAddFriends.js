import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriends({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID;
  function handlerAddFriend(e) {
    e.preventDefault();
    if (name && image) {
      const newItem = {
        id,
        name,
        image: `${image}?=${id}`,
        balance: 0,
      };
      onAddFriend(newItem);
    }
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handlerAddFriend}>
      <label>👫Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>💥 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
