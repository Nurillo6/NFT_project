import { ArtistType } from "./ArtistType";
import { AuctionType } from "./AuctionType";
import { MetaType } from "./MetaType";

export interface HeroContentType {
    auctionList: { data: AuctionType[], meta: MetaType },
    artistsList: { data: ArtistType[], meta: MetaType },
    actionResultsList: any
}