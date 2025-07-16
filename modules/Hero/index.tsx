import { getRequestServer } from '@/service/getRequest'
import HeroContent from './HeroContent'

const Hero = async () => {
  const auctionList = await getRequestServer("/auctions")
  const artistsList = await getRequestServer("/user?role=ARTIST")
  const actionResultsList = await getRequestServer("/auction-results")
  
  return <HeroContent artistsList={artistsList} auctionList={auctionList} actionResultsList={actionResultsList}/>
}

export default Hero