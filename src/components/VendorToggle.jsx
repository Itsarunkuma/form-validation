import React from "react";

const VendorToggle = ({ formData, setFormData }) => {
  return (
    <>
      <div className="sm:flex items-center gap-5 mt-3 justify-between">
        <label
          className="sm:min-w-[300px] min-w-[100px] text-[14px] sm:text-base"
          htmlFor=""
        >
          Vendor common for Sales Purchase
        </label>
        <div className="slideThree mt-1 sm:mt-0">
          <input
            onChange={(e) =>
              setFormData({ ...formData, vendorCommon: e.target.value })
            }
            type="checkbox"
            id="common_vendor"
            name="check"
            checked={formData.vendorCommon}
          />
          <label htmlFor="common_vendor"></label>
        </div>
      </div>
      <div className="sm:flex items-center gap-5 mt-3 justify-between">
        <label
          className="sm:min-w-[300px] min-w-[100px] text-[14px] sm:text-base"
          htmlFor=""
        >
          Is sub Vendor
        </label>
        <div className="slideThree mt-1 sm:mt-0">
          <input
            onChange={(e) =>
              setFormData({ ...formData, subVendor: e.target.value })
            }
            type="checkbox"
            id="vendor"
            name="check2"
            checked={formData.subVendor}
          />
          <label htmlFor="vendor"></label>
        </div>
      </div>
    </>
  );
};

export default VendorToggle;
