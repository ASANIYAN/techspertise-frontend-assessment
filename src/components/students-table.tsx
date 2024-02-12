import { createColumnHelper } from "@tanstack/react-table";
import Status from "./status/status";
import Table from "./table/table";

const students = [
  {
    description: "Tunde Owokoniran",
    course: "Product design",
    joined: "Jan 4, 2021",
    cohort: "Cohort 1",
    status: "Inactive",
    dots: "",
  },
  {
    description: "Olanrewaju Oluwagbemi",
    course: "Web development",
    joined: "Jan 6, 2022",
    cohort: "Cohort 2",
    status: "Active",
    dots: "",
  },
  {
    description: "Olakunke Isreal",
    course: "Mobile development",
    joined: "Jan 7, 2022",
    cohort: "Cohort 1",
    status: "Inactive",
    dots: "",
  },
  {
    description: "John Badmus",
    course: "Digital marketing",
    joined: "Cohort 1",
    cohort: "Jan 9, 2022",
    status: "Inactive",
    dots: "",
  },
  {
    description: "Adeleke John",
    course: "Product design",
    joined: "Cohort 2",
    cohort: "Jan 8, 2022",
    status: "Active",
    dots: "",
  },
  {
    description: "Judas Iscariot",
    course: "Web development",
    joined: "Cohort 1",
    cohort: "Jan 6, 2022",
    status: "Active",
    dots: "",
  },
];

type columnItem = {
  description: string;
  course: string;
  joined: string;
  cohort: string;
  status: string;
  dots: string;
};

const StudentsTable = () => {
  const columnHelper = createColumnHelper<columnItem>();
  const columns = [
    columnHelper.accessor("description", {
      cell: (info) => (
        <p className="text-gray-900 text-sm font-medium"> {info.getValue()} </p>
      ),
      header: () => (
        <span className="font-medium text-gray-500 text-xs"> Description </span>
      ),
    }),
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
        <span className="font-medium text-gray-500 text-xs"> Status </span>
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
