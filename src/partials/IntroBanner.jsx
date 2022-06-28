import React from "react";

const IntroBanner = ({ bannerTitle, bannerTitleYellow, bannerText }) => {
  return (
    <div className="intro-banner grid h-[75vh] content-center bg-gray-100 bg-center text-center text-white md:bg-right-top">
      <h1 className="text-3xl font-medium sm:text-4xl">
        {bannerTitle}{" "}
        <span className="font-medium text-aptechOrange">
          {bannerTitleYellow}
        </span>
      </h1>
      <p className="mx-auto w-5/6 text-lg text-gray-200">{bannerText}</p>
    </div>
  );
};

export default IntroBanner;
