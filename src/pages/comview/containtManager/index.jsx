import React, { useEffect, useState } from "react";
import ContaintCard from "../../common/ContaintCard";
import axios from "axios";

const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/assets/getAll`)
      .then((res) => {
        const data = res.data.data;
        const revData = data.reverse();
        setData(revData);
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
