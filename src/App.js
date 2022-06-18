import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import "./styles.css";
const getdata = () => {
  return axios({
    url: "https://dummyjson.com/products",
    method: "GET"
  });
};
console.log(getdata);
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata().then((d) => {
      setData(d.data.products);
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Navbar />

      <div className="product_item">
        {data.map((item) => {
          return <Home {...item} />;
        })}
      </div>
    </div>
  );
}
