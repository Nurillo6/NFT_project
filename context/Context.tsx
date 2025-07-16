"use client"
import { ArtistType } from "@/@types/ArtistType";
import { CollectionType } from "@/@types/CollectionType";
import { NftType2 } from "@/@types/NftType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export const Context = createContext<{
    singleArtistData:ArtistType | {},
    setSingleAritstData:Dispatch<SetStateAction<ArtistType>>,
    nft:NftType2[] | [],
    setNft:Dispatch<SetStateAction<NftType2[]>>,
    collections:CollectionType[] | [],
    setCollections:Dispatch<SetStateAction<CollectionType[]>>,
}>({
    singleArtistData:{},
    setSingleAritstData:() => null,
    nft:[],
    setNft:() => null,
    collections:[],
    setCollections:() => null
})

export const GlobalContext = ({children}:{children:ReactNode}) => {
    const [singleArtistData, setSingleAritstData] = useState<ArtistType | {}>({})
    const [nft, setNft] = useState<NftType2[] | []>([])
    const [collections, setCollections] = useState<CollectionType[] | []>([])

    return <Context.Provider value={{setSingleAritstData, singleArtistData, nft, setNft,collections, setCollections}}>{children}</Context.Provider>
}