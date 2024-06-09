import React, { useState } from "react";
import CommonPurchaseItem from "./CommonPurchaseItem";
import Footer from "./Footer";
import GiftIcon from "./Icon/GiftIcon";
import Navbar from "./Navbar";
import TogglePill from "./TogglePill";

const HomeScreen = () => {
  const [isGiftedProduct, setIsGiftedProduct] = useState(false);

  const gift_products = [
    {
      buy: "50",
      bonus: "5",
    },
    {
      buy: "100",
      bonus: "15",
    },
    {
      buy: "250",
      bonus: "50",
    },
    {
      buy: "500",
      bonus: "125",
    },
  ];

  const non_gift_products = [
    {
      buy: "30",
      bonus: "10",
      exclusive: true,
    },
    {
      buy: "50",
      bonus: "5",
    },
    {
      buy: "100",
      bonus: "15",
    },
    {
      buy: "250",
      bonus: "50",
    },
    {
      buy: "500",
      bonus: "125",
    },
  ];

  return (
    <div className="max-w-[506px] bg-[#F9F9F9] h-[100vh] mx-auto relative">
      <Navbar />
      <div className="max-w-[304px] mx-auto flex flex-col gap-2 p-2 overflow-y-scroll">
        <div className="text-[32px] font-bold text-right">San Dollars</div>
        <div className="font-semibold text-gray-500 text-center">
          Pay now,eat more later! Earn a bonus when you buy food upfront. Tap
          now to purchase.
        </div>
      </div>
      <div className="pl-4 pr-1 py-1 rounded-[24px] bg-[#F2F2F2] w-max flex gap-2 items-center mx-auto mt-3">
        <GiftIcon />
        <div className="font-semibold text-[#726565]">Purchase as gift</div>
        <TogglePill
          isGiftedProduct={isGiftedProduct}
          setIsGiftedProduct={setIsGiftedProduct}
        />
      </div>
      <div className="px-6 mt-9 flex flex-col gap-3">
        {(isGiftedProduct ? gift_products : non_gift_products)?.map(
          (product, index) => (
            <CommonPurchaseItem product={product} key={index} />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
