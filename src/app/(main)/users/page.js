"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const router = useRouter();

  // ============================================================
  // STATE
  // ============================================================
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  

  // ============================================================
  // GET USERS API
  // ============================================================
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();

      console.log("Users:", data);

      setUsers(data);
    } catch (error) {
      console.error("GET ERROR:", error);

      setIsError(true);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถโหลดข้อมูลได้",
        text: "กรุณาลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#9A8066",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ============================================================
  // DELETE API
  // ============================================================
  const handleDelete = async (id) => {
    const user = users.find((u) => u.id === id);

    const result = await Swal.fire({
      icon: "warning",
      title: "ยืนยันการลบข้อมูล",
      html: user
        ? `ต้องการลบ <b>${user.firstname} ${user.lastname}</b> ใช่หรือไม่?<br><small>เมื่อลบแล้วจะไม่สามารถกู้คืนได้</small>`
        : "เมื่อลบแล้วจะไม่สามารถกู้คืนได้",

      showCancelButton: true,
      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",

      confirmButtonColor: "#8B7355",
      cancelButtonColor: "#D8D0C5",

      reverseButtons: true,
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      setDeletingId(id);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));

        throw new Error(
          data.message || `Status ${response.status}`
        );
      }

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );

      await Swal.fire({
        icon: "success",
        title: "ลบข้อมูลเรียบร้อยแล้ว",
        text: "ลบสมาชิกออกจากระบบแล้ว",
        timer: 1500,
        showConfirmButton: false,
      });

    } catch (error) {
      console.error("DELETE ERROR:", error);

      await Swal.fire({
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
        text: error.message || "เกิดข้อผิดพลาด",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#8B7355",
      });

    } finally {
      setDeletingId(null);
    }
  };

  // ============================================================
  // LOADING
  // ============================================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="bg-[#FFFDFC] border border-[#E4D8C8] rounded-2xl px-10 py-8 shadow-sm text-center">
          <div className="w-10 h-10 border-4 border-[#D8C7B5] border-t-[#8B7355] rounded-full animate-spin mx-auto mb-4"></div>

          <p className="text-[#6F5A46]">
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
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="bg-[#FFFDFC] border border-[#E4D8C8] rounded-2xl px-10 py-8 shadow-sm text-center">

          <div className="text-4xl mb-4">
            ♡
          </div>

          <p className="text-[#6F5A46] mb-5">
            เกิดข้อผิดพลาดในการโหลดข้อมูล
          </p>

          <button
            onClick={fetchUsers}
            className="px-6 py-2.5 bg-[#9A8066] text-white rounded-full hover:bg-[#80684F] transition"
          >
            ลองใหม่
          </button>

        </div>
      </div>
    );
  }

  // ============================================================
  // ไม่มีข้อมูล
  // ============================================================
  if (users.length === 0) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] p-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#FFFDFC] border border-[#E4D8C8] rounded-3xl p-10 text-center shadow-sm">

            <div className="text-5xl mb-4">
              👜
            </div>

            <h1 className="text-2xl font-serif text-[#5E4A38] mb-2">
              สมาชิก
            </h1>

            <p className="text-[#9A8A78]">
              ยังไม่มีข้อมูลสมาชิกในระบบ
            </p>

          </div>

        </div>

      </div>
    );
  }

  // ============================================================
  // MAIN
  // ============================================================
  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        {/* ======================================================
            HEADER
        ====================================================== */}
        <div className="mb-7">

          <div className="bg-[#FFFDFC] border border-[#E5D9CA] rounded-3xl shadow-sm overflow-hidden">

            <div className="px-6 md:px-8 py-7">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div>

                  <div className="flex items-center gap-3 mb-2">

                    <div className="w-11 h-11 rounded-full bg-[#E9DED0] flex items-center justify-center">
                      <span className="text-xl">
                        👜
                      </span>
                    </div>

                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-[#A28C76]">
                        Luxury Collection
                      </p>

                      <h1 className="text-2xl md:text-3xl font-serif text-[#574332]">
                        สมาชิก
                      </h1>
                    </div>

                  </div>

                  <p className="text-sm text-[#9A8977] ml-14">
                    จัดการข้อมูลสมาชิกของร้านกระเป๋า
                  </p>

                </div>

                {/* จำนวนสมาชิก */}
                <div className="bg-[#F4EDE4] border border-[#E5D9CA] rounded-2xl px-6 py-4">

                  <p className="text-xs text-[#A28C76] mb-1">
                    TOTAL MEMBERS
                  </p>

                  <p className="text-2xl font-semibold text-[#69533E]">
                    {users.length}
                  </p>

                </div>

              </div>

            </div>

            <div className="h-1 bg-gradient-to-r from-[#CDB9A3] via-[#F8F4EE] to-[#B99F83]"></div>

          </div>

        </div>

        {/* ======================================================
            TABLE CARD
        ====================================================== */}
        <div className="bg-[#FFFDFC] border border-[#E5D9CA] rounded-3xl shadow-sm overflow-hidden">

          {/* Table Header */}
          <div className="px-6 py-5 border-b border-[#E9DFD3] flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            <div>
              <h2 className="text-lg font-serif text-[#5E4A38]">
                รายชื่อสมาชิก
              </h2>

              <p className="text-xs text-[#A39483] mt-1">
                Member Management
              </p>
            </div>

            <button
              type="button"
              onClick={fetchUsers}
              className="self-start md:self-auto px-5 py-2 bg-[#F1E8DE] border border-[#DFD0BF] text-[#705B46] rounded-full text-sm hover:bg-[#E8DCCF] transition"
            >
              ↻ รีเฟรชข้อมูล
            </button>

          </div>

          {/* ====================================================
              TABLE
          ==================================================== */}
          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-[#F6F0E8] text-[#6C5844]">

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-center text-sm font-medium">
                    ลำดับ
                  </th>

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-left text-sm font-medium">
                    ID
                  </th>

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-left text-sm font-medium">
                    ชื่อ
                  </th>

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-left text-sm font-medium">
                    นามสกุล
                  </th>

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-left text-sm font-medium">
                    Username
                  </th>

                  <th className="px-5 py-4 border-b border-[#E5D9CA] text-center text-sm font-medium">
                    จัดการ
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user, index) => (

                  <tr
                    key={user.id}
                    className="border-b border-[#EEE6DC] hover:bg-[#FBF8F4] transition"
                  >

                    {/* ลำดับ */}
                    <td className="px-5 py-4 text-center text-sm text-[#897968]">
                      {index + 1}
                    </td>

                    {/* ID */}
                    <td className="px-5 py-4 text-sm text-[#8B7864]">
                      #{user.id}
                    </td>

                    {/* ชื่อ */}
                    <td className="px-5 py-4 text-sm font-medium text-[#5E4A38]">
                      {user.firstname}
                    </td>

                    {/* นามสกุล */}
                    <td className="px-5 py-4 text-sm text-[#6E5A47]">
                      {user.lastname}
                    </td>

                    {/* Username */}
                    <td className="px-5 py-4 text-sm text-[#8B7864]">
                      @{user.username}
                    </td>

                    {/* ปุ่ม */}
                    <td className="px-5 py-4">

                      <div className="flex justify-center gap-2">

                        {/* ==================================================
                            EDIT
                        ================================================== */}
                        <button
                          type="button"
                          onClick={() =>
                            router.push(
                              `/users/edit/${user.id}`
                            )
                          }
                          className="px-4 py-2 bg-[#DCC9B5] text-[#5E4935] rounded-full text-xs font-medium hover:bg-[#CDB59D] transition shadow-sm"
                        >
                          แก้ไข
                        </button>

                        {/* ==================================================
                            DELETE
                        ================================================== */}
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(user.id)
                          }
                          disabled={
                            deletingId === user.id
                          }
                          className="px-4 py-2 bg-[#8C7460] text-white rounded-full text-xs font-medium hover:bg-[#765F4D] transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {deletingId === user.id
                            ? "กำลังลบ..."
                            : "ลบ"}
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* ======================================================
              FOOTER
          ====================================================== */}
          <div className="px-6 py-4 bg-[#FCFAF7] border-t border-[#E9DFD3]">

            <p className="text-xs text-[#A39483] text-right">
              สมาชิกทั้งหมด{" "}
              <span className="font-semibold text-[#705B46]">
                {users.length}
              </span>{" "}
              รายการ
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}