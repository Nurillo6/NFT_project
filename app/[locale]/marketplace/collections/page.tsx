import { CollectionType } from "@/@types/CollectionType";
import CollectionCard from "@/components/CollectionCard";
import { getRequestServer } from "@/service/getRequest";

export default async function Collections () {
  const collections = await getRequestServer("/collections")
  
  return (
    <div className="containers flex justify-between flex-wrap gap-x-[10px] gap-y-[30px]">
      {collections.map((item:CollectionType) => <CollectionCard key={item.id} item={item}/>)}
    </div>
  );
}
