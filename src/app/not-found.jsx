"use client";

import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <span className="text-[40px] text-acent">404</span>
      <span className="text-[40px] text-acent">Page Not Found</span>
      <button
        onClick={() => router.back()}
        className="p-2 w-[140px] max-w-[140px] rounded-md text-center bg-acent text-secondary hover:bg-secondary hover:text-acent transition-all duration-300 ease-in-out"
      >
        <span>Back</span>
      </button>
    </div>
  );
}
