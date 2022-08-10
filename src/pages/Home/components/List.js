import React from "react";
import Item from "./Item";
// return裡要引用js要加上{}變數也是
// const arr = [1,2,3]
const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
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
