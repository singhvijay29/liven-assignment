import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto mt-6 w-fit">
      <img
        onClick={() => window?.open("https://liven.love/", "_self")}
        src="/liven_logo.png"
        className="h-[54px] cursor-pointer"
        alt="liven_logo"
      />
    </div>
  );
};

export default Footer;
