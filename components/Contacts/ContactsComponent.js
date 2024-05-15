"use client";
import React from "react";
import ContactUs from "../ContactUs";

const ContactsComponent = ({ address, contacts, contact }) => {
  return (
    <>
      <div className="font-mont text-green flex text-xl flex-col justify-center items-center text-center h-screen p-5">
        <div>
          <h1 className="md:mt-20 text-3xl mb-4 underline underline-offset-[8px] decoration-1">
            {contacts.title}
          </h1>
          {/* <p className="pb-2">{contacts.phone}: +359 123123123</p> */}
          <p className="pb-2">{contacts.email}: centrevitus@gmail.com</p>
          <p>
            {contacts.address}: {address}
          </p>
        </div>
        <div id="map" className="w-full h-96 relative mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.781460830443!2d23.319086975577466!3d42.68717137116427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa850dd1274219%3A0x228cbf4458dc9ff!2sSofia%20Center%2C%20Fridtjof%20Nansen%20St%2017%2C%201142%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2suk!4v1711982439647!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: "0" }}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactUs
        title={contact.title}
        description={contact.description}
        name={contact.name}
        email={contact.email}
        message={contact.message}
        submit={contact.submit}
      />
    </>
  );
};

export default ContactsComponent;
