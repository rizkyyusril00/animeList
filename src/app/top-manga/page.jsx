import CardManga from "@/components/Card/cardManga";
import Header from "@/components/Header/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  produceNumber,
} from "@/libs/api-libs";

export default async function TopManga() {
  const topMangas = await getAnimeResponse("top/manga", "limit=8");

  //untuk rekomendasi
  let rekomendasiMangas = await getNestedAnimeResponse(
    "recommendations/manga",
    "entry"
  );
  rekomendasiMangas = produceNumber(rekomendasiMangas, 4);

  return (
    <>
      <section className="p-4 flex flex-col gap-4">
        <div className="mt-[150px] md:mt-[70px]">
          <Header
            title="Top Manga"
            visibility={true}
            link="/Lihat-Semua-Manga"
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardManga api={topMangas} />
        </div>
      </section>

      <section className="p-4 flex flex-col gap-4">
        <div className="mt-[70px]">
          <Header
            title="Rekomendasi Manga Yang Mungkin Anda Suka"
            visibility={false}
          />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardManga api={rekomendasiMangas} />
        </div>
      </section>
    </>
  );
}
