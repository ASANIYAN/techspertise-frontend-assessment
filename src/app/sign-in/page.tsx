"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "@/components/button/button";
import { CustomInput } from "@/components/inputs/custom-input";

import signin_img from "../../../public/assets/images/signin-img.png";
import Image from "next/image";
import Link from "next/link";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("invalid email address")
    .required("email address is required"),
  password: yup.string().required("password is required"),
});

type SigninFormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const method = useForm<SigninFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit } = method;

  const handleLogin = () => {};

  return (
    <section className="flex justify-center h-screen">
      <section className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center px-3">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center text-color1">
          {" "}
          Welcome back{" "}
        </h1>
        <p className="text-sm lg:text-base font-normal text-center text-color2 mt-1 sm:mt-3">
          {" "}
          Welcome back! Please enter your details.{" "}
        </p>
        <section className="flex flex-col mt-16 w-full max-w-[360px] mx-auto">
          <CustomInput
            name="email"
            defaultType="text"
            placeholder="Enter your email"
            label="Email"
            method={method}
          />
          <CustomInput
            name="password"
            defaultType="password"
            placeholder="Enter your password"
            label="Password"
            method={method}
          />
          <section className="flex flex-wrap justify-center gap-2.5 xxs:justify-between items-center mt-2">
            <section className="flex items-center gap-2.5">
              <input
                type="checkbox"
                className="border border-color7 w-[16px] h-[16px] rounded md:cursor-pointer"
              />
              <span className="font-medium text-xs xs:text-[13px] sm:text-sm text-color3">
                {" "}
                Remember for 30 days{" "}
              </span>
            </section>
            <span className="font-semibold text-xs xs:text-[13px] sm:text-sm text-color4 md:cursor-pointer">
              {" "}
              Forgot password{" "}
            </span>
          </section>
          <section className="w-full flex justify-center mt-6">
            <Button handleClick={handleLogin} handleSubmit={handleSubmit}>
              Log in
            </Button>
          </section>
        </section>
        <p className="text-sm font-normal mt-8">
          {" "}
          Don&apos;t have an account?{" "}
          <Link href={"sign-up"}>
            <span className="text-color5 font-medium ml-0.5 mt-10 md:cursor-pointer">
              {" "}
              Sign up{" "}
            </span>{" "}
          </Link>
        </p>
      </section>
      <Image
        src={signin_img}
        alt="signin_img"
        className="h-full w-1/2 hidden xl:block"
      />
    </section>
  );
};

export default SignIn;
