"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">

      <h1 className="text-3xl font-bold">Voxora AI 🚀</h1>
      <p>Create AI Videos in Minutes</p>

      {/* دکمه Generate */}
      <button
        onClick={() => router.push("/generate")}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Generate
      </button>

      {/* دکمه Login */}
      <button
        onClick={() => router.push("/login")}
        className="bg-gray-800 text-white px-6 py-2 rounded"
      >
        Login
      </button>

    </main>
  );
}
