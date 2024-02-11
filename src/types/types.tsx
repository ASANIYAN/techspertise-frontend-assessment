import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export type CustomInputProps = {
  name: string;
  label: string;
  defaultType: string;
  method: UseFormReturn<any>;
};

export type ButtonProp = {
  children: ReactNode;
  handleClick: () => any;
};
