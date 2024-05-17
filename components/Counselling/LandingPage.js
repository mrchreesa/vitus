import React from "react";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";
import CustomHeading from "./CustomHeading";

const LandingPage = ({ home, address }) => {
  const handleScrollToSection = (e) => {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetId = e.currentTarget.getAttribute("href").slice(1); // Remove '#' from the href to get the ID
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70; // Calculate the position with -50px offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="h-screen  flex-col items-center  bg-bg bg-center sm:bg-center bg-mobile-scroll bg-no-repeat bg-cover sm:bg-fixed flex font-mont">
      <WavyBackground className="w-screen ">
        <div className="flex flex-col items-center justify-center w-full ">
          <div
            className="flex flex-col sm:flex-row items-center justify-around w-full mb-24 sm:mb-4 px-10 py-8 text-3xl md:text-4xl font-bold"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          >
            <a href="#counselling" onClick={handleScrollToSection}>
              <CustomHeading text={home.counselling} />
            </a>
            <Link href="/supervision">
              <h1 className="mt-6 sm:mt-0 underline underline-offset-4 sm:underline-offset-[18px] hover:underline-offset-[12px] sm:hover:underline-offset-3 decoration-1 text-green hover:text-greenVeryDark transition-all duration-200">
                {home.business}
              </h1>
            </Link>
            <Link href="/training">
              <h1 className="mt-6 sm:mt-0 underline underline-offset-4 sm:underline-offset-[18px] hover:underline-offset-[12px] sm:hover:underline-offset-3 decoration-1 text-green hover:text-greenVeryDark transition-all duration-200">
                {home.training}
              </h1>
            </Link>
          </div>
          {/* <div className="flex flex-grow h-64"></div> */}
        </div>
      </WavyBackground>
      <div
        className="flex bg-white mb-[10%] justify-center  md:w-1/2 text-green px-4"
        // style={{ background: "rgba(255, 255, 255, 0.8)" }}
      >
        {/* <a href="#map" onClick={handleScrollToSection}>
          <h3 className="text-center">{address}</h3>
        </a> */}
      </div>
    </div>
  );
};

export default LandingPage;
