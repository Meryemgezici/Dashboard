"use client";
import axios from "axios";
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
    <div className="flex justify-between">
      <div className="flex flex-col">
        <p>Subscription expires on</p>
        <p>{infoData.expireTime}</p>
      </div>
      <div className="flex flex-col">
        <p>Last charge</p>
        <p>
          {infoData.lastChargeAmount}
          <span>{infoData.lastCharge}</span>
        </p>
      </div>
      <div className="flex flex-col">
        <p>Total Usage Data</p>
        <p>{infoData.totalDataUsage} GB</p>
      </div>
      <div className="flex flex-col">
        <p>Daily Usage Data</p>
        <p>{infoData.dailyUsage} GB</p>
      </div>
    </div>
  );
};

export default InfoCards;
