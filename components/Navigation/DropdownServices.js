import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DropdownServices = ({ services, locale }) => {
  const pathname = usePathname();
  let pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), "");
  if (pathWithoutLocale === "") {
    pathWithoutLocale = "/";
  }
  const [selectedService, setSelectedService] = useState(pathWithoutLocale);
  // Use useEffect to set the initial state based on the current URL when the component mounts
  useEffect(() => {
    switch (pathWithoutLocale) {
      case "/training":
        setSelectedService(services.training);
        break;
      case "/supervision":
        setSelectedService(services.business);
        break;
      case "/":
        setSelectedService(services.counselling);
        break;
      default:
        setSelectedService("services"); // Reset or set a default value if the path does not match
        break;
    }
  }, [pathWithoutLocale]);

  const handleSelectionChange = (e) => {
    const value = e.target.value;
    setSelectedService(value);

    // Determine the route based on the selected service
    let path = pathWithoutLocale;
    if (value === services.counselling) {
      path = "/";
    } else if (value === services.business) {
      path = "/supervision";
    } else if (value === services.training) {
      path = "/training";
    }

    // Navigate using window.location for SPA-like behavior without <Link>
    if (typeof window !== "undefined") {
      window.location.href = window.location.origin + path;
    }
  };

  return (
    <form className="max-w-sm pr-1 hover:bg-green transition-all duration-200 rounded-md">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="bg-transparent border-none text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
        value={selectedService}
        onChange={handleSelectionChange}
      >
        <option value="services" disabled>
          Services
        </option>
        <option value={services.counselling}>{services.counselling}</option>
        <option value={services.business}>{services.business}</option>
        <option value={services.training}>{services.training}</option>
      </select>
    </form>
  );
};

export default DropdownServices;
