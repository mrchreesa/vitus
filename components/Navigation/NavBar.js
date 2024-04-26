"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoEn from "../../public/vitus-en.png";
import logoBg from "../../public/vitus-bg.png";
import Image from "next/image";
import Link from "next/link";
import ToggleButton from "./ToggleLang";
import DropdownServices from "./DropdownServices";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ locale, navigation, enquiry, services }) {
  return (
    <Disclosure
      as="nav"
      className="bg-greenDark fixed top-0 left-0 right-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto   max-w-7xl px-2 sm:px-6 lg:px-8 font-mont z-100">
            <div className="relative  flex h-16 items-center justify-between z-10">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-greenDark hover:text-white focus:outline-none ">
                  <span className="absolute -inset-0.5 " />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 animate-fade"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 animate-fade"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      priority
                      className="h-16 w-auto"
                      src={locale == "bg" ? logoBg : logoEn}
                      alt="Logo of VITUS"
                    />
                  </Link>
                </div>
                <div className="flex flex-grow"></div>
                <div className="hidden sm:ml-6 sm:flex font-mont sm:items-center sm:justify-center ">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) =>
                      item.href === "/" ? (
                        <React.Fragment key={item.name}>
                          <DropdownServices
                            key={item.name}
                            name={item.name}
                            services={services}
                            locale={locale}
                          />
                        </React.Fragment>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-green text-white"
                              : "text-gray-300 hover:bg-green hover:text-white transition-all duration-200",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      )
                    )}

                    <div className="flex items-center justify-center mb-1">
                      {/* Facebook icon */}
                      <div className="ml-4 mr-6">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white "
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                      </div>
                      {/* <!-- Instagram --> */}
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-grow"></div>

                <div className="hidden sm:flex items-center justify-center">
                  <ToggleButton locale={locale} />

                  <a
                    href="#enquiry"
                    className={classNames(
                      "text-gray-300 hover:bg-green hover:text-white transition-all duration-200",
                      "rounded-full border px-3 py-2 text-sm font-medium ml-5"
                    )}
                  >
                    {enquiry}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide */}
          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2 font-mont animate-fade">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-greenDark hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
