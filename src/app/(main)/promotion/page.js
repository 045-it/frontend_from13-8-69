import Image from "next/image";

export default function PromotionPage() {
  const promotions = [
    {
      title: "ลดพิเศษ 20%",
      subtitle: "สำหรับกระเป๋าที่ร่วมรายการ",
      detail: "ช้อปครบ 1,500 บาท รับส่วนลดทันที 20%",
      code: "AURA20",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&q=80",
    },
    {
      title: "ซื้อ 2 ลด 15%",
      subtitle: "ช้อปคู่สุดคุ้ม",
      detail: "เลือกกระเป๋า 2 ใบจากสินค้าที่ร่วมรายการ",
      code: "AURA15",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1000&q=80",
    },
    {
      title: "ส่งฟรีทั่วประเทศ",
      subtitle: "ไม่มีขั้นต่ำ",
      detail: "รับสิทธิ์จัดส่งฟรีสำหรับทุกคำสั่งซื้อ",
      code: "FREESHIP",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1000&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf7f4]">

      {/* =========================
          Hero
      ========================= */}
      <section className="pt-32 pb-16 bg-[#3d302b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="text-sm tracking-[0.3em] uppercase text-[#c89f91]">
            Aura Collection
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            โปรโมชั่นพิเศษ
          </h1>

          <p className="mt-4 text-[#d8c8c0]">
            ดีลพิเศษที่เราคัดสรรมาเพื่อคุณ
          </p>

        </div>
      </section>


      {/* =========================
          Promotion Cards
      ========================= */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {promotions.map((promotion, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eee3dc] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* รูป */}
                <div className="relative h-64 overflow-hidden bg-[#f3eee9]">

                  <Image
                    src={promotion.image}
                    alt={promotion.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* ป้าย */}
                  <div className="absolute top-4 left-4 bg-[#8b5e4b] text-white text-xs font-medium px-4 py-2 rounded-full">
                    PROMOTION
                  </div>

                </div>


                {/* เนื้อหา */}
                <div className="p-6">

                  <p className="text-sm text-[#a67c68]">
                    {promotion.subtitle}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#3d302b]">
                    {promotion.title}
                  </h2>

                  <p className="mt-3 text-sm text-[#8a7770] leading-6">
                    {promotion.detail}
                  </p>


                  {/* Code */}
                  <div className="mt-5 p-3 rounded-xl bg-[#faf7f4] border border-dashed border-[#c89f91]">

                    <p className="text-xs text-[#a9958d]">
                      โค้ดส่วนลด
                    </p>

                    <p className="mt-1 text-lg font-bold tracking-wider text-[#8b5e4b]">
                      {promotion.code}
                    </p>

                  </div>


                  {/* ปุ่ม */}
                  <button
                    className="w-full mt-5 py-3 rounded-xl bg-[#3d302b] text-white text-sm font-medium hover:bg-[#8b5e4b] transition-colors"
                  >
                    ใช้โปรโมชั่น
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          Special Banner
      ========================= */}
      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-[#c89f91]">

            <div className="absolute inset-0 bg-[#3d302b]/10"></div>

            <div className="relative px-8 py-14 md:px-16 text-center">

              <p className="text-sm tracking-[0.3em] uppercase text-white/80">
                Special Offer
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                ช้อปวันนี้ รับสิทธิ์พิเศษทันที
              </h2>

              <p className="mt-4 text-white/90">
                โปรโมชั่นมีจำนวนจำกัด รีบช้อปก่อนหมดเวลา
              </p>

              <button
                className="mt-7 px-8 py-3 rounded-full bg-white text-[#3d302b] font-medium hover:bg-[#faf7f4] transition-colors"
              >
                เลือกซื้อสินค้า
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          Terms
      ========================= */}
      <section className="pb-20">

        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-xl font-bold text-[#3d302b]">
            เงื่อนไขโปรโมชั่น
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#8a7770]">
            โปรโมชั่นแต่ละรายการมีเงื่อนไขแตกต่างกัน
            กรุณาตรวจสอบรายละเอียดก่อนใช้สิทธิ์
            โปรโมชั่นไม่สามารถใช้ร่วมกับส่วนลดอื่นได้
            และบริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
          </p>

        </div>

      </section>

    </main>
  );
}