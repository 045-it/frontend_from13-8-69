"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function FormEdit() {
  // ============================================================
  // PARAMS / ROUTER
  // ============================================================
  const params = useParams();
  const router = useRouter();

  const id = params.id;

  // ============================================================
  // STATE
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  // ============================================================
  // GET USER ตาม ID
  // ============================================================
  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();

      console.log("User:", data);

      setForm({
        txt_firstname: data.firstname ?? "",
        txt_lastname: data.lastname ?? "",
        txt_username: data.username ?? "",
        txt_password: "",
      });
    } catch (error) {
      console.error("GET USER ERROR:", error);

      setIsError(true);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถโหลดข้อมูลได้",
        text: error.message,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ============================================================
  // CHANGE INPUT
  // ============================================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ============================================================
  // VALIDATE
  // ============================================================
  const validateForm = () => {
    if (!form.txt_firstname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุชื่อ",
        text: "กรุณากรอกชื่อ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุนามสกุล",
        text: "กรุณากรอกนามสกุล",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุ Username",
        text: "กรุณากรอก Username",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    return true;
  };

  // ============================================================
  // PUT UPDATE
  // ============================================================
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSaving(true);

      const payload = {
        firstname: form.txt_firstname,
        lastname: form.txt_lastname,
        username: form.txt_username,
      };

      // ถ้ามีการกรอกรหัสผ่านใหม่
      if (form.txt_password) {
        payload.password = form.txt_password;
      }

      console.log("UPDATE PAYLOAD:", payload);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      console.log("UPDATE RESULT:", result);

      // ========================================================
      // SUCCESS
      // ========================================================
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "ปรับปรุงข้อมูลสมาชิกเรียบร้อยแล้ว",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

        router.push("/users");

        return;
      }

      // ========================================================
      // ERROR 400
      // ========================================================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

        return;
      }

      // ========================================================
      // ERROR 500
      // ========================================================
      if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

        return;
      }

      // ========================================================
      // ERROR OTHER
      // ========================================================
      await Swal.fire({
        icon: "error",
        title: `บันทึกไม่สำเร็จ`,
        text: result.message || "เกิดข้อผิดพลาด",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });
    } catch (error) {
      console.error("UPDATE ERROR:", error);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================================
  // LOADING
  // ============================================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#D8C7B0] border-t-[#8B6F47] rounded-full animate-spin mx-auto mb-4"></div>

          <p className="text-[#6F5942] text-lg">
            กำลังโหลดข้อมูล...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================
  // ERROR
  // ============================================================
  if (isError) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center p-6">
        <div className="bg-[#FFFDF9] rounded-2xl shadow-lg border border-[#E2D5C3] p-8 text-center max-w-md w-full">
          <div className="text-5xl mb-4">⚠️</div>

          <h2 className="text-xl font-semibold text-[#4A3728] mb-2">
            เกิดข้อผิดพลาด
          </h2>

          <p className="text-[#806C58] mb-6">
            ไม่สามารถโหลดข้อมูลสมาชิกได้
          </p>

          <button
            onClick={() => router.push("/users")}
            className="px-6 py-2.5 bg-[#8B6F47] text-white rounded-lg hover:bg-[#6F5637] transition"
          >
            กลับหน้าสมาชิก
          </button>
        </div>
      </div>
    );
  }

  // ============================================================
  // FORM
  // ============================================================
  return (
    <div className="min-h-screen bg-[#F5F0E8] py-10 px-4">

      <div className="max-w-3xl mx-auto">

        {/* TOP BRAND */}
        <div className="text-center mb-8">

          <p className="text-[#9B8062] tracking-[0.35em] text-sm uppercase mb-2">
            LUXURY BAG COLLECTION
          </p>

          <h1 className="text-4xl font-serif font-semibold text-[#4A3728]">
            แก้ไขข้อมูลสมาชิก
          </h1>

          <div className="w-16 h-[2px] bg-[#B79A78] mx-auto mt-4"></div>

        </div>

        {/* CARD */}
        <div className="bg-[#FFFDF9] rounded-2xl shadow-[0_10px_40px_rgba(80,55,30,0.12)] border border-[#E5D9C8] overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#E8D8C4] via-[#F8F2EA] to-[#E8D8C4] px-8 py-6 border-b border-[#DDCEBB]">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#8B6F47] text-white flex items-center justify-center text-xl">
                ♡
              </div>

              <div>
                <p className="text-xs tracking-widest text-[#9B8062] uppercase">
                  Member Profile
                </p>

                <h2 className="text-xl font-semibold text-[#4A3728]">
                  ข้อมูลสมาชิก #{id}
                </h2>
              </div>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleUpdate}
            className="p-8 space-y-6"
          >

            {/* FIRSTNAME */}
            <div>
              <label className="block text-[#5C4634] font-medium mb-2">
                ชื่อ
              </label>

              <input
                type="text"
                name="txt_firstname"
                value={form.txt_firstname}
                onChange={handleChange}
                className="w-full bg-[#FCFAF6] border border-[#D8C8B5] text-[#4A3728] rounded-xl px-4 py-3 outline-none focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition"
                placeholder="กรอกชื่อ"
              />
            </div>

            {/* LASTNAME */}
            <div>
              <label className="block text-[#5C4634] font-medium mb-2">
                นามสกุล
              </label>

              <input
                type="text"
                name="txt_lastname"
                value={form.txt_lastname}
                onChange={handleChange}
                className="w-full bg-[#FCFAF6] border border-[#D8C8B5] text-[#4A3728] rounded-xl px-4 py-3 outline-none focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition"
                placeholder="กรอกนามสกุล"
              />
            </div>

            {/* USERNAME */}
            <div>
              <label className="block text-[#5C4634] font-medium mb-2">
                Username
              </label>

              <input
                type="text"
                name="txt_username"
                value={form.txt_username}
                onChange={handleChange}
                className="w-full bg-[#FCFAF6] border border-[#D8C8B5] text-[#4A3728] rounded-xl px-4 py-3 outline-none focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition"
                placeholder="กรอก Username"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-[#5C4634] font-medium mb-2">
                Password

                <span className="text-sm text-[#A49380] ml-2">
                  (เว้นว่างไว้ถ้าไม่ต้องการเปลี่ยน)
                </span>
              </label>

              <input
                type="password"
                name="txt_password"
                value={form.txt_password}
                onChange={handleChange}
                className="w-full bg-[#FCFAF6] border border-[#D8C8B5] text-[#4A3728] rounded-xl px-4 py-3 outline-none focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition"
                placeholder="กรอกรหัสผ่านใหม่"
              />
            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#E8DED1] pt-6">

              <div className="flex flex-col sm:flex-row gap-3">

                {/* SAVE */}
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 px-6 py-3 bg-[#8B6F47] text-white font-medium rounded-xl hover:bg-[#6F5637] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving
                    ? "กำลังบันทึก..."
                    : "บันทึกข้อมูล"}
                </button>

                {/* CANCEL */}
                <button
                  type="button"
                  onClick={() => router.push("/users")}
                  className="flex-1 px-6 py-3 bg-[#F0E8DD] text-[#5C4634] font-medium rounded-xl hover:bg-[#E5D8C8] transition"
                >
                  ยกเลิก
                </button>

              </div>

            </div>

          </form>

        </div>

        {/* FOOTER */}
        <p className="text-center text-[#A49380] text-sm mt-6">
          Luxury Bag Collection • Member Management
        </p>

      </div>

    </div>
  );
}