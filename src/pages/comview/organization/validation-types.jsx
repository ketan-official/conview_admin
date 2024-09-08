import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Form validation schema using yup
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
  hashedPassword: yup.string().required("Password is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  postalCode: yup.string().required("Postal Code is required"),
  prov: yup.string().required("Province is required"),
  status: yup.string().required("Status is required"),
  isActive: yup.boolean().required("Active status is required"),
  role: yup.string().required("Role is required"),
}).required();

const ValidationTypes = () => {
  const [image, setImage] = useState(null); // State to store image file

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

  const onSubmit = (data) => {
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
      .post("http://localhost:5000/api/organization/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to handle file uploads
        },
      })
      .then((res) => {
        console.log(res.data);
        reset(); // Reset the form after successful submission
        setImage(null); // Reset image state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
        <Textinput
          label="Password"
          type="password"
          placeholder="Enter Password"
          name="hashedPassword"
          register={register}
          error={errors.hashedPassword}
        />
        <Textinput
          label="Status"
          type="text"
          placeholder="Enter Status"
          name="status"
          register={register}
          error={errors.status}
        />
        <Textinput
          label="Active Status"
          type="checkbox"
          name="isActive"
          register={register}
          error={errors.isActive}
        />
        <Textinput
          label="Role"
          type="text"
          placeholder="Enter Role"
          name="role"
          register={register}
          error={errors.role}
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
            <button className="btn bg-[#7656f3] hover:bg-[#6543f0] text-white text-center">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidationTypes;
