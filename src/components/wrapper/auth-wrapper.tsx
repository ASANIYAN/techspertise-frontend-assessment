"use client";

import { ReactElement, useState } from "react";

import SideBar from "../sidebar/sidebar";
import NavbarMobile from "../navbar-mobile/navbar-mobile";
import { HambergerMenu } from "iconsax-react";

type AuthWrapperProps = {
  children: ReactElement | ReactElement[];
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);

  const handleNavbarOpen = () => setDisplayNavbar(true);
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
