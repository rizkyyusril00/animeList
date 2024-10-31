import CardAnime from "@/components/Card/cardAnime";
import Header from "@/components/Header/header";
import { getAnimeResponse } from "./libs/api-libs";

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnimes = await response.json();
  const topAnimes = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <div className="p-4 flex flex-col gap-4">
        <div className="mt-[70px]">
          <Header title="Top Anime" visibility={true} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <CardAnime api={topAnimes} />
        </div>
      </div>
    </>
  );
}
