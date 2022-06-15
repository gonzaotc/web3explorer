import { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Banner from "../components/Banner";
import Catalogue from "../components/Catalogue";

export default function Home() {
  const [searchAddress, setSearchAddress] = useState("");
  const [inspectedAddress, setInspectedAddress] = useState(undefined);

  return (
    <div className="h-full bg-primary ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full border-black w-[90%] 2xl:w-[85%] mx-auto flex gap-8 py-[1.75rem]">
        {/* first column */}
        <div className="h-full border-black w-full">
          {/* header */}
          <header className="">
            <div className="flex items-start justify-between">
              <SearchBar
                searchAddress={searchAddress}
                setSearchAddress={setSearchAddress}
                setInspectedAddress={setInspectedAddress}
              />
              <ConnectButton />
            </div>

            <Banner inspectedAddress={inspectedAddress} setInspectedAddress={setInspectedAddress} />
          </header>
          {/* main content -> articles */}
          <Catalogue inspectedAddress={inspectedAddress} title="Ethereum NFTS" chainNumber={1} />
          <Catalogue inspectedAddress={inspectedAddress} title="Polygon NFTS" chainNumber={2} />
        </div>
        {/* second column */}
        <div className="h-[calc(100vh-3.5rem)] w-[22%] 2xl:w-2/12 bg-primaryLight rounded-2xl"></div>
      </div>
    </div>
  );
}
