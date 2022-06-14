import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-52 w-full relative rounded-2xl overflow-hidden mb-4">
      <img
        src={`/fantasy.jpg`}
        className=" w-full h-full object-cover opacity-[0.8] object-[0px_-200px]"
      />
      <div className="absolute w-full bottom-0 h-28 bg-gradient-to-b from-transparent to-black/70" />
      <span className="absolute top-[50%] translate-y-[-50%] left-[5%] border-white">
        <h1 className="text-white text-3xl font-semibold mb-4 drop-shadow-[0_0_10px_rgba(1,1,1,1)]">
          Web3explorer <br /> inspect those NFT's!
        </h1>
        <span>
          <button className="py-2.5 px-6 bg-purple-700 text-white font-semibold rounded-xl mr-4 text-sm">
            button1
          </button>
          <button className="py-2.5 px-6 bg-transparent border-2 border-[#8c83ba] text-white font-semibold rounded-xl text-sm">
            button2
          </button>
        </span>
      </span>
    </div>
  );
};

export default Banner;
