export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900">

      <header className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            VoxoraAI
          </h1>
          <p className="text-sm text-gray-500">
            آواتارساز هوشمند
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
          ورود
        </button>
      </header>

      <section className="text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">
          به VoxoraAI خوش آمدید
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          ساخت ویدیوهای هوشمند را شروع کنید
        </p>

        <button className="bg-blue-700 text-white text-xl px-10 py-4 rounded-2xl shadow-lg">
          🎬 ساخت ویدیو
        </button>
      </section>

      <footer className="text-center p-8 text-gray-500">
        VoxoraAI
        <br />
        amir.najafi
      </footer>

    </main>
  );
}
