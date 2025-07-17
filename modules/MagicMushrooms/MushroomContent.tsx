import { AuctionsType2 } from "@/@types/AuctionType";
import { MetaType } from "@/@types/MetaType";
import { EyeIcon } from "@/assets/icons";
import { Timer } from "@/components";
import { API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const MushroomsContent = ({ mushroomData }: { mushroomData: { data: AuctionsType2[], meta: MetaType } }) => {
    const endTime:any = new Date(mushroomData.data[0].endsAt);
    const nowUtcISOString = new Date().toISOString();
    const now:any = new Date(nowUtcISOString);
    const diffMs = endTime - now; 
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
        <section style={{ backgroundImage: 'url("/mashroom.svg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }} className="h-[660px] flex justify-end pb-[60px] overflow-hidden">
            <div className="containers flex items-end w-full justify-between">
                <div>
                    <Link href={`/creator/${mushroomData.data[0].nft.creator.id}`} className="flex items-center space-x-3 bg-[#3B3B3B] rounded-[20px] w-[151px] py-[15px] px-[20px]">
                        <Image
                            className="w-[24px] rounded-full h-[24px] object-cover"
                            src={`${API}/file/${mushroomData?.data[0]?.nft?.creator?.image}`}
                            alt="Collection img"
                            width={24}
                            height={24}
                        />
                        <span className="text-white font-medium">{mushroomData?.data[0]?.nft?.creator?.username}</span>
                    </Link>
                    <h1 className="text-5xl my-[30px] font-bold text-white mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text">{mushroomData.data[0].description}</h1>
                    <button className="bg-white backdrop-blur-sm border border-white/30 text-black px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center space-x-2">
                        <EyeIcon />
                        <span>See NFT</span>
                    </button>
                </div>
                <Timer hours={Number(hours)} minutes={Number(minutes)} seconds={Number(seconds)}/>
            </div>
        </section>
    );
};

export default MushroomsContent;