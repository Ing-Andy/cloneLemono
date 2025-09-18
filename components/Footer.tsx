import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-screen pt-5">
      <div className="flex gap-4">
        <div className="w-1/3">
          <Image src={"/logo.svg"} alt="logo Lemono" width={190} height={30} />
          <p className="mt-4">The infrastructure powering investment products. Enable your customers to invest in the stock market. Use the lemon.markets API to launch a customer-centric and compliant investment product.</p>
        </div>
        <div className="w-2/3 *:w-1/4 flex justify-between capitalize">
          <div>
            <legend className="font-semibold">use cases</legend>
            <ul className="*:my-6" >
                <li> vertical brockage</li>
                <li>embedded brockage</li>
                <li>contextual brockage</li>
            </ul>
          </div>
          <div className="">
            <legend>company</legend>
            <ul>
                <li>company</li>
                <li>careers</li>
                <li>media / media</li>
            </ul>
          </div>
          <div className="">
            <legend>developers</legend>
            <ul>
                <li>documantation</li>
                <li>status Page</li>
            </ul>
          </div>
          <div className="">
            <legend>Legal Pages</legend>
            <ul>
                <li>imprint</li>
                <li>Terms & conditions</li>
                <li>privacy policy</li>
                <li>data protection for application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
