"use client";

import { ReactElement } from "react";

import SideBar from "../sidebar/sidebar";

type AuthWrapperProps = {
  children: ReactElement | ReactElement[];
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="h-full">
      <section className="flex h-screen">
        <section className="h-full box-border">
          <SideBar />
        </section>
        <section className="w-full px-5 box-border flex-1 overflow-auto">
          {children}
        </section>
      </section>
    </section>
  );
};

export default AuthWrapper;
