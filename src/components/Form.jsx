import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import ImageUpload from "./ImageUpload";
import VendorToggle from "./VendorToggle";
import { GlobeIcon } from "./Icons";
import { underLedgerData } from "./Helper";

const Form = () => {
  const initialState = {
    gstNo: "",
    name: "",
    printName: "",
    identification: "",
    code: "",
    underLedger: "",
    vendorCommon: false,
    subVendor: false,
    firmStatus: "",
    territory: "",
    vendorCategory: "",
    contactPerson: "",
    imgUrl: "",
  };
  const [formData, setFormData] = useState(initialState);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.printName &&
      formData.code &&
      formData.underLedger
    ) {
      console.log(formData, "formdata");
      setFormData(initialState);
    }
  };
  return (
    <div className="max-w-[1500px] mx-auto sm:py-10 py-5 sm:px-10 px-5">
      <form action="" onSubmit={onSubmitHandler}>
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
                onChange={(e) =>
                  setFormData({ ...formData, gstNo: e.target.value })
                }
                className="w-full border py-1 px-2 rounded-[2px] mt-1 mb-2 sm:my-0"
                type=""
                name=""
                id=""
                value={formData.gstNo}
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
              <div className="w-full flex gap-1">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                  type=""
                  placeholder="Name"
                  name=""
                  id=""
                  value={formData.name}
                />
                <span className="bg-blue-900 p-[6px] rounded-[2px] inline-block">
                  <GlobeIcon />
                </span>
              </div>
            </div>
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Print Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, printName: e.target.value })
                }
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
                value={formData.printName}
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
                onChange={(e) =>
                  setFormData({ ...formData, identification: e.target.value })
                }
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
                value={formData.identification}
              />
            </div>
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Code
              </label>
              <div className="w-full flex gap-1">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, code: e.target.value })
                  }
                  className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                  type=""
                  placeholder=""
                  name=""
                  id=""
                  value={formData.code}
                />
                <span className="bg-blue-900 p-[6px] rounded-[2px] inline-block">
                  <GlobeIcon />
                </span>
              </div>
            </div>
            <CustomSelect
              label="Under Ledger"
              id="underLedger"
              arr={underLedgerData}
              formData={formData}
              setFormData={setFormData}
            />
            <VendorToggle setFormData={setFormData} formData={formData} />
            <CustomSelect
              label="Firm Status"
              id="firmStatus"
              arr={underLedgerData}
              formData={formData}
              setFormData={setFormData}
            />
            <CustomSelect
              label="Territory"
              id="territory"
              arr={underLedgerData}
              formData={formData}
              setFormData={setFormData}
            />
            <CustomSelect
              label="Vendor Category"
              id="vendorCategory"
              arr={underLedgerData}
              formData={formData}
              setFormData={setFormData}
            />
            <div className="sm:flex items-center gap-5 mt-3">
              <label
                className="lg:min-w-[300px] sm:min-w-[200px] min-w-[100px] text-[14px] sm:text-base"
                htmlFor=""
              >
                Contact Person
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, contactPerson: e.target.value })
                }
                className="w-full border py-1 px-2 rounded-[2px] mt-1 sm:mt-0"
                type=""
                placeholder=""
                name=""
                id=""
                value={formData.contactPerson}
              />
            </div>
          </div>
          <div className="lg:w-[30%] w-full mt-5 lg:mt-0">
            <ImageUpload
              setFormData={setFormData}
              imgUrl="imgUrl"
              formData={formData}
            />
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
