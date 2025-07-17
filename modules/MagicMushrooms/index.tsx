import { getRequestServer } from "@/service/getRequest";
import MushroomsContent from "./MushroomContent";


const MagicMushrooms = async () => {
    const mushroomData = await getRequestServer("/auctions?limit=1")
    return <MushroomsContent mushroomData={mushroomData}/>
};

export default MagicMushrooms;