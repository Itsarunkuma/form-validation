import React, { useState } from "react";
import { SelectArrow } from "./Icons";

const CustomSelect = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="sm:flex items-center gap-5 mt-3">
      <label
        className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
        htmlFor=""
      >
        Under Ledger
      </label>
      {/* SELECT */}
      <div className="border w-full rounded-[2px] relative mt-1 sm:mt-0">
        <p
          className="px-3 py-1 relative cursor-pointer text-[14px] text-[#9CA3AF]"
          onClick={() => setShow(!show)}
        >
          Select ....
          <span
            className={`absolute right-[10px] top-[50%] translate-y-[-50%] transition-all ease-in-out duration-200 ${
              show ? "rotate-[90deg]" : ""
            }`}
          >
            <SelectArrow />
          </span>
        </p>
        {show && (
          <ul className="absolute bg-red-400 w-full z-10 p-3">
            <li onClick={() => setShow(false)} className="cursor-pointer">
              option 1
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
