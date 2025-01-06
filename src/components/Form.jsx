import React from "react";
import { CrossIcon } from "./Icons";
import ImageUpload from "./ImageUpload";
import VendorToggle from "./VendorToggle";
import CustomSelect from "./CustomSelect";

const Form = () => {
  return (
    <div className="max-w-[1500px] mx-auto py-10 px-10">
      <form action="">
        <div className="flex gap-10">
          <div className="w-[70%]">
            <div className="flex items-center gap-5">
              <label className="min-w-[300px]" htmlFor="">
                GST No
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                name=""
                id=""
              />
              <button className="px-4 py-[6px] whitespace-nowrap bg-blue-900 text-white text-[14px] rounded-[2px]">
                Fetch Info
              </button>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <label className="min-w-[300px]" htmlFor="">
                Name
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center gap-5 mt-3">
              <label className="min-w-[300px]" htmlFor="">
                Print Name
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <div className="flex items-center gap-5 mt-3">
              <label className="min-w-[300px]" htmlFor="">
                Identification
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <div className="flex items-center gap-5 mt-3">
              <label className="min-w-[300px]" htmlFor="">
                Code
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <CustomSelect />
            <VendorToggle />
            <div className="flex items-center gap-5 mt-3">
              <label className="min-w-[300px]" htmlFor="">
                Firm Status
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <CustomSelect />
            <CustomSelect />
            <div className="flex items-center gap-5 mt-3">
              <label className="min-w-[300px]" htmlFor="">
                Contact Person
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px]"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <div className="text-center mt-10">
              <button
                className="px-4 py-[6px] whitespace-nowrap bg-blue-900 text-white text-[14px] rounded-[2px]"
                type="submit"
              >
                Done
              </button>
            </div>
          </div>
          <div className="w-[30%]">
            <ImageUpload />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
