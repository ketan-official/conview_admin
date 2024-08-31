import React, { useEffect, useState } from "react";
import ContaintCard from "../../common/ContaintCard";
import axios from "axios";

const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://conview-backend.onrender.com/api/assets/getAll`)
      .then((res) => {
        console.log(11,res.data.data);
        setData(res.data.data);
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
