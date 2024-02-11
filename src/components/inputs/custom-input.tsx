"use client";

import { useState } from "react";
import { Eye, EyeSlash } from "iconsax-react";

import { CustomInputProps } from "@/types/types";
import { ErrorMsg } from "../alerts/error-msg";
import { InputWrap } from "./input-wrap";

export const CustomInput: React.FC<
  CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ method, name, label, defaultType, ...rest }) => {
  const [isPassword, setIsPassword] = useState<string>(defaultType);
  const {
    formState: { errors },
    register,
  } = method;

  const togglePassword = () => {
    setIsPassword((prevInputType) =>
      prevInputType === "text" ? "password" : "text"
    );
  };

  return (
    <>
      <InputWrap>
        <label className="w-full mb-1.5 font-medium text-sm leading-5 text-color3">
          {" "}
          {label}{" "}
        </label>
        <input
          {...register(name)}
          className={`focus:outline-none border rounded-md p-4 text-base font-normal leading-[18px] text-color2 placeholder:text-sm placeholder:leading-5 placeholder:text-color2 bg-white ${
            errors[name] ? " border-error" : "border-color7"
          }`}
          name={name}
          type={isPassword}
          {...rest}
        />
        {defaultType === "password" && (
          <span
            onClick={togglePassword}
            className="absolute cursor-pointer translate-y-[42px] -translate-x-3 right-0"
          >
            {isPassword === "password" ? (
              <Eye width={15} height={10} color="#000" />
            ) : (
              <EyeSlash width={15} height={10} color="#000" />
            )}
          </span>
        )}
        {errors && (
          <ErrorMsg msg={errors[name]?.message ? errors[name]?.message : ""} />
        )}
      </InputWrap>
    </>
  );
};
