import { getRequestServer } from '@/service/getRequest'
import ArtistContent from './CreatorContent'

const Artist = async () => {
     const artistsList = await getRequestServer("/user?role=ARTIST&limit=12")
    return <ArtistContent artistsList={artistsList}/>
}

export default Artist