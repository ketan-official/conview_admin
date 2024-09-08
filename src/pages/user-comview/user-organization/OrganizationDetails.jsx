import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizationDetails = ({ organization }) => {
  const navigate = useNavigate();
  const onEdit = ()=>{
    navigate(`/organization/${organization._id}`)
  }
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Organization Details</h1>
        <button
          onClick={onEdit}
          className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
        >
          Edit
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-700">Company Name</h5>
            <p>{organization?.companyName || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Address</h5>
            <p>{organization?.address || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">City</h5>
            <p>{organization?.city || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Country</h5>
            <p>{organization?.country || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Email</h5>
            <p>{organization?.email || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">First Name</h5>
            <p>{organization?.firstName || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Last Name</h5>
            <p>{organization?.lastName || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Phone</h5>
            <p>{organization?.phone || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Postal Code</h5>
            <p>{organization?.postalCode || "N/A"}</p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-700">Province</h5>
            <p>{organization?.prov || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
