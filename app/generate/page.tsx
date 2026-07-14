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
  const handleGenerate = () => {
    if (!text) {
      alert("متن را وارد کنید");
      return;<h2 className="text-xl font-bold mt-6 mb-3">Choose Avatar</h2>

<div className="grid grid-cols-2 gap-4">
  {avatars.map((avatar) => (
    <div
      key={avatar.id}
      onClick={() => setSelectedAvatar(avatar.id)}
      className={`p-2 rounded-2xl cursor-pointer border-4 ${
        selectedAvatar === avatar.id
          ? "border-blue-600"
          : "border-transparent"
      }`}
    >
      <img
        src={avatar.img}
        alt={avatar.name}
        className="rounded-xl"
      />
      <p className="text-center mt-2">{avatar.name}</p>
    </div>
  ))}
</div>
    }

    setStep("checking");

    setTimeout(() => {
      setStep("queue");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-white p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🎬 AI Avatar Studio
      </h1>

      {/* FORM */}
     
