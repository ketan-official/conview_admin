import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Index = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [section, setSection] = useState([]);
  const [subsection, setsubSection] = useState([]);
  const [formData, setFormData] = useState({
    assetNumber: "Auto Generate",
    section: "",
    subsection: "",
    description: "",
    additionalParam1: "",
    additionalParam2: "",
    additionalParam3: "",
    additionalParam4: "",
    other: "",
    image: null,
    userId: user.user._id,
  });
  useEffect(() => {
    axios
      .get("https://conview-backend.onrender.com/api/sub-sec/get-by-sec")
      .then((res) => {
        console.log(23, res.data);
        setSection(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.section) newErrors.section = "Section is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Tada!", formData);
      // Reset form (except for assetNumber which is auto-generated)
      axios
        .post("https://conview-backend.onrender.com/api/assets/create", formData)
        .then((res) => {
          console.log(res.data);
          toast.success("asset Submitted Succefully...");
        })
        .catch((err) => {
          console.log(err);
        });
      setFormData({
        ...formData,
        section: "",
        subsection: "",
        description: "",
        additionalParam1: "",
        additionalParam2: "",
        additionalParam3: "",
        additionalParam4: "",
        other: "",
        image: null,
      });
      setImagePreview(null);
      setErrors({});
    }
  };
  const getsubCat = (id) => {
    const SubSec = section.find((item) => item._id === id);
    console.log(95, SubSec.subcategories);
    setsubSection(SubSec.subcategories);
    setFormData({
      ...formData,
      section: id,
    });
  };
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Add New Asset
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          {/* Asset Number */}
          {/* <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-2" htmlFor="assetNumber">
              Asset Number*
            </label>
            <input
              type="text"
              name="assetNumber"
              id="assetNumber"
              value={formData.assetNumber}
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              disabled
            />
          </div> */}

          {/* Section */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium mb-2" htmlFor="section">
              Section*
            </label>
            <select
              name="section"
              id="section"
              value={formData.section}
              onChange={(e) => getsubCat(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              {section.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            {errors.section && (
              <span className="text-red-500 text-sm">{errors.section}</span>
            )}
          </div>

          {/* Subsection */}
          <div className="col-span-2 md:col-span-1">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="subsection"
            >
              Subsection
            </label>
            <select
              name="subsection"
              id="subsection"
              value={formData.subsection}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              {subsection.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="description"
            >
              Description*
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Description of Asset"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description}</span>
            )}
          </div>

          {/* Additional Parameters */}
          <div className="col-span-2 md:col-span-1">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="additionalParam1"
            >
              Additional Parameters
            </label>
            <select
              name="additionalParam1"
              id="additionalParam1"
              value={formData.additionalParam1}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select</option>
              <option value="param1">Parameter 1</option>
            </select>
          </div>

          <div className="col-span-2 md:col-span-1 mt-7">
            <select
              name="additionalParam2"
              id="additionalParam2"
              value={formData.additionalParam2}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select</option>
              <option value="param2">Parameter 2</option>
            </select>
          </div>

          <div className="col-span-2 md:col-span-1">
            <select
              name="additionalParam3"
              id="additionalParam3"
              value={formData.additionalParam3}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select</option>
              <option value="param3">Parameter 3</option>
            </select>
          </div>

          <div className="col-span-2 md:col-span-1">
            <select
              name="additionalParam4"
              id="additionalParam4"
              value={formData.additionalParam4}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="">Select</option>
              <option value="param4">Parameter 4</option>
            </select>
          </div>

          {/* Other */}
          <div className="col-span-2">
            <input
              type="text"
              name="other"
              id="other"
              placeholder="Other"
              value={formData.other}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Asset Image Upload */}
        <div className="col-span-2 mt-6">
          <label className="block text-sm font-medium mb-2">Asset Image</label>
          <div className="border border-gray-300 p-4 rounded-md flex flex-col items-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-24 h-24 rounded-md mb-4"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h18M9 9v12m6-12v12M9 9l6-6m0 0L9 3m6 6l6-6"
                  />
                </svg>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageUpload"
            />
            <label
              htmlFor="imageUpload"
              className="cursor-pointer px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              Select image
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-8">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-4"
            onClick={() => setFormData({})}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
