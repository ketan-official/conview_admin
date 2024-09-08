import React, { useEffect, useState } from "react";
import ContaintCard from "../../common/ContaintCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/assets/get-user/${user.user._id}`)
      .then((res) => {
        console.log(res.data.Data);
        setData(res.data.Data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
const onEdit = (id)=>{
  console.log(22,id)
  navigate(`/assets/${id}`);
}
  return (
    <>
      {data.length > 0 &&
        data.map((item) => <ContaintCard key={item._id} data={item} onEdit={onEdit}/>)}
    </>
  );
};

export default index;
