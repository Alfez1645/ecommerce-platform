"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {

    const router = useRouter();
    const [query, setQuery] = useState("");

    function handleSearch() {
        const value = query.trim();

        if (!value) return;

        router.push(`/search?q=${encodeURIComponent(value)}`);

        setQuery("")
    }

    return (
        <div className="w-full p-4">
            <div className="relative w-full">
                <input
                    type="text"
                    className="h-12 w-full rounded-2xl border border-border bg-secondary pl-4 pr-24 outline-none focus:border-primary"
                    placeholder="Search any product..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                />
                <button onClick={handleSearch} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary px-4 py-2 text-white">Search</button>
            </div>
        </div>
    );
}