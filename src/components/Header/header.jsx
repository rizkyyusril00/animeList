import Link from "next/link";

export default function Header({ title, visibility }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-[20px] text-acent">{title}</h1>
                <Link
                href="/Lihat-Semua"
                className={`${
                    visibility ? "block" : "hidden"
                } text-[16px] text-acent cursor-pointer`}
                >
                Lihat Semua
                </Link>
            </div>
        </>
    );
}
