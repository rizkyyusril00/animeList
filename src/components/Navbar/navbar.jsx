import Link from "next/link";
import SearchInput from "../SearchInput/searchInput";
import ButtonAuth from "../ButtonAuth/buttonAuth";
import NavMenu from "../NavMenu/navMenu";

export default function Navbar() {
    return (
        <>
            <nav className="bg-secondary p-4 flex items-center justify-between fixed w-full z-40 ">
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-bold text-[24px] text-acent">
                    AnimeList
                    </Link>
                    <NavMenu />
                </div>
                <div className="flex items-center gap-3">
                    <SearchInput />
                    <ButtonAuth />
                </div>
            </nav>
        </>
    );
}