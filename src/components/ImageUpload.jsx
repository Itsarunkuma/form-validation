import React, { useEffect, useState } from "react";
import { CrossIcon } from "./Icons";

const ImageUpload = ({ setFormData, formData, imgUrl, resetTrigger }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFormData({ ...formData, [imgUrl]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };
  useEffect(() => {
    setImage("");
  }, [resetTrigger]);
  return (
    <div className="border max-w-[300px] lg:mx-auto">
      <div className="bg-red-400 h-[200px] w-full relative">
        {image && (
          <>
            <span
              className="absolute top-[-10px] right-[-10px] cursor-pointer"
              onClick={handleRemoveImage}
            >
              <CrossIcon />
            </span>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Uploaded"
            />
          </>
        )}
        {!image && (
          <div className="flex justify-center items-center h-full text-white">
            No Image Uploaded
          </div>
        )}
      </div>
      <div className="py-4 text-center">
        <label htmlFor="image">
          <input
            type="file"
            id="image"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <span className="px-4 py-[6px] whitespace-nowrap bg-blue-900 text-white text-[14px] rounded-[2px] cursor-pointer">
            Browse
          </span>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
