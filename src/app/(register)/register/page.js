"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // ============================================================
  // INPUT
  // ============================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // ============================================================
  // VALIDATE
  // ============================================================
  const validateForm = () => {
    if (!form.txt_firstname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกชื่อ",
        text: "กรุณาระบุชื่อ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอกนามสกุล",
        text: "กรุณาระบุนามสกุล",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Username",
        text: "กรุณาระบุ Username",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    if (!form.txt_password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Password",
        text: "กรุณาระบุ Password",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return false;
    }

    return true;
  };

  // ============================================================
  // POST API
  // ============================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      // ========================================================
      // ข้อมูลที่จะส่งไป API
      // ========================================================
      const payload = {
        firstname: form.txt_firstname.trim(),
        lastname: form.txt_lastname.trim(),
        username: form.txt_username.trim(),
        password: form.txt_password,
      };

      console.log("POST DATA:", payload);

      // ========================================================
      // POST /users
      // ========================================================
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      // ========================================================
      // อ่านผลลัพธ์จาก API
      // ========================================================
      const result = await response.json().catch(() => ({}));

      console.log("API RESPONSE:", result);
      console.log("STATUS:", response.status);

      // ========================================================
      // SUCCESS
      // ========================================================
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ!",
          text: "เพิ่มข้อมูลผู้ใช้เรียบร้อยแล้ว",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

        // ล้าง Form
        setForm({
          txt_firstname: "",
          txt_lastname: "",
          txt_username: "",
          txt_password: "",
        });

        return;
      }

      // ========================================================
      // ERROR 400
      // ========================================================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง`,
          text:
            result.message ||
            "กรุณาตรวจสอบข้อมูลที่กรอกอีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#A88B68",
        });

        return;
      }

      // ========================================================
      // ERROR 409
      // ========================================================
      if (response.status === 409) {
        await Swal.fire({
          icon: "warning",
          title: "Username ถูกใช้งานแล้ว",
          text: "กรุณาเลือก Username ใหม่",
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
          title: "เซิร์ฟเวอร์เกิดข้อผิดพลาด",
          text:
            result.message ||
            "กรุณาลองใหม่อีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

        return;
      }

      // ========================================================
      // ERROR อื่น ๆ
      // ========================================================
      await Swal.fire({
        icon: "error",
        title: `บันทึกไม่สำเร็จ`,
        text:
          result.message ||
          `เกิดข้อผิดพลาด Status ${response.status}`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

    } catch (error) {
      // ========================================================
      // CONNECTION ERROR
      // ========================================================
      console.error("POST ERROR:", error);

      await Swal.fire({
        icon: "error",
        title: "ไม่สามารถเชื่อมต่อกับ API ได้",
        text:
          "กรุณาตรวจสอบอินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

    } finally {
      setIsLoading(false);
    }
  };

  // ============================================================
  // UI
  // ============================================================
  return (
    <div className="min-h-screen bg-[#F5F0E8] py-10 px-4">

      <div className="max-w-2xl mx-auto">

        {/* BRAND */}
        <div className="text-center mb-8">

          <p className="text-[#A88B68] text-xs tracking-[0.35em] uppercase mb-2">
            AURA COLLECTION
          </p>

          <h1 className="text-4xl font-serif font-bold text-[#4A3728]">
            สมัครสมาชิก
          </h1>

          <div className="w-16 h-[2px] bg-[#A88B68] mx-auto mt-4"></div>

          <p className="text-[#806C58] mt-4">
            สมัครสมาชิกเพื่อเลือกกระเป๋าหรูใบโปรดของคุณ
          </p>

        </div>

        {/* CARD */}
        <div className="bg-[#FFFDF9] rounded-3xl shadow-[0_10px_40px_rgba(80,55,30,0.12)] border border-[#E5D9C8] overflow-hidden">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#E8D8C4] via-[#F8F3EC] to-[#E8D8C4] px-8 py-6 border-b border-[#DDCEBB]">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-[#8B6F47] flex items-center justify-center text-white text-xl">
                A
              </div>

              <div>

                <p className="text-xs text-[#A88B68] tracking-widest uppercase">
                  Member Registration
                </p>

                <h2 className="text-xl font-semibold text-[#4A3728]">
                  สร้างบัญชีของคุณ
                </h2>

              </div>

            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
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
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] placeholder-[#B9AAA0] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition disabled:opacity-50"
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
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] placeholder-[#B9AAA0] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition disabled:opacity-50"
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
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] placeholder-[#B9AAA0] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition disabled:opacity-50"
                placeholder="กรอก Username"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block text-[#5C4634] font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                name="txt_password"
                value={form.txt_password}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] placeholder-[#B9AAA0] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 transition disabled:opacity-50"
                placeholder="กรอก Password"
              />

            </div>

            {/* BUTTON */}
            <div className="pt-2">

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3.5 bg-[#8B6F47] text-white font-medium rounded-xl hover:bg-[#6F5637] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >

                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">

                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>

                    กำลังบันทึกข้อมูล...

                  </span>
                ) : (
                  "บันทึกข้อมูล"
                )}

              </button>

            </div>

          </form>

        </div>

        {/* FOOTER */}
        <p className="text-center text-[#A49380] text-xs tracking-wider mt-6">
          AURA COLLECTION • LUXURY BAG
        </p>

      </div>

    </div>
  );
}