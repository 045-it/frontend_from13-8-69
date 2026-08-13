import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#faf7f4] via-[#f3e8e2] to-[#e6d2c9]">

      {/* Background Effect */}
      <div className="absolute inset-0 bg-[#8b5e4b]/5"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ==================== Left Content ==================== */}
          <div className="text-center lg:text-left">

            <span className="inline-block rounded-full bg-[#8b5e4b]/10 px-5 py-2 text-sm font-medium text-[#8b5e4b]">
              ✨ Aura Collection
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#3d302b] md:text-6xl">
              เติมความสวยให้ทุกลุค
              <span className="block text-[#8b5e4b]">
                ด้วยกระเป๋าที่ใช่
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#8a7770] mx-auto lg:mx-0">
              กระเป๋าดีไซน์เรียบหรู คุณภาพดี
              คัดสรรมาเพื่อให้เข้ากับทุกสไตล์
              พร้อมเติมความมั่นใจให้คุณในทุกวัน
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <Link
                href="/products"
                className="rounded-full bg-[#3d302b] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#8b5e4b] hover:scale-105"
              >
                เลือกซื้อสินค้า
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#8b5e4b] px-7 py-3.5 font-semibold text-[#8b5e4b] transition hover:bg-[#8b5e4b] hover:text-white"
              >
                รู้จักเรา
              </Link>

            </div>

          </div>

          {/* ==================== Right Content ==================== */}
          <div className="flex justify-center">

            <div className="relative w-full max-w-lg">

              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-[2rem] bg-[#c89f91]/20 blur-3xl"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80"
                  alt="Aura Collection กระเป๋า"
                  width={900}
                  height={900}
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-[#a67c68]">
                  NEW COLLECTION
                </p>

                <p className="mt-1 font-semibold text-[#3d302b]">
                  Elegant & Simple
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}