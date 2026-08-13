"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function LoginModal({ isOpen, onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  // =========================
  // Reset Form เมื่อเปิด Modal
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
  // รับค่าจาก Input
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Submit Form
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ข้อมูลที่กรอก:", form);

    // =========================
    // สมัครสมาชิก
    // =========================
    if (!isLoginMode) {
      try {
        const response = await fetch(
          "https://api.itdev.cmtc.ac.th/users",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              firstname: form.txt_firstname,
              lastname: form.txt_lastname,
              username: form.txt_username,
              password: form.txt_password,
            }),
          }
        );

        const result = await response.json();

        console.log("Response:", result);

        // =========================
        // สมัครสำเร็จ
        // =========================
        if (response.ok) {
          await Swal.fire({
            icon: "success",
            title: `บันทึกสำเร็จ (status: ${response.status})`,
            text: "เพิ่มข้อมูลผู้ใช้เรียบร้อยแล้ว",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8b5e4b",
          });

          console.log("สมัครสมาชิกด้วย:", {
            firstname: form.txt_firstname,
            lastname: form.txt_lastname,
            username: form.txt_username,
            password: form.txt_password,
          });

          // ล้างข้อมูล
          setForm({
            txt_firstname: "",
            txt_lastname: "",
            txt_username: "",
            txt_password: "",
          });

          // กลับไป Login
          setIsLoginMode(true);
        }

        // =========================
        // Error 400
        // =========================
        else if (response.status === 400) {
          await Swal.fire({
            icon: "warning",
            title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
            text: result.message || "เกิดข้อผิดพลาด",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#c89f91",
          });
        }

        // =========================
        // Error 500
        // =========================
        else if (response.status === 500) {
          await Swal.fire({
            icon: "error",
            title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
            text: result.message || "เกิดข้อผิดพลาด",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8b5e4b",
          });
        }

        // =========================
        // Error อื่น ๆ
        // =========================
        else {
          await Swal.fire({
            icon: "warning",
            title: `เกิดข้อผิดพลาด (status: ${response.status})`,
            text: result.message || "เกิดข้อผิดพลาด",
            confirmButtonText: "ตกลง",
            confirmButtonColor: "#8b5e4b",
          });
        }
      } catch (error) {
        console.error(error);

        await Swal.fire({
          icon: "warning",
          title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
          text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#c89f91",
        });
      }

      return;
    }

    // =========================
    // Login
    // =========================
    console.log("เข้าสู่ระบบด้วย:", {
      firstname: form.txt_firstname,
      lastname: form.txt_lastname,
      username: form.txt_username,
      password: form.txt_password,
    });

    await Swal.fire({
      icon: "success",
      title: "เข้าสู่ระบบ",
      text: "ข้อมูลถูกส่งเรียบร้อยแล้ว",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#8b5e4b",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3d302b]/40 backdrop-blur-sm p-4">

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#fffdfb] rounded-3xl shadow-2xl border border-[#eee3dc] p-8">

        {/* ปุ่มปิด */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#a9958d] hover:text-[#3d302b] hover:bg-[#f3eee9] rounded-full transition-colors"
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

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#8b5e4b] to-[#c89f91] text-white font-serif font-bold text-2xl shadow-lg shadow-[#8b5e4b]/20 mb-4">
            A
          </div>

          <h2 className="text-2xl font-bold text-[#3d302b]">
            {isLoginMode
              ? "ยินดีต้อนรับกลับมา"
              : "สร้างบัญชีใหม่"}
          </h2>

          <p className="mt-2 text-sm text-[#8a7770]">
            {isLoginMode
              ? "กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ"
              : "สมัครสมาชิก Aura Collection"}
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* ชื่อ */}
          <div>
            <label className="block text-sm font-medium text-[#3d302b] mb-1">
              ชื่อ
            </label>

            <input
              type="text"
              name="txt_firstname"
              value={form.txt_firstname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#eee3dc] bg-[#faf7f4] text-[#3d302b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c89f91]/40 focus:border-[#8b5e4b]"
              placeholder="ชื่อจริง"
            />
          </div>

          {/* นามสกุล */}
          <div>
            <label className="block text-sm font-medium text-[#3d302b] mb-1">
              นามสกุล
            </label>

            <input
              type="text"
              name="txt_lastname"
              value={form.txt_lastname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#eee3dc] bg-[#faf7f4] text-[#3d302b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c89f91]/40 focus:border-[#8b5e4b]"
              placeholder="นามสกุล"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-[#3d302b] mb-1">
              Username
            </label>

            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#eee3dc] bg-[#faf7f4] text-[#3d302b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c89f91]/40 focus:border-[#8b5e4b]"
              placeholder="username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#3d302b] mb-1">
              Password
            </label>

            <input
              type="password"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[#eee3dc] bg-[#faf7f4] text-[#3d302b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c89f91]/40 focus:border-[#8b5e4b]"
              placeholder="password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl shadow-md text-sm font-medium text-white bg-[#3d302b] hover:bg-[#8b5e4b] transition-all hover:-translate-y-0.5"
          >
            {isLoginMode
              ? "เข้าสู่ระบบ"
              : "สมัครสมาชิก"}
          </button>

        </form>

        {/* Divider */}
        <div className="mt-6 mb-6">
          <div className="relative">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#eee3dc]" />
            </div>

            <div className="relative flex justify-center">
              <span className="px-4 bg-[#fffdfb] text-sm text-[#a9958d]">
                หรือ
              </span>
            </div>

          </div>
        </div>

        {/* Toggle */}
        <div className="text-center">

          <p className="text-sm text-[#8a7770]">

            {isLoginMode
              ? "ยังไม่มีบัญชีใช่ไหม? "
              : "มีบัญชีอยู่แล้วใช่ไหม? "}

            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="font-medium text-[#8b5e4b] hover:text-[#6f493b]"
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