import React from "react";
import InfoItem from "./InfoItem";

const InfoSection = ({ counselling }) => {
  // Images
  const personal = "/personal.jpg";
  const family = "/fam.jpg";
  const couples = "/Hold.jpg";

  // Content for sections
  const section1 = {
    title: counselling.section1.title,
    text: counselling.section1.description,
    image: personal,
    imageAlt: "Individual counselling session",
    reverse: false,
  };

  const section2 = {
    title: counselling.section2.title,
    text: counselling.section2.description,
    image: family,
    imageAlt: "Family counselling session",
    reverse: true, // Image on the right
  };

  const section3 = {
    title: counselling.section3.title,
    text: counselling.section3.description,
    image: couples,
    imageAlt: "Couples counselling session",
    reverse: false,
  };

  return (
    <>
      <InfoItem {...section1} />
      <div className="blob">
        <InfoItem {...section2} />
      </div>
      <div className="wave">
        <InfoItem {...section3} />
      </div>
      <div id="map" className="wave w-full h-96 relative">
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
    </>
  );
};

export default InfoSection;
