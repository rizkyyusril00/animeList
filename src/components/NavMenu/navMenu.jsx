import Link from "next/link";
import {authUserSession} from "../../libs/auth-libs";


export default async function NavMenu() {
    const user = await authUserSession();

    const navMenus = () => {
        if (user) {
            return (
                <>
                    <ul className="flex items-center gap-3 text-acent text-[16px]">
                        <Link href="/user/dashboard" className="text-[16px] text-acent">
                            <li className="inline-block">Dashboard</li>
                        </Link>
                        <Link href="/Lihat-Semua" className="text-[16px] text-acent">
                            <li className="inline-block">Anime</li>
                        </Link>
                        <Link href="/" className="text-[16px] text-acent">
                            <li className="inline-block">Manga</li>
                        </Link>
                    </ul>
                </>
            )
        }else{
            return (
                <>
                    <ul className="flex items-center gap-3 text-acent text-[16px]">
                        <Link href="/" className="text-[16px] text-acent">
                            <li className="inline-block">Anime</li>
                        </Link>
                        <Link href="/" className="text-[16px] text-acent">
                            <li className="inline-block">Manga</li>
                        </Link>
                    </ul>
                </>
            )
        }
    }

    return (
        <>
            {navMenus()}
        </>
    )
}