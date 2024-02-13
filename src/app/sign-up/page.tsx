"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import Button from "@/components/button/button";
import { CustomInput } from "@/components/inputs/custom-input";

import signup_img from "../../../public/assets/images/signup-img.png";
import { SuccessToast } from "@/components/toast/toasts";
import ErrorDisplayHandler from "@/utils/helpers/error-display-handler";
import UnauthWrapper from "@/components/wrapper/unauth-wrapper";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("firstname is required"),
  lastname: yup.string().required("lastname is required"),
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
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const signUpUser = async (payload: SignupFormValues) => {
  const response = await axios.post(
    `https://devapi.omacart.com/signup`,
    payload
  );
  return response;
};

const SignUp = () => {
  const router = useRouter();
  const method = useForm<SignupFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationKey: ["signUpUser"],
    mutationFn: signUpUser,
    onSuccess: () => {
      SuccessToast("Account created successfully");
      router.push("sign-in");
    },
  });

  const { handleSubmit } = method;

  const handleSignup = (data: SignupFormValues) => {
    mutate(data);
  };

  useEffect(() => {
    console.log(error, "request error");
  }, [error]);
  return (
    <UnauthWrapper>
      <section className="flex justify-center h-full">
        <section className="w-[60%] hidden xl:block">
          <Image src={signup_img} className="h-full" alt="signup-img" />
        </section>
        <section className="h-full flex flex-col justify-center items-center flex-1 pt-5 px-3 sm:px-0">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center text-color1">
            {" "}
            Sign up{" "}
          </h1>
          <section className="flex flex-col pt-4 h-full w-full max-w-[400px]">
            <CustomInput
              name="firstname"
              defaultType="text"
              placeholder="Enter your first name"
              label="First name*"
              method={method}
            />
            <CustomInput
              name="lastname"
              defaultType="text"
              placeholder="Enter your last name"
              label="Last name*"
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
            <section
              className={`w-full flex justify-center mt-2.5 ${
                isPending ? "opacity-70" : ""
              }`}
            >
              <Button
                disabled={isPending}
                handleClick={handleSignup}
                handleSubmit={handleSubmit}
              >
                Get started
              </Button>
            </section>

            <section className="my-2.5 text-center font-light text-error">
              {ErrorDisplayHandler(isError, error)}
            </section>

            <p className="text-sm text-center font-normal mt-2">
              {" "}
              Already have an account?{" "}
              <Link href={"sign-in"}>
                <span className="text-color5 font-medium ml-0.5 md:cursor-pointer">
                  {" "}
                  Log in{" "}
                </span>{" "}
              </Link>
            </p>
          </section>
        </section>
      </section>
    </UnauthWrapper>
  );
};

export default SignUp;
