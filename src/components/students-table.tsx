"use client";

import { createColumnHelper } from "@tanstack/react-table";
import Status from "./status/status";
import Table from "./table/table";
import { useState } from "react";

const studentArray = [
  {
    description: "Tunde Owokoniran",
    course: "Product design",
    joined: "Jan 4, 2021",
    cohort: "Cohort 1",
    status: "Inactive",
    dots: "",
    checkbox: { id: 1, label: "Checkbox 1", isChecked: false },
  },
  {
    description: "Olanrewaju Oluwagbemi",
    course: "Web development",
    joined: "Jan 6, 2022",
    cohort: "Cohort 2",
    status: "Active",
    dots: "",
    checkbox: { id: 2, label: "Checkbox 2", isChecked: false },
  },
  {
    description: "Olakunke Isreal",
    course: "Mobile development",
    joined: "Jan 7, 2022",
    cohort: "Cohort 1",
    status: "Inactive",
    dots: "",
    checkbox: { id: 3, label: "Checkbox 3", isChecked: false },
  },
  {
    description: "John Badmus",
    course: "Digital marketing",
    joined: "Cohort 1",
    cohort: "Jan 9, 2022",
    status: "Inactive",
    dots: "",
    checkbox: { id: 4, label: "Checkbox 4", isChecked: false },
  },
  {
    description: "Adeleke John",
    course: "Product design",
    joined: "Cohort 2",
    cohort: "Jan 8, 2022",
    status: "Active",
    dots: "",
    checkbox: { id: 5, label: "Checkbox 5", isChecked: false },
  },
  {
    description: "Judas Iscariot",
    course: "Web development",
    joined: "Cohort 1",
    cohort: "Jan 6, 2022",
    status: "Active",
    dots: "",
    checkbox: { id: 6, label: "Checkbox 6", isChecked: false },
  },
];

type columnItem = {
  description: string;
  course: string;
  joined: string;
  cohort: string;
  status: string;
  dots: string;
  checkbox: {
    id: number;
    label: string;
    isChecked: boolean;
  };
};

const StudentsTable = () => {
  const [students, setStudents] = useState(studentArray);
  const [masterCheckbox, setMasterCheckbox] = useState(false);

  const handleCheckboxChange = (id: number) => {
    const updatedCheckboxes = students.map((student) =>
      student.checkbox.id === id
        ? {
            ...student,
            checkbox: {
              ...student.checkbox,
              isChecked: !student.checkbox.isChecked,
            },
          }
        : student
    );

    setStudents(updatedCheckboxes);

    // Update master checkbox state based on individual checkboxes
    setMasterCheckbox(
      updatedCheckboxes.every((student) => student.checkbox.isChecked)
    );
  };

  const handleMasterCheckboxChange = () => {
    const updatedCheckboxes = students.map((student) => ({
      ...student,
      checkbox: { ...student.checkbox, isChecked: !masterCheckbox },
    }));

    setStudents(updatedCheckboxes);
    setMasterCheckbox(!masterCheckbox);
  };

  const columnHelper = createColumnHelper<columnItem>();
  const columns = [
    columnHelper.accessor(
      (row) =>
        `${row.description},${row.checkbox.id},${row.checkbox.label},${row.checkbox.isChecked}`,
      {
        id: "descriptionWithCheckboxInfo",
        cell: (info) => (
          <section className="flex items-center gap-2.5">
            <input
              id={`${info.getValue().split(",")[2]}`}
              type="checkbox"
              checked={
                info.getValue().split(",")[3].trim().toLowerCase() === "true"
              }
              onChange={() =>
                handleCheckboxChange(Number(info.getValue().split(",")[1]))
              }
              className="w-4 h-4 border text-gray-500 bg-gray-100 border-gray-300 rounded focus:ring-gray-600 focus:ring-0 md:cursor-pointer"
            />
            <p className="text-gray-900 text-sm font-medium">
              {" "}
              {info.getValue().split(",")[0]}
            </p>
          </section>
        ),
        header: () => (
          <section className="flex items-center gap-2.5">
            <input
              id={`all-check`}
              type="checkbox"
              checked={masterCheckbox}
              onChange={handleMasterCheckboxChange}
              className="w-4 h-4 border text-gray-500 bg-gray-100 border-gray-300 rounded focus:ring-gray-600 focus:ring-0 md:cursor-pointer"
            />
            <span className="font-medium text-gray-500 text-xs">
              {" "}
              Description{" "}
            </span>
          </section>
        ),
      }
    ),
    columnHelper.accessor("course", {
      cell: (info) => (
        <p className="text-gray-500 w-fit text-sm font-normal">
          {" "}
          {info.getValue()}{" "}
        </p>
      ),
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> Course </span>
      ),
    }),
    columnHelper.accessor("joined", {
      cell: (info) => (
        <p className="text-gray-500 w-fit text-sm font-normal">
          {" "}
          {info.getValue()}{" "}
        </p>
      ),
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> Date joined </span>
      ),
    }),
    columnHelper.accessor("cohort", {
      cell: (info) => (
        <p className="text-gray-500 w-fit text-sm font-normal">
          {" "}
          {info.getValue()}{" "}
        </p>
      ),
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> Cohort </span>
      ),
    }),
    columnHelper.accessor("status", {
      cell: (info) => <Status value={info.getValue()} />,
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> Status </span>
      ),
    }),
    columnHelper.accessor("dots", {
      cell: (info) => (
        <section className="flex flex-col items-center gap-1">
          <div className="bg-gray-400 rounded-full h-[4px] w-[4px] font-normal" />
          <div className="bg-gray-400 rounded-full h-[4px] w-[4px] font-normal" />
          <div className="bg-gray-400 rounded-full h-[4px] w-[4px] font-normal" />
        </section>
      ),
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> </span>
      ),
    }),
  ];
  return (
    <section>
      <Table data={students} columns={columns} />
    </section>
  );
};

export default StudentsTable;
