"use client";
import Table from "../Table";
import InfoCards from "../InfoCards";
import { Graphics } from "../Graphics";
const AnalyticsPanel = () => {
  return (
    <div className="flex flex-col">
      <div class="bg-[#78B6FF4D] rounded-[5px] w-[811px] flex items-center justify-between mt-5 px-4 py-2 md:py-4 h-12 ">
        <p class="text-center md:text-left">
          Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit
          card.{" "}
          <span class="border-b border-black  cursor-pointer">
            Start Free Trial
          </span>
        </p>
        <span className="text-[#7E868C]">x</span>
      </div>
      <h1 class="text-3xl font-bold mt-11">
        Proxies & Scraping Infrastructure
      </h1>
      <div className="flex gap-3 border-b border-gray-400 mt-9">
        <p>My Proxies</p>
        <p className="border-b-[3px] border-[#0C6DFC] text-[#0C6DFC]" >Dashboard</p>
      </div>
      <InfoCards />
      <Graphics />
      <Table />
    </div>
  );
};

export default AnalyticsPanel;
