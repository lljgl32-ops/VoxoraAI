export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">

      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-blue-700">
          VoxoraAI
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
          ورود
        </button>
      </header>


      {/* Hero */}
      <section className="text-center px-6 py-16">

        <h2 className="text-5xl font-bold mb-5">
          ساخت ویدیو با آواتار هوش مصنوعی
        </h2>

        <p className="text-xl text-gray-600 mb-8">
          Create realistic AI avatar videos in minutes
        </p>


        <button className="bg-blue-700 text-white text-xl px-10 py-4 rounded-2xl shadow-lg">
          ساخت ویدیو
        </button>

      </section>


      {/* Avatar Selection */}
      <section className="px-8 py-10">

        <h3 className="text-3xl font-bold text-center mb-8">
          انتخاب آواتار
        </h3>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl shadow p-5 text-center">
            👨‍💼
            <p>مدیر رسمی</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 text-center">
            👩‍🏫
            <p>مدرس</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 text-center">
            🧑‍💻
            <p>فروشنده</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5 text-center">
            🎨
            <p>کارتونی</p>
          </div>

        </div>

      </section>


      {/* Video Options */}
      <section className="bg-white mx-6 rounded-3xl shadow p-8">

        <h3 className="text-2xl font-bold mb-5">
          تنظیمات ویدیو
        </h3>


        <div className="grid md:grid-cols-3 gap-4">

          <button className="border p-4 rounded-xl">
            انتخاب زبان
          </button>

          <button className="border p-4 rounded-xl">
            انتخاب صدا
          </button>

          <button className="border p-4 rounded-xl">
            حالت آواتار
          </button>


          <button className="border p-4 rounded-xl">
            16:9
          </button>

          <button className="border p-4 rounded-xl">
            9:16
          </button>

          <button className="border p-4 rounded-xl">
            مربع
          </button>

        </div>

      </section>


      {/* My Video */}
      <section className="p-8">

        <h3 className="text-3xl font-bold">
          My Video
        </h3>

        <p className="text-gray-600">
          ویدیوهای ساخته شده شما اینجا نمایش داده می‌شود.
        </p>

      </section>


      {/* Owner */}
      <footer className="text-center p-8 text-gray-500">

        VoxoraAI
        <br />

        amir.najafi

      </footer>


    </main>
  );
}
