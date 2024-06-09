import React from "react";

const CommonPurchaseItem = ({ product }) => {
  return (
    <div
      onClick={() => window?.open("https://liven.love/", "_blank")}
      className="shadow-lg border-[2px] border-gray-300 rounded-[16px] px-8 py-4 bg-white flex items-center justify-between relative cursor-pointer"
    >
      {product?.exclusive && (
        <div className="absolute bg-[#FF3B6E] rounded-[16px] flex items-center gap-2 px-4 py-1 top-[-16px] left-1/2 -translate-x-1/2">
          <img src="/logo.svg" className="h-[16px]" />
          <div className="font-semibold text-white">App Exclusive</div>
        </div>
      )}
      <div>
        <div className="text-[16px] font-bold leading-[16px]">Buy</div>
        <div className="text-[40px] font-extrabold leading-[36px] mt-1">
          ${product?.buy}
        </div>
      </div>
      <div></div>
      <div className="text-right">
        <div className="text-[16px] font-bold leading-[16px] text-[#56b5a2]">
          Bonus
        </div>
        <div className="text-[40px] font-extrabold leading-[36px] mt-1 text-[#56b5a2]">
          ${product?.bonus}
        </div>
      </div>
    </div>
  );
};

export default CommonPurchaseItem;
