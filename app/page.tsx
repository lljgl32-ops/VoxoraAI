import AvatarCard from "../components/AvatarCard";
export default function Home() {
  return (<AvatarCard />
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900">

      {/* Header */}
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


      {/* Welcome */}
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


      {/* Avatars */}
      <section className="px-8 py-10">
        <h3 className="text-2xl font-bold text-center mb-8">
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
            🤖
            <p>هوش مصنوعی</p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="bg-white mx-6 rounded-3xl shadow p-8 mt-10">

        <h3 className="text-2xl font-bold mb-6 text-center">
          امکانات
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h4 className="font-bold mb-2">🎙 انتخاب صدا</h4>
            <p className="text-gray-600">صداهای آماده یا آپلود صدای خودت</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">🌍 چند زبانه</h4>
            <p className="text-gray-600">پشتیبانی از فارسی، انگلیسی و بیشتر</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">📐 نسبت تصویر</h4>
            <p className="text-gray-600">16:9، 9:16، مربع</p>
          </div>

        </div>

      </section>


      {/* My Videos */}
      <section className="p-8">
        <h3 className="text-2xl font-bold">
          My Video
        </h3>

        <p className="text-gray-600">
          ویدیوهای شما بعد از ساخت اینجا نمایش داده می‌شوند.
        </p>
      </section>


      {/* Footer */}
      <footer className="text-center p-8 text-gray-500">
        VoxoraAI
        <br />
        amir.najafi
      </footer>

    </main>
  );
}
