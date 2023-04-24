import { React } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  //schema for validation  is used for shaping our data is look like
  //yup as a bunch of code..object is used for specify the shape of the schema
  // 1
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required !"),
    email: yup.string().email().required("Email is Required !"),
    age: yup.number().positive().integer().required().min(18),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Don't match")
      .required(),
  });

  //here we pass an object
  //to wite the errors use formState
  const {
    register,
    handleSubmit,
    //3
    formState: { errors },
  } = useForm({
    //2
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Please enter your FullName"
          {...register("fullName")}
        />
        {/* 4 */}
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Please enter your Email id"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
          type="number"
          placeholder="Please enter your Age"
          {...register("age")}
        />
        <p>{errors.age?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Please enter the Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Please enter the Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
