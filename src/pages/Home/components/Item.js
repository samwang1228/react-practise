import React from "react";
const Item = ({ id, sid, buy_price, buy_date, sell_price,sell_date,deleteData ,submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>股票代號:{sid}</div>
      <div>買入：{`${buy_price} ${buy_date}`}</div>
      <div>賣出：{`${sell_price} ${sell_date}`}</div>
      <div>報酬率：{`${((sell_price-buy_price)/buy_price)*100} `}%</div>
      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
