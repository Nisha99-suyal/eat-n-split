import React, { useState } from "react";
import Button from "./Button";
export default function FromSplitBill({ selectedFriend, onSplitBill }) {
  const [billPay, setBillPay] = useState("");
  const [payBillUser, setPayBillUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendPay = billPay ? billPay - payBillUser : "";

  function handlerSubmit(e) {
    e.preventDefault();
    if (!billPay || !payBillUser) return;
    onSplitBill(whoIsPaying === "user" ? friendPay : -payBillUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handlerSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill value</label>
      <input
        type="text"
        value={billPay}
        onChange={(e) => setBillPay(Number(e.target.value))}
      />

      <label>🙍‍♂️Your expense</label>
      <input
        type="text"
        value={payBillUser}
        onChange={(e) =>
          setPayBillUser(
            Number(e.target.value) > billPay
              ? friendPay
              : Number(e.target.value)
          )
        }
      />

      <label>🙍‍♀️{selectedFriend.name}'s expense</label>
      <input type="text" value={friendPay} disabled />

      <label>🤔Who is paying the bill </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
