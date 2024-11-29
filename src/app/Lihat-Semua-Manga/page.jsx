"use client";
import CardAnime from "../../components/Card/cardAnime";
import Header from "../../components/Header/header";
import Pagination from "../../components/Pagination/pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";
import CardManga from "@/components/Card/cardManga";

export default async function LihatSemuaPage() {
  const [page, setPage] = useState(1);
  const [allMangas, setAllMangas] = useState([]);

  const fetchAnimes = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    const allMangas = await getAnimeResponse("top/manga", `page=${page}`);
    setAllMangas(allMangas);
  };

  useEffect(() => {
    fetchAnimes();
  }, [page]);

  return (
    <div className="pt-[160px] md:pt-[80px] p-4">
      <div className="flex flex-col gap-4">
        <Header title={`All Mangas`} visibility={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardManga api={allMangas} />
        </div>
        <Pagination
          setHalaman={setPage}
          halaman={page}
          halamanTotal={allMangas?.pagination?.last_visible_page}
        />
      </div>
    </div>
  );
}
