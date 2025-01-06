import React from "react";
import CustomSelect from "./CustomSelect";
import ImageUpload from "./ImageUpload";
import VendorToggle from "./VendorToggle";

const Form = () => {
  return (
    <div className="max-w-[1500px] mx-auto sm:py-10 py-5 sm:px-10 px-5">
      <form action="">
        <div className="lg:flex gap-10">
          <div className="lg:w-[70%] w-full">
            <div className="sm:flex items-center sm:gap-5 gap-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                GST No
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 mb-2 sm:my-0"
                type=""
                name=""
                id=""
              />
              <button className="px-4 sm:py-[6px] py-1 whitespace-nowrap bg-blue-900 text-white text-[14px] rounded-[2px]">
                Fetch Info
              </button>
            </div>
            <div className="sm:flex items-center gap-5 mt-5">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Name
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder="Name"
                name=""
                id=""
              />
            </div>
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Print Name
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Identification
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Code
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <CustomSelect />
            <VendorToggle />
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Firm Status
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
            <CustomSelect />
            <CustomSelect />
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Contact Person
              </label>
              <input
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
              />
            </div>
          </div>
          <div className="lg:w-[30%] w-full mt-5 lg:mt-0">
            <ImageUpload />
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            className="px-4 py-[6px] whitespace-nowrap bg-blue-900 text-white text-[14px] rounded-[2px]"
            type="submit"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
