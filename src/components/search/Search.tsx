import { SearchNormal1 } from "iconsax-react";
import React from "react";

const Search: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <section className="w-full xs:w-[400px]">
      <div className="flex items-center gap-3 border border-gray-300 p-2.5 px-3.5 rounded-lg w-full">
        <SearchNormal1 size="16" color="#667085" />
        <input
          className="h-full text-base text-gray-800 placeholder:text-gray-500 ring-0 focus:outline-none w-full font-normal"
          placeholder="Search"
          name="search"
          {...rest}
        />
      </div>
    </section>
  );
};

export default Search;
