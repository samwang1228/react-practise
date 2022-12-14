import React from "react";
import List from "./components/List";
import Edit from "./components/Edit";
import { useState, useEffect , useRef} from "react";
import { API_GET_DATA } from "../../global/constants";
// 今天用原本的js function寫會使得點下去on click後
// 不會重新render因此要用useState
// const [var,func] = useState(var的init)
// ------------
// const [a,setA] = useState(100)
//     function plus()
//     {
//         // setA(a+200) 這個寫法不好要用下面的 因為可能會有覆蓋問題
//         setA(function(prev){
//             return prev+200
//         })
//     }
// ---------------
import "./index.css";
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json()
  setData(data)
}
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
}
const Home = () => {
  // --------here
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current){
      return
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data])

  useEffect(() => {
    fetchData(setData);
  }, []);
  return (
    <div className="app">
      {/* <button onClick={plus}>加法</button> */}
      <Edit add={setData} submittingStatus={submittingStatus}></Edit>
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
  );
};

export default Home;
