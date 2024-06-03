import { weeklyData } from "@/utils/DashboardTestData";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
} from "recharts";

export function Graphics() {
  return (
    <div  className="mt-20 rounded-2xl bg-white py-5">
      <h4 className="font-sm font-bold px-12 pb-5">Data usage per network</h4>
<LineChart
        width={892}
        height={443}
        data={weeklyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
 <CartesianGrid vertical={false} />
        <XAxis dataKey="day" />
        <YAxis  axisLine={false}/>
        <Tooltip />
        <Legend />
        <Text x={450} y={30} textAnchor="middle" fontSize={18}>
        Data usage per network
      </Text>
        <Line
          type="monotone"
          dataKey="gbUsed"
          stroke="#1C1C1C"
          dot={false}
          strokeWidth={3}
        />
      </LineChart>
    </div>
      
   
  );
}
