import React from "react";

const VendorToggle = () => {
  return (
    <>
      <div className="flex items-center gap-5 mt-3 justify-between">
        <label className="min-w-[300px]" htmlFor="">
          Vendor common for Sales Purchase
        </label>
        <div class="slideThree">
          <input type="checkbox" value="None" id="common_vendor" name="check" />
          <label for="common_vendor"></label>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-3 justify-between">
        <label className="min-w-[300px]" htmlFor="">
          Is sub Vendor
        </label>
        <div class="slideThree">
          <input type="checkbox" value="None" id="vendor" name="check" />
          <label for="vendor"></label>
        </div>
      </div>
    </>
  );
};

export default VendorToggle;
