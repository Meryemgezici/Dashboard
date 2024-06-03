"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { tableColumns } from "@/utils/tableColumns";
import { getAPI } from "@/services/fetchAPI";
import Actions from "../Actions";
import { formatDate } from "@/utils/commonFunctions";
export default function Table() {
  const [tableData, setTableData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // localStorage'dan tokenı al
    const token = localStorage.getItem("token");
    if (!token) {
      // Token yoksa, kullanıcıyı giriş sayfasına yönlendir
      router.push("/login");
    } else {
      // Token varsa, isteği gönder
      const fetchData = async () => {
        const response = await getAPI("/get-table", token);
        setTableData(response.data);
        console.log("res", response);
      };
      fetchData();
    }
  }, [router]);

  return (
    <>
    {tableData.length === 0 && <Loading />}
    <div className="overflow-x-auto bg-white shadow-lg mt-10 px-10 py-12 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4">Transactions History</h2>
      <table>
        <thead>
          <tr>
            {tableColumns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-6 py-3 text-center text-black tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tableData.map((item, index) => (
            <tr key={index} className="h-16">
              {tableColumns.map((col) => (
                col.key === "actions" ? (
                  <td key={col.key} className="px-6 py-4 whitespace-nowrap">
                    <Actions ip={item['ipcount']} />
                  </td>
                ) : (
                  <td
                    key={col.key}
                    className={`px-6 py-4 whitespace-nowrap text-[#6A6A6A] ${col.key === "date" ? "text-[gray-500]" : ""}`}
                  >
                    {col.key === "date" ? formatDate(item[col.key]) : item[col.key]}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
}




