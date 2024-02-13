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
    <section className="flex flex-wrap gap-4 items-center justify-center min-[580px]:justify-between">
      <section className="flex items-center min-[580px]:items-start flex-col gap-1.5">
        <h1 className="font-semibold text-xl xs:text-2xl lg:text-3xl text-black">
          {" "}
          {heading}
        </h1>
        <p className="text-color6 text-xs xs:text-sm lg:text-base font-normal max-[580px]:text-center">
          {" "}
          {text}
        </p>
      </section>
      <section className="flex items-center gap-5">{children}</section>
    </section>
  );
};
