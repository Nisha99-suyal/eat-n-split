import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriends from "./components/FormAddFriends";
import Button from "./components/Button";
import FromSplitBill from "./components/FromSplitBill";
import { useState } from "react";
function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [addFriend, setAddFriend] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handlerAddFriend(friends) {
    setAddFriend((friend) => [...friend, friends]);
    setShowFriend(false);
  }

  function handleSelectFriend(friends) {
    setSelectedFriend((cur) => (cur?.id === friends?.id ? "" : friends));
    setShowFriend(false);
  }

  function handleSplitBill(value) {
    setAddFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={addFriend}
          selectedFriend={selectedFriend}
          onSelection={handleSelectFriend}
        />

        {showFriend === true && (
          <FormAddFriends onAddFriend={handlerAddFriend} />
        )}

        <Button onClick={() => setShowFriend((show) => !show)}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FromSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
