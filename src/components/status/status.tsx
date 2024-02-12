import { FaCheck } from "react-icons/fa6";

const Active = () => {
  return (
    <p className="w-fit bg-color9 text-xs py-0.5 px-2 text-color10 font-medium rounded-2xl flex items-center justify-center gap-1.5">
      {" "}
      <FaCheck />
      Active{" "}
    </p>
  );
};

const Inactive = () => {
  return (
    <p className="w-fit bg-color9 text-xs py-0.5 px-2 text-color11 font-medium rounded-2xl flex items-center justify-center gap-1.5">
      {" "}
      <FaCheck />
      Inactive{" "}
    </p>
  );
};

const Status = ({ value }: { value: string }) => {
  let status = value?.toLowerCase().trim();
  return (
    <>
      {status === "active" && <Active />}
      {status === "inactive" && <Inactive />}
    </>
  );
};

export default Status;
