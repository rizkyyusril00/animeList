"use client";
import CardAnime from "../../components/Card/cardAnime";
import Header from "../../components/Header/header";
import Pagination from "../../components/Pagination/pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

export default async function LihatSemuaPage() {
  const [page, setPage] = useState(1);
  const [allAnimes, setAllAnimes] = useState([]);

  const fetchAnimes = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    const allAnimes = await getAnimeResponse("top/anime", `page=${page}`);
    setAllAnimes(allAnimes);
  };

  useEffect(() => {
    fetchAnimes();
  }, [page]);

  return (
    <div className="pt-[160px] md:pt-[80px] p-4">
      <div className="flex flex-col gap-4">
        <Header title={`All Animes`} visibility={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardAnime api={allAnimes} />
        </div>
        <Pagination
          setHalaman={setPage}
          halaman={page}
          halamanTotal={allAnimes?.pagination?.last_visible_page}
        />
      </div>
    </div>
  );
}
