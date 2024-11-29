import Link from "next/link";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <span className="text-[40px] text-acent">404</span>
      <span className="text-[40px] text-acent">Page Not Found</span>
      <Link
        href="/"
        className="p-2 w-[140px] max-w-[140px] rounded-md text-center bg-acent text-secondary hover:bg-secondary hover:text-acent transition-all duration-500 ease-in-out"
      >
        <span>Back</span>
      </Link>
    </div>
  );
}
