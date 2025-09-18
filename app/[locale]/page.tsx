import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <Header />
      <div className="w-full h-screen flex bg-black">
        <div className="lg:w-3/7 h-full lg:mt-40 pr-8">
          <h2 className="text-[55px] leading-18 font-[400] mb-5">The infrastructure powering investment products</h2>
          <p className="text-gray-900 text-lg mb-5">Enable your customers to invest in the stock market. Use the lemon.markets API to launch a customer-centric and compliant investment product.</p>
          <Button className="w-60 py-5 rounded-xl">start building</Button>
        </div>
        <div className="hidden lg:flex"></div>
      </div>
      <div className="w-full h-full mt-20 mb-10"></div>
      <Footer />
    </div>
  );
}
