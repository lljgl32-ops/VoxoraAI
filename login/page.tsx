"use client";

import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white">

        <h1 className="text-3xl font-bold mb-4">
          به VoxoraAI خوش آمدید
        </h1>

        <p className="text-xl mb-6">
          {name} {lastName}
        </p>

        <p className="text-gray-500">
          amir.najafi
        </p>

        <p className="text-sm text-gray-400">
          سازنده
        </p>

      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">

      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center">
          ورود به VoxoraAI
        </h1>

        <input
          type="text"
          placeholder="نام (اجباری)"
          className="w-full border p-3 rounded-xl mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="نام خانوادگی (اختیاری)"
          className="w-full border p-3 rounded-xl mb-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="ایمیل"
          className="w-full border p-3 rounded-xl mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={() => {
            if (!name || !email) {
              alert("نام و ایمیل الزامی است");
              return;
            }
            setSubmitted(true);
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          ورود
        </button>

      </div>

    </main>
  );
}
