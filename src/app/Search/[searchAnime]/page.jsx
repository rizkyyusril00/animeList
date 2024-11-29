import { getAnimeResponse } from "../../../libs/api-libs";
import CardAnime from "../../../components/Card/cardAnime";
import Header from "../../../components/Header/header";

export default async function SearchAnime({ params }) {
  const keyword = params.searchAnime;
  const decodedKeyword = decodeURI(keyword);
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
  // const searchAnimes = await response.json();
  const searchAnimes = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  return (
    <div className="p-4 flex flex-col gap-4 pt-[90px]">
      <Header
        title={`Hasil pencarian dari ${decodedKeyword}`}
        visibility={false}
      />
      <div className="grid grid-cols-4 gap-4">
        <CardAnime api={searchAnimes} />
      </div>
    </div>
  );
}
