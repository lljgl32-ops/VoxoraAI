"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">

      <h1 className="text-4xl font-bold">
        Voxora AI 🚀
      </h1>

      <p className="text-lg text-gray-500">
        Create AI Videos in Minutes
      </p>

      {/* دکمه Generate */}
      <button
        onClick={() => router.push("/generate")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Generate
      </button>

      {/* دکمه Login */}
      <button
        onClick={() => router.push("/login")}
        className="bg-gray-800 text-white px-6 py-3 rounded-xl"
      >
        ورود
      </button>

    </main>
  );
}
