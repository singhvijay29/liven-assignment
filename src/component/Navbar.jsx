import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between sticky top-0 p-2 bg-[#F9F9F9] ">
      <img
        src="/liven_logo.png"
        className="h-[54px]"
        alt="liven_logo"
        onClick={() => window?.open("https://liven.love/", "_blanks")}
      />
      <button
        onClick={() => window?.open("https://app.liven.com.au/", "_blanks")}
        className="rounded-[24px] bg-[#FF3B6E] text-white px-4 py-2 font-semibold h-fit"
      >
        Get App
      </button>
    </div>
  );
};

export default Navbar;
