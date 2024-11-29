import Link from "next/link";

export default function Header({ title, visibility, link }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[18px] md:text-[20px] text-acent">
          {title}
        </h1>
        <Link
          href={link ? link : "/Lihat-Semua"}
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
