import React, { useEffect, useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";

// Form validation schema using yup, excluding password
const FormValidationSchema = yup.object({
  CompanyName: yup.string().required("Company Name is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  address: yup.string().required("Address is required"),
  phone: yup
    .number()
    .typeError("Phone number must be a number")
    .positive("Phone number must be positive")
    .required("Phone number is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  postalCode: yup.string().required("Postal Code is required"),
  prov: yup.string().required("Province is required"),
}).required();

const ValidationTypes = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null); // State to store image file
  const [loading, setLoading] = useState(false); // State to manage loading state for submit button
  const [organization, setOrganization] = useState(); // Update typo from "sertOrganization" to "setOrganization"

  // Fetch user data on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/getsingle/${id}`)
      .then((res) => {
        setOrganization(res.data.data);
        reset(res.data.data); // Populate form with fetched data
      })
      .catch((err) => console.log(err));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset, // This function will reset the form
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  // Handle image file change
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected image file in state
  };

  // Submit handler for updating the user details
  const onUpdate = (data) => {
    setLoading(true); // Set loading to true when submission starts

    const formData = new FormData(); // Create a new FormData object
    // Append all form fields to formData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // Append image file to formData if an image was selected
    if (image) {
      formData.append("image", image);
    }

    axios
      .put(`http://localhost:5000/api/user/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to handle file uploads
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false); // Stop loader after submission is successful
        alert("User details updated successfully!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Stop loader if there is an error
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onUpdate)} // Use onUpdate for form submission
        className="lg:grid-cols-2 grid gap-5 grid-cols-1"
        encType="multipart/form-data"
      >
        <Textinput
          label="Company Name"
          type="text"
          placeholder="Type your Company Name"
          name="CompanyName"
          register={register}
          error={errors.CompanyName}
        />
        <Textinput
          label="First Name"
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <Textinput
          label="Last Name"
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
        <Textinput
          label="Address"
          type="text"
          placeholder="Enter Address"
          name="address"
          register={register}
          error={errors.address}
        />
        <Textinput
          label="City"
          type="text"
          placeholder="Enter City"
          name="city"
          register={register}
          error={errors.city}
        />
        <Textinput
          label="Province"
          type="text"
          placeholder="Enter Province"
          name="prov"
          register={register}
          error={errors.prov}
        />
        <Textinput
          label="Postal Code"
          type="text"
          placeholder="Enter Postal Code"
          name="postalCode"
          register={register}
          error={errors.postalCode}
        />
        <Textinput
          label="Country"
          type="text"
          placeholder="Enter Country"
          name="country"
          register={register}
          error={errors.country}
        />
        <Textinput
          label="Email"
          type="email"
          placeholder="Enter Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <Textinput
          label="Phone Number"
          type="text"
          placeholder="Enter Phone Number"
          name="phone"
          register={register}
          error={errors.phone}
        />
        {/* Image upload input */}
        <div className="lg:col-span-2 col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-[#7656f3] file:text-white
            hover:file:bg-[#6543f0]"
          />
        </div>
        <div className="lg:col-span-2 col-span-1">
          <div className="ltr:text-right rtl:text-left">
            <button
              type="submit"
              className="btn bg-[#7656f3] hover:bg-[#6543f0] text-white text-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Updating..." : "Update"} {/* Show loader text if loading */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidationTypes;
