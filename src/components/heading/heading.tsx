"use client";
import { ReactNode } from "react";

type AuthPagesHeadingProps = {
  heading: string;
  text: string;
  children: ReactNode | ReactNode[] | null | undefined;
};
export const AuthPagesHeading: React.FC<AuthPagesHeadingProps> = ({
  heading,
  text,
  children,
}) => {
  return (
    <section className="flex items-center justify-between">
      <section className="flex flex-col gap-1.5">
        <h1 className="font-semibold text-3xl text-black"> {heading}</h1>
        <p className="text-color6 text-base font-normal"> {text}</p>
      </section>
      <section className="flex items-center gap-5">{children}</section>
    </section>
  );
};
