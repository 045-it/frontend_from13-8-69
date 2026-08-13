import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen bg-[#faf7f4]">

      {/* Hero About */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-[#a67c68]">
              About Aura
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#3d302b]">
              เกี่ยวกับเรา
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-[#8a7770] leading-7">
              ทำความรู้จักกับ Aura Collection
              ร้านกระเป๋าที่ตั้งใจคัดสรรดีไซน์สวย
              เรียบหรู และเหมาะกับทุกไลฟ์สไตล์
            </p>
          </div>

        </div>
      </section>


      {/* About Us */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* รูป */}
            <div className="relative">

              <div className="absolute -inset-4 bg-[#c89f91]/20 rounded-3xl blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80"
                  alt="Aura Collection"
                  width={900}
                  height={900}
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>


            {/* ข้อความ */}
            <div>

              <p className="text-sm tracking-[0.25em] uppercase text-[#a67c68]">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#3d302b]">
                กระเป๋าที่สะท้อนความเป็นคุณ
              </h2>

              <p className="mt-5 text-[#8a7770] leading-7">
                Aura Collection
                เกิดขึ้นจากความตั้งใจที่จะนำเสนอกระเป๋าที่มีดีไซน์สวย
                เรียบง่าย และสามารถใช้งานได้ในทุกวัน
              </p>

              <p className="mt-4 text-[#8a7770] leading-7">
                เราคัดสรรกระเป๋าหลากหลายสไตล์
                เพื่อให้คุณสามารถเลือกใบที่เข้ากับบุคลิก
                การแต่งตัว และไลฟ์สไตล์ของตัวเองได้อย่างลงตัว
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">

                <div className="text-center bg-white rounded-2xl p-5 border border-[#eee3dc]">
                  <div className="text-2xl">✨</div>
                  <h3 className="mt-2 font-semibold text-[#3d302b]">
                    ดีไซน์
                  </h3>
                  <p className="mt-1 text-xs text-[#8a7770]">
                    สวยและทันสมัย
                  </p>
                </div>

                <div className="text-center bg-white rounded-2xl p-5 border border-[#eee3dc]">
                  <div className="text-2xl">🤎</div>
                  <h3 className="mt-2 font-semibold text-[#3d302b]">
                    คุณภาพ
                  </h3>
                  <p className="mt-1 text-xs text-[#8a7770]">
                    คัดสรรอย่างใส่ใจ
                  </p>
                </div>

                <div className="text-center bg-white rounded-2xl p-5 border border-[#eee3dc]">
                  <div className="text-2xl">👜</div>
                  <h3 className="mt-2 font-semibold text-[#3d302b]">
                    ใช้งานง่าย
                  </h3>
                  <p className="mt-1 text-xs text-[#8a7770]">
                    เหมาะกับทุกวัน
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <p className="text-sm tracking-[0.3em] uppercase text-[#a67c68]">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#3d302b]">
            ความสวยที่ใช่สำหรับคุณ
          </h2>

          <p className="mt-5 text-[#8a7770] leading-8">
            เราเชื่อว่ากระเป๋าไม่ได้เป็นเพียงของใช้
            แต่เป็นส่วนหนึ่งของสไตล์และตัวตน
            Aura Collection จึงตั้งใจนำเสนอสินค้าที่ช่วยเติมเต็ม
            ความมั่นใจและทำให้ทุกลุคของคุณดูพิเศษยิ่งขึ้น
          </p>

        </div>
      </section>


      {/* Values */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <p className="text-sm tracking-[0.3em] uppercase text-[#a67c68]">
              Why Aura
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#3d302b]">
              ทำไมต้อง Aura Collection
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            <div className="bg-white rounded-3xl p-8 text-center border border-[#eee3dc] shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#f3eee9] flex items-center justify-center text-2xl">
                💎
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#3d302b]">
                คุณภาพ
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8a7770]">
                คัดเลือกสินค้าที่มีคุณภาพ
                เพื่อให้คุณใช้งานได้อย่างมั่นใจ
              </p>
            </div>


            <div className="bg-white rounded-3xl p-8 text-center border border-[#eee3dc] shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#f3eee9] flex items-center justify-center text-2xl">
                🌷
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#3d302b]">
                ดีไซน์
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8a7770]">
                ดีไซน์เรียบหรู สามารถแมตช์
                ได้กับหลากหลายสไตล์
              </p>
            </div>


            <div className="bg-white rounded-3xl p-8 text-center border border-[#eee3dc] shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#f3eee9] flex items-center justify-center text-2xl">
                🤍
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#3d302b]">
                ใส่ใจลูกค้า
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#8a7770]">
                พร้อมให้บริการและดูแลลูกค้า
                ด้วยความจริงใจในทุกขั้นตอน
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}