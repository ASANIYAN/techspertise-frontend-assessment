import { Dispatch, SetStateAction, useState } from "react";

const SearchTab = ({
  setGlobalFilter,
}: {
  setGlobalFilter: Dispatch<SetStateAction<string>>;
}) => {
  const [active, setActive] = useState("All");
  const status = ["View all", "cohort", "course type"];
  const handleClick = (item: string) => {
    switch (item) {
      case "View all":
        setGlobalFilter("");
        setActive(item);
        break;
      case "cohort":
        setGlobalFilter("cohort");
        setActive(item);
        break;
      case "course type":
        setGlobalFilter("Pending");
        setActive(item);
        break;
      default:
        break;
    }
  };
  return (
    <section className="border border-gray-300 text-gray-700 text-[8px] xxs:text-[10px] xs:text-sm font-medium flex h-fit rounded-lg p-0.5">
      {status.map((item) => (
        <p
          key={item}
          className={`py-2.5 px-3.5 cursor-pointer ${
            item === "View all" ? "" : "border-l"
          } h-fit ${active === item && "text-gray-800"} `}
          onClick={() => handleClick(item)}
        >
          {" "}
          {item}{" "}
        </p>
      ))}
    </section>
  );
};

export default SearchTab;
