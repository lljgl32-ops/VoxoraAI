"use client";
import { useState } from "react";

export default function GeneratePage() {
  const [text, setText] = useState("");
  const [step, setStep] = useState("form");

  const handleGenerate = () => {
    if (!text) {
      alert("متن را وارد کنید");
      return;
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
     
