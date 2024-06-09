import React from "react";

const TogglePill = ({ isGiftedProduct, setIsGiftedProduct }) => {
  const handleCheckboxChange = () => {
    setIsGiftedProduct(!isGiftedProduct);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isGiftedProduct}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isGiftedProduct ? "bg-[#FF3B6E]" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isGiftedProduct ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default TogglePill;
