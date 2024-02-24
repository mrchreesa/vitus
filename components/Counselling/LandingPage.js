import React from "react";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

const LandingPage = ({ home }) => {
  return (
    <div className="h-screen bg-bg bg-center bg-no-repeat bg-cover bg-fixed flex font-mont">
      {" "}
      <WavyBackground className="w-screen  ">
        <div className="flex flex-col items-center justify-center w-full ">
          <div className="flex justify-around w-full  mb-24 text-4xl bg-white px-10 py-8 bg-opacity-60 ">
            <Link href="#">
              <h1 className=" underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200">
                {home.counselling}
              </h1>
            </Link>
            <Link href="/business">
              <h1 className=" underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200">
                {home.business}
              </h1>
            </Link>
            <Link href="/training">
              <h1 className=" underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200">
                {home.training}
              </h1>
            </Link>
          </div>
          <div className="flex bg-white bg-opacity-60 ">
            <h3>1234 Some Street, Some City, Some Country</h3>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default LandingPage;
