import { ArtistType } from "./ArtistType";
import { AuctionType } from "./AuctionType";
import { MetaType } from "./MetaType";

export interface NftType {
  id: string;
  title: string;
  image: string;
  price: string;
  highestBid: null;
  createdAt: string;
  updatedAt: string;
  creatorId: string;
  ownerId: string;
}

export interface NftType2 extends NftType {
  creator:ArtistType,
  owner:ArtistType,
  auctions:AuctionType[]
}

export interface NtfPageType {
  nftList:{
    data:NftType2[],
    meta:MetaType
  }
}