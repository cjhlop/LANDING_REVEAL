import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const chartData = [
  { value: 10 }, { value: 20 }, { value: 15 }, { value: 30 }, { value: 25 },
  { value: 40 }, { value: 35 }, { value: 50 }, { value: 45 },
];

export const NewUsersCard = () => {
  return (
    <Card role="figure" aria-label="New Users Statistics Card" className="w-[237px] h-[222px] bg-white/80 backdrop-blur-sm shadow-2xl rounded-lg p-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
        <div className="bg-teal-300/50 p-3 rounded-lg">
          <Users className="h-6 w-6 text-teal-800" />
        </div>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <div className="text-sm text-gray-700">New Users</div>
        <div className="text-2xl font-bold tracking-tight">42,387</div>
        <div className="h-24 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#73ced0" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#73ced0" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#73ced0" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};