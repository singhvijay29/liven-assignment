import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between sticky top-0 p-2 bg-[#F9F9F9] ">
      <img
        src="/liven_logo.png"
        className="h-[54px] cursor-pointer"
        alt="liven_logo"
        onClick={() => window?.open("https://liven.love/", "_self")}
      />
      <button
        onClick={() => window?.open("https://app.liven.com.au/")}
        className="rounded-[24px] bg-[#FF3B6E] text-white px-4 py-2 font-semibold h-fit"
      >
        Get App
      </button>
    </div>
  );
};

export default Navbar;
