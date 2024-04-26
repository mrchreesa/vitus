import React from "react";
import niki from "../../public/Niki.jpg";

const AboutComponent = ({ about, title }) => {
  const paragraphs = about.split("\n\n");

  return (
    <div id="about" className="relative overflow-hidden">
      <div className="mt-10 mx-auto flex items-center text-green font-mont 2xl:ml-[10%] 2xl:h-screen">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 2xl:pb-10">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto  max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-28 2xl:mt-10 lg:px-8 ">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-green sm:text-3xl md:text-3xl">
                {title}
              </h2>

              <div>
                {paragraphs.map((paragraph, index) => (
                  // Split each paragraph by single newline for line breaks within the paragraph
                  <p
                    className={`mb-4 ${
                      index == paragraphs.length - 1 ? "w-[90%]" : null
                    }`}
                    key={index}
                  >
                    {paragraph.split("\n").map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        {lineIndex < paragraph.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center">
        <img
          className="h-full w-full  object-cover md:object-left sm:h-72 md:h-full"
          src={niki.src}
          alt="image of Nikolina"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
