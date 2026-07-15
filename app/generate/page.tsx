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
  const [step, setStep] = useState("form"); // form | checking | queue | done
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleGenerate = () => {
    if (!text) {
      alert("متن را وارد کنید");
      return;
    }
    if (!selectedAvatar) {
      alert("لطفاً یک اواتار انتخاب کنید");
      return;
    }

    setStep("checking");

    setTimeout(() => {
      setStep("queue");
    }, 2000);

    setTimeout(() => {
      setStep("done");
    }, 5000);
  };

  const handleReset = () => {
    setText("");
    setSelectedAvatar(null);
    setStep("form");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-white p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎬 AI Avatar Studio
      </h1>

      {/* FORM STEP */}
      {step === "form" && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          {/* Text input */}
          <label className="block mb-2 font-semibold">متن ویدیو</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="متن مورد نظر برای اواتار را وارد کنید..."
            className="w-full border rounded-xl p-3 mb-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            dir="rtl"
          />

          {/* Avatar selection */}
          <h2 className="text-xl font-bold mt-6 mb-3">Choose Avatar</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                onClick={() => setSelectedAvatar(avatar.id)}
                className={`p-2 rounded-2xl cursor-pointer border-4 transition ${
                  selectedAvatar === avatar.id
                    ? "border-blue-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={avatar.img}
                  alt={avatar.name}
                  className="rounded-xl w-full"
                />
                <p className="text-center mt-2">{avatar.name}</p>
              </div>
            ))}
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
          >
            تولید ویدیو
          </button>
        </div>
      )}

      {/* CHECKING STEP */}
      {step === "checking" && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-lg font-semibold">در حال بررسی اطلاعات...</p>
        </div>
      )}

      {/* QUEUE STEP */}
      {step === "queue" && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <div className="animate-pulse h-12 w-12 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-lg font-semibold">ویدیوی شما در صف تولید قرار گرفت...</p>
          <p className="text-gray-500 mt-2">این فرآیند ممکن است چند دقیقه طول بکشد.</p>
        </div>
      )}

      {/* DONE STEP */}
      {step === "done" && (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-xl font-bold mb-4 text-green-600">
            ✅ ویدیو با موفقیت تولید شد!
          </h2>
          <p className="text-gray-600 mb-4">
            {avatars.find((a) => a.id === selectedAvatar)?.name} — متن: "{text}"
          </p>
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-xl font-semibold"
          >
            ساخت ویدیوی جدید
          </button>
        </div>
      )}
    </main>
