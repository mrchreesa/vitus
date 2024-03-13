"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { useRouter } from "../../navigation";

const ToggleButton = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();
  let pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), "");
  if (pathWithoutLocale === "") {
    pathWithoutLocale = "/";
  }
  console.log(pathWithoutLocale);
  const [isChecked, setIsChecked] = useState(locale === "en" ? true : false);
  const newLocale = locale === "en" ? "bg" : "en";
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    router.replace(pathWithoutLocale, { locale: newLocale });
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-cover bg-center transition ${
            !isChecked ? "translate-x-6 bg-gbFlag " : "bg-bgFlag"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleButton;
