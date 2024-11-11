"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SearchInput() {
    const searchRef = useRef();
    const router = useRouter();

    const handeleSearch = (event) => {
        const keyword = searchRef.current.value;

        if (!keyword || keyword.trim() === "" || keyword.trim() === ",") return;

        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            router.push(`/Search/${keyword}`);
        }
    };
    return (
        <>
            <div className="relative">
                <input
                type="text"
                placeholder="Search here..."
                name=""
                id=""
                ref={searchRef}
                onKeyDown={handeleSearch}
                className="py-2 pl-2 pr-10 focus:outline-none rounded-md bg-acent text-secondary"
                />
                <MagnifyingGlass
                size={24}
                className="text-secondary absolute top-2 right-2 cursor-pointer"
                onClick={handeleSearch}
                />
            </div>
        </>
    );
}
