import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DropdownServices = ({ services, locale, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handlers for mouse events
  const toggleOpen = () => setIsOpen(true);
  const toggleClose = () => setIsOpen(false);
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
    <div
      style={{ position: "relative" }}
      onMouseEnter={toggleOpen}
      onMouseLeave={toggleClose}
    >
      <button
        id="dropdownHoverButton"
        className="text-gray-300 bg-greenDark hover:text-white hover:bg-green transition-all duration-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute  divide-y divide-gray-100 rounded-lg shadow w-44 bg-green"
          style={{ top: "100%", left: 0 }}
        >
          <ul
            className="py-2 text-sm  dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="/#counselling"
                className="block px-4 py-2 hover:bg-greenDark hover:text-white"
              >
                {services.counselling}
              </a>
            </li>
            <li>
              <a
                href="/supervision"
                className="block px-4 py-2 hover:bg-greenDark hover:text-white"
              >
                {services.business}
              </a>
            </li>
            <li>
              <a
                href="/training"
                className="block px-4 py-2 hover:bg-greenDark hover:text-white"
              >
                {services.training}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownServices;
