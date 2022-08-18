import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
const Edit = ({ add , submittingStatus }) => {
  const [buy_price, setBuy] = useState("");
  function buyChange(e) {
    setBuy(e.target.value);
  }
  const [sid, setId] = useState("");
  function idChange(e) {
    setId(e.target.value);
  }
  const [sell_price, setSell] = useState("");
  function sellChange(e) {
    setSell(e.target.value);
  }
  const [buy_date, setBuyDate] = useState("");
  function buyDateChange(e) {
    setBuyDate(e.target.value);
  }
  const [sell_date, setSellDate] = useState("");
  function sellDateChange(e) {
    setSellDate(e.target.value);
  }
  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [
        {
          id: v4(),
          sid,
          buy_price,
          buy_date,
          sell_price,
          sell_date,
        },
        ...prevData,
      ];
    });
  }
  // console.log(note, date, time);
  return (
    <div>
      <h1>台股記帳</h1>
      <p>股票代號：</p>
      <input type="text" value={sid} onChange={idChange} />
      <p>買入價格：</p>
      <input type="text" value={buy_price} onChange={buyChange} />
      <p>買入日期：</p>
      <input type="date" value={buy_date} onChange={buyDateChange} />
      <p>賣出價格：</p>
      <input type="text" value={sell_price} onChange={sellChange} />
      <p>賣出日期：</p>
      <input type="date" value={sell_date} onChange={sellDateChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
