"use client";

import Image from "next/image";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import signup_img from "../../../public/assets/images/signup-img.png";
import { CustomInput } from "@/components/inputs/custom-input";
import Button from "@/components/button/button";
import Link from "next/link";

const validationSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email("invalid email address")
    .required("email address is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("password is required"),
});

type SignupFormValues = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const method = useForm<SignupFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit } = method;

  const handleSignup = () => {};
  return (
    <section className="flex justify-center h-screen">
      <section className="w-[60%] hidden xl:block">
        <Image src={signup_img} className="h-full" alt="signup-img" />
      </section>
      <section className="h-full flex flex-col justify-center items-center flex-1 pt-8 px-3 sm:px-0">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center text-color1">
          {" "}
          Sign up{" "}
        </h1>
        <section className="flex flex-col mt-8 h-full w-full max-w-[400px]">
          <CustomInput
            name="name"
            defaultType="text"
            placeholder="Enter your name"
            label="Name*"
            method={method}
          />
          <CustomInput
            name="email"
            defaultType="text"
            placeholder="Enter your email"
            label="Email*"
            method={method}
          />
          <CustomInput
            name="password"
            defaultType="password"
            placeholder="Create a password"
            label="Password*"
            method={method}
          />
          {/* <span className="text-sm text-color6 font-normal -mt-3">
            {" "}
            Must be at least 8 characters.{" "}
          </span> */}
          <section className="w-full flex justify-center mt-5">
            <Button handleClick={handleSignup} handleSubmit={handleSubmit}>
              Get started
            </Button>
          </section>
          <p className="text-sm text-center font-normal mt-5">
            {" "}
            Already have an account?{" "}
            <Link href={"sign-in"}>
              <span className="text-color5 font-medium ml-0.5 mt-8 md:cursor-pointer">
                {" "}
                Log in{" "}
              </span>{" "}
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
};

export default SignUp;
