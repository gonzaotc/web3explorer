import React, { useEffect, useState } from "react";
import { fetchNFTs } from "../pages/api";
import NFTCard from "./NFTCard";

const Catalogue = ({ inspectedAddress, title, chainNumber }) => {
  const [nfts, setNfts] = useState([]);
  const [loadingNfts, setLoadingNfts] = useState(false);

  useEffect(() => {
    if (inspectedAddress && inspectedAddress.length > 10) {
      console.log("inspectedAddress changed", inspectedAddress);
      setLoadingNfts(true);
      fetchNFTs(inspectedAddress, chainNumber)
        .then(nfts => {
          console.log("chainNumber ", chainNumber, " pre-filtering nfts:", nfts);
          nfts = nfts.filter(nft => nft.media[0].gateway && nft.media[0].gateway.length > 0);
          console.log("chainNumber ", chainNumber, " post-filtering nfts:", nfts);
          setNfts(nfts);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoadingNfts(false);
        });
    }
  }, [inspectedAddress, chainNumber]);

  const loadedWithSuccess = !loadingNfts && nfts;
  const displayable = !loadingNfts && nfts && nfts.length > 1;
  const nothingFound = !loadingNfts && (!nfts || nfts.length === 0);

  return (
    <div className="flex min-h-[200px] flex-col bg-primaryLight rounded-xl p-3 2xl:p-6 mb-8">
      <h3 className="text-white/90 font-semibold text-2xl mb-4">{`${title} ${
        inspectedAddress && loadedWithSuccess ? "(" + nfts.length + ")" : ""
      }`}</h3>

      {inspectedAddress && (
        <section className="h-full w-full overflow-y-auto grid gap-3 2xl:gap-4 grid-container--fit border-black">
          {displayable &&
            nfts.map((nft, index) => (
              <NFTCard imageUrl={nft.media[0].gateway} title={nft.title} key={"item_" + index} />
            ))}
          {loadingNfts && <p className="text-white pt-8">Loading nfts...</p>}
          {nothingFound && <p className="text-white pt-8">Nothing found.</p>}
        </section>
      )}
    </div>
  );
};

export default Catalogue;
