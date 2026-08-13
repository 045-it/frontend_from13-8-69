export default function Footersection() {
  return (
    <footer className="bg-[#3d302b] text-[#e8ddd7] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ==================== ส่วนที่ 1: ข้อมูลร้าน ==================== */}
          <div>
            <h2 className="text-[#f3d8ce] text-2xl font-bold mb-4">
              Aura
            </h2>

            <p className="text-sm leading-relaxed text-[#cdbdb5] mb-4">
              กระเป๋าดีไซน์เรียบหรูสำหรับทุกไลฟ์สไตล์
              คัดสรรกระเป๋าคุณภาพดี ดีไซน์สวย
              พร้อมเติมความมั่นใจให้ทุกลุคของคุณ
            </p>

            <p className="text-xs text-[#a9958d]">
              Elegant • Simple • Everyday
            </p>
          </div>

          {/* ==================== ส่วนที่ 2: เมนูลัด ==================== */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              เมนูลัด
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#cdbdb5] hover:text-[#f3d8ce] transition-colors duration-200"
                >
                  หน้าแรก
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#cdbdb5] hover:text-[#f3d8ce] transition-colors duration-200"
                >
                  สินค้าทั้งหมด
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#cdbdb5] hover:text-[#f3d8ce] transition-colors duration-200"
                >
                  กระเป๋าแนะนำ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#cdbdb5] hover:text-[#f3d8ce] transition-colors duration-200"
                >
                  โปรโมชั่น
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#cdbdb5] hover:text-[#f3d8ce] transition-colors duration-200"
                >
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* ==================== ส่วนที่ 3: ติดต่อเรา ==================== */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              ติดต่อเรา
            </h3>

            <ul className="space-y-3 text-sm text-[#cdbdb5]">
              <li>
                📍 เชียงใหม่ ประเทศไทย
              </li>

              <li>
                📞 02-123-4567
              </li>

              <li>
                ✉️ support@aura.com
              </li>

              <li>
                🕐 จันทร์ - ศุกร์ 09:00 - 18:00 น.
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-5 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#51413a] flex items-center justify-center text-white text-xs font-bold hover:bg-[#8b5e4b] transition-colors"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#51413a] flex items-center justify-center text-white text-xs font-bold hover:bg-[#8b5e4b] transition-colors"
              >
                TW
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#51413a] flex items-center justify-center text-white text-xs font-bold hover:bg-[#c89f91] transition-colors"
              >
                IG
              </a>

            </div>
          </div>

        </div>

        {/* ==================== Copyright ==================== */}
        <div className="border-t border-[#51413a] mt-10 pt-6 text-center">
          <p className="text-sm text-[#a9958d]">
            © {new Date().getFullYear()} Aura Collection. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}