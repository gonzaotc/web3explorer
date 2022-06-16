import React from "react";

const NFTCard = ({ imageUrl, title }) => {
  const isMP4 = imageUrl.slice(-3) === "mp4";
  return (
    <article
      className="h-[45vw] md:h-[32vw] lg:h-[25vw] xl:h-[20vw] 2xl:h-[15vw] w-full relative rounded-xl overflow-hidden"
      onClick={() => window.open(imageUrl, "_blank")}
    >
      {!isMP4 ? (
        <img src={`${imageUrl}`} className="w-full h-full object-cover opacity-[0.95]" alt='nft' />
      ) : (
        <video src={imageUrl} autoPlay loop>
          Tu navegador no admite el elemento <code>video</code>.
        </video>
      )}
      <div className="absolute w-full bottom-0 h-24 bg-gradient-to-b from-transparent to-black/50" />

      <span className="absolute bottom-[5%] left-[5%] border-white drop-shadow-[0_0_10px_rgba(1,1,1,1)]">
        <p className="text-[0.7rem] text-white sm:text-[1rem] md:text-[1.1rem] font-semibold ">{title}</p>
        <p className="text-[0.55rem] text-white sm:text-[0.75rem] md:text-[0.8rem]">by @NFTowner</p>
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
