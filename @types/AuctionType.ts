import { NftType, NftType2 } from "./NftType";

export interface AuctionType {
  id: string;
  description: string;
  details: string[];
  tags: string[];
  endsAt: string;
  createdAt: string;
  updatedAt: string;
  nftId: string;
  nft: NftType
  results: any;
}
export interface AuctionsType2 extends AuctionType {
  nft: NftType2
}