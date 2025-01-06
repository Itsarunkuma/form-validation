import React from "react";

const VendorToggle = () => {
  return (
    <>
      <div className="sm:flex items-center gap-5 mt-3 justify-between">
        <label
          className="sm:min-w-[300px] min-w-[100px] text-[14px] sm:text-base"
          htmlFor=""
        >
          Vendor common for Sales Purchase
        </label>
        <div class="slideThree mt-1 sm:mt-0">
          <input type="checkbox" value="None" id="common_vendor" name="check" />
          <label for="common_vendor"></label>
        </div>
      </div>
      <div className="sm:flex items-center gap-5 mt-3 justify-between">
        <label
          className="sm:min-w-[300px] min-w-[100px] text-[14px] sm:text-base"
          htmlFor=""
        >
          Is sub Vendor
        </label>
        <div class="slideThree mt-1 sm:mt-0">
          <input type="checkbox" value="None" id="vendor" name="check" />
          <label for="vendor"></label>
        </div>
      </div>
    </>
  );
};

export default VendorToggle;
