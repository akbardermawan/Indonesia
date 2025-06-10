import React from "react";

const Cover = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto">
      <div className="w-full relative">
        <img src="/cover.jpg" alt="" className="w-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold bg-gradient-to-b from-red-500 to-white bg-clip-text text-transparent">
            Indonesia 2035
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
