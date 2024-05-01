"use client";
import React, { useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation";

const ContactUs = ({ title, description, name, email, message, submit }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const pathname = usePathname();
  function getStringAfterLastSlash(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
  }
  const path = getStringAfterLastSlash(pathname);
  // Validates the form inputs
  const validateForm = () => {
    let errors = {};
    if (!formState.name) {
      errors.name = "Name is required";
    }
    if (!formState.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formState.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formState);
      const data = { ...formState, path: path };

      axios.post("/api/contact", data).then((res) => {
        if (res.status === 200) {
          alert("Message sent successfully");
          setFormState({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send message");
        }
      });
    }
  };

  return (
    <div id="enquiry">
      <section className="text-gray-700 font-mont body-font relative bg-waves bg-cover bg-no-repeat bg-opacity-75">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {description}
            </p>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs italic">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    {message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs italic">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-greenDark rounded text-lg">
                  {submit}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
