"use client";
import { useState } from "react";

const avatars = [
  { id: 1, name: "Business Man", img: "https://i.pravatar.cc/300?img=1" },
  { id: 2, name: "Business Woman", img: "https://i.pravatar.cc/300?img=5" },
  { id: 3, name: "Teacher", img: "https://i.pravatar.cc/300?img=8" },
  { id: 4, name: "Realistic AI", img: "https://i.pravatar.cc/300?img=12" },
];

export default function GeneratePage() {
  const [text, setText] = useState("");
  const [step, setStep] = useState("form");
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleGenerate = async () => {
  if (!text) {
    alert("متن را وارد کنید");
    return;
  }

  if (!selectedAvatar) {
    alert("آواتار انتخاب کن");
    return;
  }

  setStep("checking");

  // 🔥 ارسال به تلگرام
  await fetch("https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: "YOUR_CHAT_ID",
      text: `🎬 درخواست جدید VoxoraAI

📝 متن:
${text}

👤 Avatar:
${selectedAvatar}`,
    }),
  });

  setTimeout(() => {
    setStep("queue");
  }, 2000);
};

    if (!selectedAvatar) {
      alert("یک آواتار انتخاب کنید");
      return;
    }

    setStep("checking");

    setTimeout(() => {
      setStep("queue");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-white p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        🎬 AI Avatar Studio
      </h1>

      {step === "form" && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="متن خود را وارد کنید..."
            className="w-full border p-3 rounded-xl mb-4"
          />

          <div className="grid grid-cols-2 gap-4 mb-6">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.id)}
                className={`p-2 border-4 rounded-xl cursor-pointer ${
                  selectedAvatar === avatar.id
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
              >
                <img src={avatar.img} className="rounded-xl" />
                <p className="text-center">{avatar.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            تولید ویدیو
          </button>

        </div>
      )}

      {step === "checking" && (
        <p className="text-center text-yellow-600">
          در حال بررسی...
        </p>
      )}

      {step === "queue" && (
        <p className="text-center text-green-600">
          در صف پردازش قرار گرفت
        </p>
      )}

    </main>
  );
                }
