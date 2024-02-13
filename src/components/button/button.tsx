"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

type ButtonProp = {
  children: ReactNode;
  handleSubmit?: UseFormHandleSubmit<any>;
  handleClick: SubmitHandler<any>;
};

const Button: React.FC<
  ButtonProp & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, handleClick, handleSubmit, ...rest }) => {
  return (
    <button
      onClick={handleSubmit ? handleSubmit(handleClick) : handleClick}
      className="bg-color5 flex items-center text-white border border-color5 transition-all hover:bg-white hover:text-color5 w-full text-xs xs:text-sm lg:text-base font-semibold text-center py-2.5 px-4 rounded-lg"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
