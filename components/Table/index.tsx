"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { tableColumns } from "@/utils/tableColumns";
import { getAPI } from "@/services/fetchAPI";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      {tableData.length === 0 && <Loading />}
      <div className="overflow-x-auto ">
        <table className="min-w-full divide-y divide-LightGray">
          <thead>
            <tr>
              {tableColumns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider h-14 bg-DarkBlue"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-LightGray">
            {tableData.map((item, index) => (
              <tr key={index} className={"h-[4.5rem]"}>
                {tableColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-6 py-4 whitespace-nowrap ${
                      col.key === "date" ? "text-LightBlue" : ""
                    }`}
                  >
                    {item[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
