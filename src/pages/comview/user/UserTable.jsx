import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";

// Custom styles for the DataTable
const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
      borderBottom: "1px solid #E5E7EB", // light gray border
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      backgroundColor: "#F3F4F6", // light gray background for header
      color: "#374151", // dark gray text
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      paddingLeft: "16px",
      paddingRight: "16px",
      color: "#4B5563", // medium gray text
    },
  },
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://conview-backend.onrender.com/api/user/getAll")
      .then((res) => {
        console.log(49,res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
      minWidth: "150px",
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      minWidth: "150px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      minWidth: "200px",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      minWidth: "150px",
    },
    {
      name: "Active",
      selector: (row) => (row.isActive ? "Yes" : "No"),
      sortable: true,
      minWidth: "100px",
      cell: (row) => (
        <span
          className={`px-2 py-1 rounded-full ${
            row.isActive
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {row.isActive ? "Yes" : "No"}
        </span>
      ),
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
      minWidth: "100px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          onClick={() => handleDelete(row.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      ),
      minWidth: "120px",
    },
  ];

  const handleDelete = (id) => {
    axios
    .delete(`https://conview-backend.onrender.com/api/user/delete/${id}`)
    .then((res) => {
      console.log(49,res.data.data);
      toast.success("User Deleted Sucesfully")
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="container mx-auto mt-5 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        User Management
      </h2>
      <DataTable
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
        className="rounded-lg"
      />
    </div>
  );
};

export default UserTable;
