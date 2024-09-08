import React, { useEffect, useState } from "react";
import OrganizationDetails from "./OrganizationDetails";
import axios from "axios";

const index = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [organization, sertOrganization] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/getsingle/${user.user._id}`)
      .then((res) => sertOrganization(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <OrganizationDetails organization={organization} />
    </>
  );
};

export default index;
