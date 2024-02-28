import React from "react";

const Banner = () => {
  return (
    <div className='bg-[url("/src/assets/banner/card1.jpg")] bg-center bg-cover h-s1 md:h-s2 lg:h-s3'>
      <div className="text-center h-full w-full flex flex-col justify-end items-center bg-dark-300 pb-s4">
        <h1 className="text-white text-xsmall xs:text-small md:text-medium lg:text-large xxxl:text-xlarge text-shadow">Experience Music like never  before.</h1>
      </div>
    </div>
  );
};

export default Banner;
