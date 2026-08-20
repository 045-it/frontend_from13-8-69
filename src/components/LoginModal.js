"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function LoginModal({ isOpen, onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  // =========================
  // Reset Form
  // =========================
  useEffect(() => {
    if (isOpen) {
      setIsLoginMode(true);

      setForm({
        txt_firstname: "",
        txt_lastname: "",
        txt_username: "",
        txt_password: "",
      });
    }
  }, [isOpen]);

  // =========================
  // Input
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // Validate
  // =========================
  const validateRegister = () => {
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

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // =====================================================
    // REGISTER
    // =====================================================
    if (!isLoginMode) {
      if (!validateRegister()) {
        return;
      }

      try {
        setIsLoading(true);

        // ข้อมูลที่จะส่ง API
        const payload = {
          firstname: form.txt_firstname.trim(),
          lastname: form.txt_lastname.trim(),
          username: form.txt_username.trim(),
          password: form.txt_password,
        };

        console.log("POST DATA:", payload);

        // POST /users
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json().catch(() => ({}));

        console.log("STATUS:", response.status);
        console.log("API RESPONSE:", result);

        // =========================
        // SUCCESS
        // =========================
        if (response.ok) {
          await Swal.fire({
            icon: "success",
            title: "สมัครสมาชิกสำเร็จ!",
            text: "ข้อมูลถูกบันทึกลงระบบเรียบร้อยแล้ว",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8B6F47",
          });

          // ล้างข้อมูล
          setForm({
            txt_firstname: "",
            txt_lastname: "",
            txt_username: "",
            txt_password: "",
          });

          // กลับหน้า Login
          setIsLoginMode(true);

          return;
        }

        // =========================
        // 400
        // =========================
        if (response.status === 400) {
          await Swal.fire({
            icon: "warning",
            title: "ข้อมูลไม่ถูกต้อง",
            text:
              result.message ||
              "กรุณาตรวจสอบข้อมูลที่กรอกอีกครั้ง",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8B6F47",
          });

          return;
        }

        // =========================
        // 409
        // =========================
        if (response.status === 409) {
          await Swal.fire({
            icon: "warning",
            title: "Username ถูกใช้งานแล้ว",
            text: "กรุณาใช้ Username อื่น",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8B6F47",
          });

          return;
        }

        // =========================
        // 500
        // =========================
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

        // =========================
        // ERROR อื่น
        // =========================
        await Swal.fire({
          icon: "error",
          title: `สมัครสมาชิกไม่สำเร็จ`,
          text:
            result.message ||
            `Status ${response.status}`,
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

      } catch (error) {
        console.error("REGISTER ERROR:", error);

        await Swal.fire({
          icon: "error",
          title: "เชื่อมต่อ API ไม่สำเร็จ",
          text:
            "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#8B6F47",
        });

      } finally {
        setIsLoading(false);
      }

      return;
    }

    // =====================================================
    // LOGIN
    // =====================================================

    if (!form.txt_username.trim() || !form.txt_password.trim()) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอกข้อมูล",
        text: "กรุณากรอก Username และ Password",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B6F47",
      });

      return;
    }

    console.log("LOGIN DATA:", {
      username: form.txt_username,
      password: form.txt_password,
    });

    // ตอนนี้ Login ยังไม่ได้เชื่อม API Login
    await Swal.fire({
      icon: "success",
      title: "เข้าสู่ระบบ",
      text: "รับข้อมูล Username และ Password แล้ว",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#8B6F47",
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3d302b]/40 backdrop-blur-sm p-4">

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#E5D9C8] p-8">

        {/* ปุ่มปิด */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A88B68] hover:text-[#4A3728] hover:bg-[#F5F0E8] rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8 mt-2">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#8B6F47] to-[#CBB79D] text-white font-serif font-bold text-2xl shadow-lg mb-4">
            A
          </div>

          <p className="text-xs tracking-[0.3em] text-[#A88B68] uppercase">
            AURA COLLECTION
          </p>

          <h2 className="text-2xl font-bold text-[#4A3728] mt-2">
            {isLoginMode
              ? "ยินดีต้อนรับกลับมา"
              : "สร้างบัญชีใหม่"}
          </h2>

          <p className="mt-2 text-sm text-[#806C58]">
            {isLoginMode
              ? "กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ"
              : "สมัครสมาชิกเพื่อเลือกกระเป๋าหรูใบโปรดของคุณ"}
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* ชื่อ */}
          <div>
            <label className="block text-sm font-medium text-[#5C4634] mb-2">
              ชื่อ
            </label>

            <input
              type="text"
              name="txt_firstname"
              value={form.txt_firstname}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 disabled:opacity-50"
              placeholder="กรอกชื่อ"
            />
          </div>

          {/* นามสกุล */}
          <div>
            <label className="block text-sm font-medium text-[#5C4634] mb-2">
              นามสกุล
            </label>

            <input
              type="text"
              name="txt_lastname"
              value={form.txt_lastname}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 disabled:opacity-50"
              placeholder="กรอกนามสกุล"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#5C4634] mb-2">
              Username
            </label>

            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 disabled:opacity-50"
              placeholder="กรอก Username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#5C4634] mb-2">
              Password
            </label>

            <input
              type="password"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl border border-[#D8C8B5] bg-[#FCFAF6] text-[#4A3728] outline-none focus:bg-white focus:border-[#8B6F47] focus:ring-2 focus:ring-[#CBB79D]/30 disabled:opacity-50"
              placeholder="กรอก Password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-xl shadow-md text-sm font-medium text-white bg-[#8B6F47] hover:bg-[#6F5637] transition disabled:opacity-50"
          >
            {isLoading
              ? "กำลังบันทึก..."
              : isLoginMode
              ? "เข้าสู่ระบบ"
              : "สมัครสมาชิก"}
          </button>

        </form>

        {/* Divider */}
        <div className="mt-6 mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5D9C8]" />
            </div>

            <div className="relative flex justify-center">
              <span className="px-4 bg-[#FFFDF9] text-sm text-[#A88B68]">
                หรือ
              </span>
            </div>
          </div>
        </div>

        {/* Toggle */}
        <div className="text-center">

          <p className="text-sm text-[#806C58]">

            {isLoginMode
              ? "ยังไม่มีบัญชีใช่ไหม? "
              : "มีบัญชีอยู่แล้วใช่ไหม? "}

            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-medium text-[#8B6F47] hover:text-[#6F5637]"
            >
              {isLoginMode
                ? "สมัครสมาชิกเลย"
                : "เข้าสู่ระบบ"}
            </button>

          </p>

        </div>

      </div>
    </div>
  );
}