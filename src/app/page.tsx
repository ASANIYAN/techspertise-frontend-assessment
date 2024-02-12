"use client";

import Button from "@/components/button/button";
import { AuthPagesHeading } from "@/components/heading/heading";
import AuthWrapper from "@/components/wrapper/auth-wrapper";
import { Add } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  const handleAddStudent = () => {};

  const studentsInfo = [
    { heading: "Total Students", number: "2420" },
    { heading: "Active Students", number: "1,210" },
  ];
  return (
    <main className="">
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
        <section className="mt-5 flex gap-5">
          {studentsInfo.map((info) => (
            <section
              key={info.heading}
              className="shadow-sm border border-gray-200 rounded-xl p-6 w-full max-w-[540px]"
            >
              <h3 className="text-black font-medium text-base">
                {" "}
                {info.heading}{" "}
              </h3>
              <p className="font-semibold text-4xl text-black mt-5">
                {" "}
                {info.number}{" "}
              </p>
            </section>
          ))}
        </section>
        <section></section>
      </AuthWrapper>
    </main>
  );
}
