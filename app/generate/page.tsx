"use client";

import { useEffect, useState } from "react";

export default function GeneratePage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">

      <h1 className="text-2xl font-bold">
        خوش آمدید {userName || "کاربر"}
      </h1>

      <p>اینجا می‌تونی ویدیو AI بسازی 🎬</p>

    </main>
  );
}
