export const fetchNFTs = async (ownerAddress, chain = 1) => {
  const api_key_eth = "ZWr9L5tFy17qsszllR_1qAHajydws5go";
  const api_key_polygon = "vwtSbRKOpex0PR4QnyXPDJT7v1Ohxyhk";

  const baseUrlEth = `https://eth-mainnet.alchemyapi.io/v2/${api_key_eth}/getNFTs`;
  const baseUrlPolygon = `https://polygon-mainnet.g.alchemyapi.io/v2/${api_key_polygon}/getNFTs`;

  const fetchUrl = `${chain === 1 ? baseUrlEth : baseUrlPolygon}?owner=${ownerAddress}`;


  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data.ownedNfts;
  } catch (error) {
    console.log(error);
  }
};
