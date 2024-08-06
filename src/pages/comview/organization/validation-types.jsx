import React from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValidationSchema = yup
  .object({
    CompanyName: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    phone: yup.number().required().positive(),
  })
  .required();

const ValidationTypes = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:grid-cols-2 grid gap-5 grid-cols-1 "
      >
        <Textinput
          label="Company Name"
          type="text"
          placeholder="Type your User Name"
          name="CompanyName"
          register={register}
          error={errors.CompanyName}
        />
        <Textinput
          label="First Name"
          type="text"
          placeholder="Enter Number Only"
          name="number"
          register={register}
          error={errors.firstName}
        />
        <Textinput
          label="Last  Name"
          type="text"
          placeholder="Enter Number Only"
          name="number"
          register={register}
          error={errors.lastName}
        />
        <Textinput
          label="address"
          type="text"
          placeholder="Enter Number between 1 & 10"
          name="address"
          register={register}
          error={errors.address}
        />
        <Textinput
          label="city"
          type="text"
          placeholder="Enter Number between 1 & 10"
          name="city"
          register={register}
          error={errors.city}
        />
        <Textinput
          label="Prov."
          type="text"
          placeholder="Enter Prov."
          name="prov"
          register={register}
          error={errors.prov}
        />
        <Textinput
          label="Postal Code"
          type="text"
          placeholder="Enter Postal Code "
          name="postalCode"
          register={register}
          error={errors.postalCode}
        />
        <Textinput
          label="Country"
          type="text"
          placeholder="Enter Country Name"
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
          type="number"
          placeholder="Enter Phone Number"
          name="phone"
          register={register}
          error={errors.phone}
        />

        <div className="lg:col-span-2 col-span-1">
          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn bg-[#7656f3] hover:bg-[#6543f0] text-white text-center">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidationTypes;
