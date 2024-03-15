import React from "react";
import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

const LandingPage = ({ home }) => {
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
    <div className="h-screen bg-bg bg-center bg-no-repeat bg-cover bg-fixed flex font-mont">
      <WavyBackground className="w-screen ">
        <div className="flex flex-col items-center justify-center w-full ">
          <div
            className="flex justify-around w-full mb-24 text-4xl px-10 py-8 font-bold"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
          >
            {" "}
            {/* Use inline style for semi-transparent background */}
            <a href="#counselling" onClick={handleScrollToSection}>
              <h1
                className="underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200"
                style={{ opacity: 1 }}
              >
                {home.counselling}
              </h1>
            </a>
            <Link href="/business">
              <h1
                className="underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200"
                style={{ opacity: 1 }}
              >
                {home.business}
              </h1>
            </Link>
            <Link href="/training">
              <h1
                className="underline underline-offset-[18px] hover:underline-offset-[12px] decoration-1 text-green hover:text-greenVeryDark transition-all duration-200"
                style={{ opacity: 1 }}
              >
                {home.training}
              </h1>
            </Link>
          </div>
          <div
            className="flex bg-white text-green px-4"
            style={{ background: "rgba(255, 255, 255, 0.7)" }}
          >
            <h3>1234 Some Street, Some City, Some Country</h3>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default LandingPage;
