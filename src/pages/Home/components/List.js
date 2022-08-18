import React from "react";
import Item from "./Item";
// return裡要引用js要加上{}變數也是
// const arr = [1,2,3]
const List = ({ listData, deleteData , submittingStatus}) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { sid, buy_price, buy_date,sell_price,sell_date, id } = item;
        return (
          <Item
            key={id}
            id={id}
            sid={sid}
            buy_price={buy_price}
            buy_date={buy_date}
            sell_price={sell_price}
            sell_date={sell_date}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
{
  /* {
        arr.map(item=><div>{item}</div>)
    } */
}
