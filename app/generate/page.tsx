"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [text, setText] = useState("");
  const [step, setStep] = useState("idle");

  const handleGenerate = () => {
    if (!text) {
      alert("متن را وارد کن");
      return;
    }

    setStep("checking");

    setTimeout(() => {
      setStep("done");
    }, 2000);
  };

  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        ساخت ویدیو 🎬
      </h1>

      <textarea
        className="border p-2 w-full mb-4"
        placeholder="متن خود را بنویس..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Video
      </button>

      {/* وضعیت‌ها */}
      {step === "checking" && (
        <p className="mt-4">در حال بررسی...</p>
      )}

      {step === "done" && (
        <p className="mt-4 text-green-600">
          ویدیو در صف پردازش قرار گرفت ✅
        </p>
      )}
    </main>
  );
}
