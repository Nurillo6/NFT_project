import { CollectionType } from "./CollectionType";
import { MetaType } from "./MetaType";
import { NftType } from "./NftType";

export interface ArtistType {
  id: string;
  username: string;
  email: string;
  password: string;
  image:string;
  role: string;
  bio: string;
  globeAccLink: string;
  discordAccLink: string;
  youtubeAccLink: string;
  twitterAccLink: string;
  instagramAccLink: string;
  createdAt: string;
  updatedAt: string;
  createdNFTs: NftType[];
  ownedNFTs: NftType[];
  collections: CollectionType[];
}

export interface ArtistPageType {
  artistsList:{
    data:ArtistType[],
    meta:MetaType
  }
} 