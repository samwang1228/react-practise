import React from "react";
const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <div>{note}</div>
      <p>{`${date} ${time}`}</p>
      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
