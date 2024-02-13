"use client";

import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

import SideBar from "../sidebar/sidebar";

type AuthWrapperProps = {
  children: ReactElement | ReactElement[];
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if "techspertiseToken" is in localStorage
    const techspertiseToken = localStorage.getItem("techspertiseToken");

    if (!techspertiseToken) {
      // If "techspertiseToken" is not present, redirect to sign up page
      router.push("/sign-in");
    }
    // If "techspertiseToken" is present, stay on the current page

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="h-full">
      <section className="flex h-screen">
        <section className="h-full box-border hidden lg:block">
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
