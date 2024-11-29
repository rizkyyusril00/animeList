import BadgeDetailAnime from "@/components/Badge/badgeDetailAnime";
import Header from "@/components/Header/header";
import { getAnimeResponse } from "@/libs/api-libs";
import Link from "next/link";

export default async function DetailManga({ params }) {
  const detailMangas = await getAnimeResponse(`manga/${params.id}`);
  const badges = [
    {
      id: 1,
      name: "rank:",
      api: detailMangas.data.rank,
    },
    {
      id: 2,
      name: "Score:",
      api: detailMangas.data.score,
    },
    {
      id: 3,
      name: "Popularity:",
      api: detailMangas.data.popularity,
    },
    {
      id: 4,
      name: "Status:",
      api: detailMangas.data.status,
    },
    {
      id: 5,
      name: "Release Date:",
      api: detailMangas.data.published.prop.from.year,
    },
  ];
  return (
    <div className="pt-[150px] md:pt-[70px]">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-0">
          <Header title={`${detailMangas.data.title}`} visibility={false} />
          <Link
            href="/Lihat-Semua"
            className="text-[16px] text-acent cursor-pointer"
          >
            &laquo; Back
          </Link>
          <div className="flex flex-col md:flex-row gap-4">
            {/* sidebar */}
            <div className="w-full md:w-[35%] h-auto md:h-[300px] xl:h-[450px] group transition-all duration-500 ease-in-out relative overflow-hidden rounded-md">
              <img
                src={detailMangas.data.images.jpg.image_url}
                alt="detail anime"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full transition-all duration-300 ease-in-out bg-transparent bg-opacity-50 absolute top-96 group-hover:top-0">
                <div className="w-full h-auto bg-acent p-2 absolute bottom-0 flex items-center justify-center text-center">
                  <span className="text-secondary">
                    {detailMangas.data.genres &&
                    detailMangas.data.genres.length > 0
                      ? detailMangas.data.genres
                          .map((genre) => genre.name)
                          .join(", ")
                      : "No genres available"}
                  </span>
                </div>
              </div>
            </div>
            {/* main bar */}
            <div className="w-full md:w-[65%] p-2 rounded-[15px] h-fit bg-acent bg-opacity-10 filter backdrop-blur-xl flex flex-col gap-2">
              <span className="w-full text-acent">
                {detailMangas.data.synopsis}
              </span>
              <div className="flex flex-wrap flex-row md:items-center gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="p-3 border border-acent rounded-md w-auto"
                  >
                    <BadgeDetailAnime detail={`${badge.name} ${badge.api}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
