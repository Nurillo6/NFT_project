import { NftType2 } from '@/@types/NftType'
import NftCard from '@/components/NftCard'
import { getRequestServer } from '@/service/getRequest'

const Markatplace = async () => {
  const nft = await getRequestServer("/nfts")
  return (
    <div className="containers flex justify-between flex-wrap gap-x-[10px] gap-y-[30px]">
      {nft.map((item:NftType2) => <NftCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Markatplace