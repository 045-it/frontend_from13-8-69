import Image from 'next/image';

export default function Cardsection() {
  const products = [
    {
      name: 'กระเป๋าสะพาย Mini Classic',
      description: 'กระเป๋าสะพายดีไซน์เรียบหรู ขนาดกะทัดรัด แมตช์ได้ทุกลุค',
      price: '฿1,290',
      image:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
    },
    {
      name: 'กระเป๋าถือ Elegant Lady',
      description: 'กระเป๋าถือทรงสวย ดีไซน์เรียบหรู เหมาะสำหรับวันทำงานและวันพิเศษ',
      price: '฿1,890',
      image:
        'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&q=80',
    },
    {
      name: 'กระเป๋าสะพาย Everyday Bag',
      description: 'กระเป๋าสำหรับใช้ในชีวิตประจำวัน จุของได้เยอะ น้ำหนักเบา',
      price: '฿1,590',
      image:
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    },
  ];

  return (
    <section className="py-16 bg-[#faf7f4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* หัวข้อ Section */}
        <div className="mb-10 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#a67c68] font-medium">
            Aura Collection
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#3d302b]">
            กระเป๋าแนะนำ
          </h2>

          <p className="mt-3 text-[#8a7770]">
            เติมความสวยให้ทุกลุคด้วยกระเป๋าดีไซน์ที่คัดสรรมาเพื่อคุณ
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-[#eee3dc] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* รูปสินค้า */}
              <div className="relative w-full h-72 bg-[#f3eee9] overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* ป้ายสินค้า */}
                {index === 0 && (
                  <span className="absolute top-4 left-4 bg-[#8b5e4b] text-white text-xs px-3 py-1.5 rounded-full">
                    Best Seller
                  </span>
                )}

                {index === 1 && (
                  <span className="absolute top-4 left-4 bg-[#c89f91] text-white text-xs px-3 py-1.5 rounded-full">
                    New
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

              {/* รายละเอียดสินค้า */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-[#3d302b] group-hover:text-[#8b5e4b] transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-[#8a7770] mt-2 leading-6 line-clamp-2">
                  {product.description}
                </p>

                {/* ราคา + ปุ่ม */}
                <div className="mt-5 flex items-center justify-between">

                  <span className="text-xl font-bold text-[#8b5e4b]">
                    {product.price}
                  </span>

                  <button className="px-4 py-2.5 bg-[#3d302b] text-white text-sm font-medium rounded-full hover:bg-[#8b5e4b] transition-colors">
                    เพิ่มลงตะกร้า
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ปุ่มดูสินค้าทั้งหมด */}
        <div className="mt-10 text-center">
          <button className="px-7 py-3 border border-[#8b5e4b] text-[#8b5e4b] rounded-full text-sm font-medium hover:bg-[#8b5e4b] hover:text-white transition-colors">
            ดูสินค้าทั้งหมด
          </button>
        </div>

      </div>
    </section>
  );
}
