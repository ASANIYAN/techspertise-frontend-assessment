"use client";

import { ReactElement } from "react";

import SideBar from "../sidebar/sidebar";

type AuthWrapperProps = {
  children: ReactElement | ReactElement[];
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="h-screen">
      <section className="">
        <section className="flex flex-nowrap w-full">
          <section className="h-full">
            <SideBar />
          </section>
          <section className="w-full px-5 overflow-auto">{children}</section>
        </section>
      </section>
    </section>
  );
};

export default AuthWrapper;
