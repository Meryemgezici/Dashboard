import React from "react";
import AnalyticsPanel from "@/components/AnalyticsPanel";
import Sidebar from "@/components/Sidebar";
function DasboardContainer() {
  return (
    <div className="flex items-center justify-center gap-12 w-min-h-screen bg-[#F7FAFC] py-5 px-5 bg-BaseLight">
      <Sidebar />
      <AnalyticsPanel />
    </div>
  );
}

export default DasboardContainer;
