import React, { useEffect, useState } from "react";
import ContaintCard from "../../common/ContaintCard";
import axios from "axios";

const index = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://conview-backend.onrender.com/api/assets/get-user/${user.user._id}`)
      .then((res) => {
        console.log(res.data.Data);
        setData(res.data.Data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {data.length > 0 &&
        data.map((item) => <ContaintCard key={item._id} data={item} />)}
    </>
  );
};

export default index;
