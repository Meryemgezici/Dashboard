"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { getAPI } from "@/services/fetchAPI";
const InfoCards = () => {
  const [infoData, setInfoData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    // localStorage'dan tokenı al
    const token = localStorage.getItem("token");
    if (!token) {
      // Token yoksa, kullanıcıyı giriş sayfasına yönlendir
      router.push("/login");
    } else {
      const fetchData = async () => {
        const response = await getAPI("/get-info", token);
        setInfoData(response);
        console.log("res", response);
      };
      fetchData();
    }
  }, [router]);

  return (
    <div className="flex justify-between mt-11 gap-7">
      <div className="flex flex-col gap-3 justify-center w-52 h-28 bg-[#E3F5FF] rounded-2xl px-5">
        <p className="text-sm font-semibold">Subscription expires on</p>
        <p className="text-lg font-medium">{infoData.expireTime}</p>
      </div>
      <div className="flex flex-col gap-3 justify-center w-52 h-28 bg-[#E5ECF6] rounded-2xl px-5">
        <p className="text-sm font-semibold">Last charge</p>
        <p className="text-lg font-medium">
          {infoData.lastChargeAmount}
          <span className="text-sm "> {infoData.lastCharge}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center w-52 h-28 bg-[#E3F5FF] rounded-2xl px-5 font-bold">
        <p className="text-sm">Total Usage Data</p>
        <p className="text-lg">{infoData.totalDataUsage} GB</p>
      </div>
      <div className="flex flex-col gap-3 justify-center w-52 h-28 bg-[#E5ECF6] rounded-2xl px-5 font-bold">
        <p className="text-sm">Daily Usage Data</p>
        <p className="text-lg">{infoData.dailyUsage} GB</p>
      </div>
    </div>
  );
};

export default InfoCards;
