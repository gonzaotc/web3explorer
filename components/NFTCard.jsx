import React from "react";

const NFTCard = ({ imageUrl }) => {
  return (
    <article className="h-48 w-48 relative rounded-2xl overflow-hidden">
      <img src={`${imageUrl}`} className=" w-full h-full object-cover opacity-[0.9]" />
      <div className="absolute w-full bottom-0 h-24 bg-gradient-to-b from-transparent to-black/50" />

      <span className="absolute bottom-[5%] left-[5%] border-white drop-shadow-[0_0_10px_rgba(1,1,1,1)]">
        <p className="text-white text-[1.1rem] font-semibold ">NFT name</p>
        <p className="text-white text-[0.8rem]">by @NFTowner</p>
      </span>

      {/* <span className="absolute bottom-[5%] right-[5%] border-white">
        <p className="text-white text-sm font-semibold mb-1 drop-shadow-[0_0_10px_rgba(1,1,1,1)]">
          Web3explorer <br /> inspect those NFT's!
        </p>
        <button className="py-2.5 px-6 bg-purple-700 text-white font-semibold rounded-xl mr-4 text-sm">
          button1
        </button>
      </span> */}
    </article>
  );
};

export default NFTCard;
