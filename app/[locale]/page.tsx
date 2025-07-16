import { Artist, Category, Collections, Hero, Join, Learn, MagicMushrooms, NFTMore } from "@/modules";

export default async function Home() {
  return (
    <>
      <Hero/>
      <Collections />
      <Artist />
      <Category/>
      <NFTMore/>
      <MagicMushrooms/>
      <Learn/>
      <Join/>
    </>
  );
}
