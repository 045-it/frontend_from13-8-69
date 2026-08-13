import Image from "next/image";

export default function ProductsPage() {
  const products = [
    {
      name: "กระเป๋าสะพาย Mini Classic",
      description:
        "กระเป๋าสะพายดีไซน์เรียบหรู ขนาดกะทัดรัด แมตช์ได้ทุกลุค",
      price: "฿1,290",
      category: "กระเป๋าสะพาย",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      tag: "Best Seller",
    },
    {
      name: "กระเป๋าถือ Elegant Lady",
      description:
        "กระเป๋าถือทรงสวย ดีไซน์เรียบหรู เหมาะสำหรับวันทำงานและวันพิเศษ",
      price: "฿1,890",
      category: "กระเป๋าถือ",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80",
      tag: "New",
    },
    {
      name: "กระเป๋าสะพาย Everyday Bag",
      description:
        "กระเป๋าสำหรับใช้ในชีวิตประจำวัน จุของได้เยอะ น้ำหนักเบา",
      price: "฿1,590",
      category: "กระเป๋าสะพาย",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
      tag: "",
    },
    {
      name: "กระเป๋า Classic Brown",
      description:
        "กระเป๋าสีน้ำตาลคลาสสิก ให้ลุคสุภาพและดูมีสไตล์",
      price: "฿1,790",
      category: "กระเป๋าถือ",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      tag: "",
    },
    {
      name: "กระเป๋า Daily Shoulder",
      description:
        "กระเป๋าสะพายข้างขนาดพอดี เหมาะสำหรับการใช้งานในทุกวัน",
      price: "฿1,490",
      category: "กระเป๋าสะพาย",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
      tag: "Popular",
    },
    {
      name: "กระเป๋า Luxury Mini",
      description:
        "กระเป๋าใบเล็กดีไซน์หรู เหมาะสำหรับออกงานและโอกาสพิเศษ",
      price: "฿2,190",
      category: "กระเป๋าออกงาน",
      image:
        "https://images.unsplash.com/photo-1566150902887-9679d1d5f83a?w=800&q=80",
      tag: "Premium",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf7f4]">

      {/* ==================== Header ==================== */}
      <section className="pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm tracking-[0.3em] uppercase text-[#a67c68]">
              Aura Collection
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#3d302b]">
              สินค้าทั้งหมด
            </h1>

            <p className="mt-4 text-[#8a7770]">
              เลือกกระเป๋าใบโปรดที่เหมาะกับสไตล์ของคุณ
            </p>

          </div>

        </div>
      </section>


      {/* ==================== Category ==================== */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap justify-center gap-3">

            <button className="px-5 py-2.5 rounded-full bg-[#3d302b] text-white text-sm font-medium">
              สินค้าทั้งหมด
            </button>

            <button className="px-5 py-2.5 rounded-full bg-white border border-[#eee3dc] text-[#765548] text-sm font-medium hover:bg-[#f3eee9] transition">
              กระเป๋าสะพาย
            </button>

            <button className="px-5 py-2.5 rounded-full bg-white border border-[#eee3dc] text-[#765548] text-sm font-medium hover:bg-[#f3eee9] transition">
              กระเป๋าถือ
            </button>

            <button className="px-5 py-2.5 rounded-full bg-white border border-[#eee3dc] text-[#765548] text-sm font-medium hover:bg-[#f3eee9] transition">
              กระเป๋าออกงาน
            </button>

          </div>

        </div>
      </section>


      {/* ==================== Products ==================== */}
      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {products.map((product, index) => (

              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eee3dc] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >

                {/* รูปสินค้า */}
                <div className="relative w-full h-80 bg-[#f3eee9] overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* ป้ายสินค้า */}
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-[#8b5e4b] text-white text-xs px-3 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  )}

                  {/* ปุ่มหัวใจ */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#765548] hover:bg-[#8b5e4b] hover:text-white transition-colors"
                    aria-label="เพิ่มรายการโปรด"
                  >
                    ♡
                  </button>

                </div>


                {/* รายละเอียด */}
                <div className="p-5">

                  <p className="text-xs text-[#a67c68] mb-2">
                    {product.category}
                  </p>

                  <h2 className="text-lg font-semibold text-[#3d302b] group-hover:text-[#8b5e4b] transition-colors">
                    {product.name}
                  </h2>

                  <p className="text-sm text-[#8a7770] mt-2 leading-6 line-clamp-2">
                    {product.description}
                  </p>


                  {/* ราคา + ปุ่ม */}
                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-xl font-bold text-[#8b5e4b]">
                      {product.price}
                    </span>

                    <button
                      className="px-4 py-2.5 bg-[#3d302b] text-white text-sm font-medium rounded-full hover:bg-[#8b5e4b] transition-colors"
                    >
                      เพิ่มลงตะกร้า
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================== Bottom Banner ==================== */}
      <section className="bg-[#3d302b] py-16">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <p className="text-sm tracking-[0.3em] uppercase text-[#c89f91]">
            Aura Collection
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            ค้นพบกระเป๋าที่ใช่สำหรับคุณ
          </h2>

          <p className="mt-4 text-[#d8c8c0]">
            เติมเต็มทุกลุคด้วยกระเป๋าดีไซน์เรียบหรู
          </p>

          <button className="mt-7 px-7 py-3 rounded-full bg-white text-[#3d302b] text-sm font-medium hover:bg-[#f3eee9] transition">
            เลือกซื้อสินค้า
          </button>

        </div>

      </section>

    </main>
  );
}