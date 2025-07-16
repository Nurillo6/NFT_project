import { getRequestServer } from '@/service/getRequest'
import NftContent from './NftContent'

const NFTMore = async () => {
    const nftList = await getRequestServer("/nfts?limit=3")
    return <NftContent nftList={nftList} />
}

export default NFTMore