import React from "react";
import logoEn from "../public/vitus-en.png";
import logoBg from "../public/vitus-bg.png";
import Image from "next/image";
import Link from "next/link";

function Footer({ locale, navigation }) {
  // console.log(navigation);
  return (
    <footer className=" ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-green  font-mont">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <div className="flex flex-shrink-0 items-center bg-greenLight hover:bg-green rounded-lg transition-all duration-200">
            <Link href="/">
              <Image
                priority
                className="h-12 w-auto"
                src={locale == "bg" ? logoBg : logoEn}
                alt="Logo of VITUS"
              />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                {navigation[0].name}
              </a>
            </li>

            <li>
              <a href="/contacts" className="hover:underline">
                {navigation[4].name}
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-green sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © Vitus™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
