"use client";

import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // แสดงข้อมูลที่กรอกใน Console
    console.log(form);

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

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: `บันทึกสำเร็จ (status: ${response.status})`,
          text: "เพิ่มข้อมูลผู้ใช้เรียบร้อยแล้ว",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#2E75B6",
        });

        // ล้างข้อมูลหลังบันทึกสำเร็จ
        setForm({
          txt_firstname: "",
          txt_lastname: "",
          txt_username: "",
          txt_password: "",
        });
      } else if (response.status === 400) {
        // Validation Error
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fecc00",
        });
      } else if (response.status === 500) {
        // Server Error
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fe0505",
        });
      }
    } catch (error) {
      // เรียก fetch ไม่สำเร็จ
      console.error(error);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fc006dcc",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md border">

        {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครสมาชิก
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          <label className="text-black">
            กรุณาระบุชื่อ
          </label>

          <input
            type="text"
            name="txt_firstname"
            value={form.txt_firstname}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="firstname"
          />

          <label className="text-black">
            กรุณาระบุนามสกุล
          </label>

          <input
            type="text"
            name="txt_lastname"
            value={form.txt_lastname}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="lastname"
          />

          <label className="text-black">
            username
          </label>

          <input
            type="text"
            name="txt_username"
            value={form.txt_username}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="username"
          />

          <label className="text-black">
            password
          </label>

          <input
            type="password"
            name="txt_password"
            value={form.txt_password}
            onChange={handleChange}
            className="w-full border text-black border-black rounded-md px-4 py-2"
            placeholder="password"
          />

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            บันทึกข้อมูล
          </button>

        </form>
      </div>
    </div>
  );
}