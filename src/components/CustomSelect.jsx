import React, { useEffect, useState } from "react";
import { PencilIcon, SelectArrow, Star } from "./Icons";

const CustomSelect = ({
  label,
  id,
  arr,
  formData,
  setFormData,
  resetTrigger,
  required,
}) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [write, setWrite] = useState(false);
  const [selected, setSelected] = useState("");

  const filteredOptions =
    arr &&
    arr.filter((option) => option.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (option) => {
    setSelected(option);
    setShow(false);
  };

  useEffect(() => {
    if (search !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [search]);
  useEffect(() => {
    setSelected("");
  }, [resetTrigger]);
  return (
    <div className="sm:flex items-center gap-5 mt-3">
      <label
        className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base flex items-center gap-1"
        htmlFor={id}
      >
        {label} {required && <Star />}
      </label>
      <div className="flex w-full gap-1">
        <div className="border w-full rounded-[2px] relative mt-1 sm:mt-0">
          <div className="flex items-center px-3 py-1">
            {write ? (
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Type here..."
                id={id}
                className="border-none w-full outline-none"
              />
            ) : (
              <p
                onClick={() => setShow(!show)}
                className="w-full cursor-pointer text-[14px] "
              >
                {selected || <span className="text-[#9CA3AF]">Select ...</span>}
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
                    onClick={() => {
                      handleSelect(option);
                      setFormData({ ...formData, [id]: option });
                      setWrite(false);
                    }}
                    className="cursor-pointer px-3 py-1 hover:bg-gray-200 text-[14px]"
                  >
                    {option}
                  </li>
                ))
              ) : (
                <li
                  className="px-1 py-1 text-gray-500 text-[14px]"
                  onClick={() => {
                    handleSelect("");
                    setWrite(false);
                  }}
                >
                  No options found
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="flex gap-1">
          <label
            onClick={() => setWrite(true)}
            id={id}
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
