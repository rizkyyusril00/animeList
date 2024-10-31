import Link from "next/link";
import SearchInput from "../SearchInput/searchInput";

export default function Navbar() {
    return (
        <>
            <nav className="bg-secondary p-4 flex items-center justify-between fixed w-full z-40 ">
                <Link href="/" className="font-bold text-[24px] text-acent">
                AnimeList
                </Link>
                <SearchInput />
            </nav>
        </>
    );
}
