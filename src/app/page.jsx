import CardAnime from "../components/Card/cardAnime";
import Header from "../components/Header/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  produceNumber,
} from "../libs/api-libs";

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  // const topAnimes = await response.json();
  const topAnimes = await getAnimeResponse("top/anime", "limit=8");

  let rekomendasiAnimes = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  rekomendasiAnimes = produceNumber(rekomendasiAnimes, 4);
  // rekomendasiAnimes = {data: rekomendasiAnimes.slice(0, 4)}
  // produceNumber(rekomendasiAnimes, 1);

  return (
    <>
      <section className="p-4 flex flex-col gap-4">
        <div className="mt-[150px] md:mt-[70px]">
          <Header title="Top Anime" visibility={true} />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardAnime api={topAnimes} />
        </div>
      </section>

      <section className="p-4 flex flex-col gap-4">
        <div className="mt-[70px]">
          <Header
            title="Rekomendasi Anime Yang Mungkin Anda Suka"
            visibility={false}
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardAnime api={rekomendasiAnimes} />
        </div>
      </section>
    </>
  );
}
