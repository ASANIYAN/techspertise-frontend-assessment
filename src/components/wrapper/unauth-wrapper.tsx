"use client";

import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

type UnauthWrapper = {
  children: ReactElement | ReactElement[];
};

const UnauthWrapper: React.FC<UnauthWrapper> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if "techspertiseToken" is in localStorage
    const techspertiseToken = localStorage.getItem("techspertiseToken");

    if (techspertiseToken) {
      // If "techspertiseToken" present, redirect to dashboard
      router.push("/");
    }
    // If "techspertiseToken" is not present, stay on the current page

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

export default UnauthWrapper;
