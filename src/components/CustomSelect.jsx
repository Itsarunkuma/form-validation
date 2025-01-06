import React, { useState } from "react";
import { PencilIcon, SelectArrow } from "./Icons";

const CustomSelect = ({
  label = "Select Option",
  placeholder = "Select ...",
  options = [],
  onSelect,
  allowSearch = true,
}) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelected(option);
    setSearch(""); // Reset search field
    setShow(false); // Hide dropdown
    if (onSelect) onSelect(option); // Pass selected option to parent
  };

  return (
    <div className="sm:flex items-center gap-5 mt-3">
      <label
        className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
        htmlFor=""
      >
        {label}
      </label>
      <div className="flex w-full gap-1">
        <div className="border w-full rounded-[2px] relative mt-1 sm:mt-0">
          <div className="flex items-center px-3 py-1">
            {allowSearch ? (
              <input
                id="select"
                type="text"
                value={search || selected}
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setShow(true)}
                placeholder={placeholder}
                className="w-full outline-none text-[14px] text-[#000]"
              />
            ) : (
              <p
                onClick={() => setShow(!show)}
                className="w-full cursor-pointer text-[14px] text-[#9CA3AF]"
              >
                {selected || placeholder}
              </p>
            )}
            <span
              className={`absolute right-[10px] top-[50%] translate-y-[-50%] transition-all ease-in-out duration-200 ${
                show ? "rotate-[90deg]" : ""
              }`}
              onClick={() => setShow(!show)}
            >
              <SelectArrow />
            </span>
          </div>
          {show && (
            <ul className="absolute bg-white border w-full z-10 p-2 max-h-40 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="cursor-pointer px-3 py-1 hover:bg-gray-200 text-[14px]"
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li
                  className="px-1 py-1 text-gray-500 text-[14px]"
                  onClick={() => handleSelect("")}
                >
                  No options found
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="flex gap-1">
          <label
            id="select"
            className="bg-blue-900 p-[6px] rounded-[2px] flex flex-col justify-center items-center cursor-pointer"
          >
            <PencilIcon />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
