export default function ContactSection() {
  return (
    <section className="py-16 bg-[#faf7f4]">
      <div className="max-w-6xl mx-auto px-4">

        {/* หัวข้อ */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-[#a67c68]">
            CONTACT US
          </p>

          <h1 className="text-4xl font-bold text-[#3d302b] mt-2">
            ติดต่อเรา
          </h1>

          <p className="text-[#8a7770] mt-3">
            สอบถามข้อมูลเกี่ยวกับกระเป๋าและการสั่งซื้อได้เลย
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ข้อมูลร้าน */}
          <div className="bg-[#3d302b] text-white rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              ติดต่อร้านของเรา ♡
            </h2>

            <div className="space-y-6">

              <div>
                <p className="font-semibold">📍 ที่อยู่</p>
                <p className="text-white/70 mt-1">
                  123 ถนนแฟชั่น จังหวัดเชียงใหม่
                </p>
              </div>

              <div>
                <p className="font-semibold">📞 โทรศัพท์</p>
                <p className="text-white/70 mt-1">
                  08X-XXX-XXXX
                </p>
              </div>

              <div>
                <p className="font-semibold">✉️ อีเมล</p>
                <p className="text-white/70 mt-1">
                  contact@bagshop.com
                </p>
              </div>

              <div>
                <p className="font-semibold">🕐 เวลาทำการ</p>
                <p className="text-white/70 mt-1">
                  ทุกวัน 09:00 - 20:00 น.
                </p>
              </div>

              <div>
                <p className="font-semibold">ติดตามเรา</p>

                <div className="flex gap-3 mt-3">
                  <button className="w-10 h-10 bg-white/10 rounded-full hover:bg-white hover:text-[#3d302b]">
                    IG
                  </button>

                  <button className="w-10 h-10 bg-white/10 rounded-full hover:bg-white hover:text-[#3d302b]">
                    FB
                  </button>

                  <button className="w-10 h-10 bg-white/10 rounded-full hover:bg-white hover:text-[#3d302b]">
                    TT
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ฟอร์ม */}
          <div className="bg-white rounded-2xl p-8 border border-[#eee3dc]">

            <h2 className="text-2xl font-bold text-[#3d302b]">
              ส่งข้อความถึงเรา
            </h2>

            <p className="text-[#8a7770] mt-2 mb-6">
              กรอกข้อมูลเพื่อสอบถามรายละเอียด
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="ชื่อของคุณ"
                className="w-full p-3 border rounded-xl bg-[#faf7f4] outline-none focus:ring-2 focus:ring-[#c89f91]"
              />

              <input
                type="email"
                placeholder="อีเมล"
                className="w-full p-3 border rounded-xl bg-[#faf7f4] outline-none focus:ring-2 focus:ring-[#c89f91]"
              />

              <input
                type="tel"
                placeholder="เบอร์โทรศัพท์"
                className="w-full p-3 border rounded-xl bg-[#faf7f4] outline-none focus:ring-2 focus:ring-[#c89f91]"
              />

              <textarea
                rows="5"
                placeholder="ข้อความของคุณ"
                className="w-full p-3 border rounded-xl bg-[#faf7f4] outline-none focus:ring-2 focus:ring-[#c89f91] resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-[#8b5e4b] text-white rounded-xl hover:bg-[#6f493b]"
              >
                ส่งข้อความ
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}