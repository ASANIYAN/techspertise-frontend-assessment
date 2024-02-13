"use client";

import { Add, HambergerMenu } from "iconsax-react";

import Button from "@/components/button/button";
import StudentsTable from "@/components/students-table";
import AuthWrapper from "@/components/wrapper/auth-wrapper";
import { AuthPagesHeading } from "@/components/heading/heading";
import { useState } from "react";
import NavbarMobile from "@/components/navbar-mobile/navbar-mobile";

const studentsInfo = [
  { heading: "Total Students", number: "2420" },
  { heading: "Active Students", number: "1,210" },
];
export default function Home() {
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false);

  const handleNavbarOpen = () => setDisplayNavbar(true);
  const handleNavbarClosure = () => setDisplayNavbar(false);

  const handleAddStudent = () => {};

  return (
    <main className="">
      <section className="w-full pt-5 px-5 block lg:hidden">
        <HambergerMenu size="32" color="#27779B" onClick={handleNavbarOpen} />
      </section>
      {displayNavbar && (
        <NavbarMobile handleNavbarClosure={handleNavbarClosure} />
      )}
      <AuthWrapper>
        <section className="mt-4">
          <AuthPagesHeading
            heading="Students"
            text="View and manage all your students from this portal"
          >
            <Button handleClick={handleAddStudent}>
              <Add size={20} className="mr-2" />
              Add Student
            </Button>
          </AuthPagesHeading>
        </section>
        <section className="mt-5 flex max-sm:flex-wrap justify-center sm:justify-start gap-5">
          {studentsInfo.map((info) => (
            <section
              key={info.heading}
              className="shadow-sm hover:shadow-md border border-gray-200 rounded-xl p-6 w-full max-w-[540px]"
            >
              <h3 className="text-black font-medium text-xs xs:text-sm lg:text-base">
                {" "}
                {info.heading}{" "}
              </h3>
              <p className="font-semibold text-2xl xs:text-3xl lg:text-4xl text-black mt-5">
                {" "}
                {info.number}{" "}
              </p>
            </section>
          ))}
        </section>
        <section className="mt-5">
          <StudentsTable />
        </section>
      </AuthWrapper>
    </main>
  );
}
