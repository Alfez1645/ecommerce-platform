"use client";

import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}
    className="bg-primary text-white border rounded p-3 ml-5">
      Go Back
    </button>
  );
}