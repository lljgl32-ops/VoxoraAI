"use client";

export default function Dashboard() {
  const userName = "User";

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          به VoxoraAI خوش آمدید
        </h1>

        <p className="text-xl">
          {userName}
        </p>

        <p className="text-gray-500 mt-2">
          amir.najafi
        </p>

        <p className="text-sm text-gray-400">
          سازنده
        </p>
      </div>


      {/* Create Video Button */}
      <div className="mb-10">
        <button className="w-full bg-blue-700 text-white text-xl py-4 rounded-2xl shadow-lg">
          🎬 ساخت ویدیو
        </button>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10">

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          <p className="text-2xl font-bold">10/10</p>
          <p className="text-gray-500">امروز</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          <p className="text-2xl font-bold">0</p>
          <p className="text-gray-500">ویدیوها</p>
        </div>

      </div>


      {/* Avatars */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          آواتارها
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <img
            src="https://i.pravatar.cc/150?img=1"
            className="rounded-2xl shadow"
          />

          <img
            src="https://i.pravatar.cc/150?img=2"
            className="rounded-2xl shadow"
          />

          <img
            src="https://i.pravatar.cc/150?img=3"
            className="rounded-2xl shadow"
          />

          <img
            src="https://i.pravatar.cc/150?img=4"
            className="rounded-2xl shadow"
          />

        </div>
      </div>


      {/* Sections */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          🎥
          <p>My Video</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          👤
          <p>My Avatar</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          📊
          <p>Usage</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow text-center">
          ⚙️
          <p>Settings</p>
        </div>

      </div>

    </main>
  );
        }
