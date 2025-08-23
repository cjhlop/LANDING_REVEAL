import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: 'Group A', value: 89.7 },
  { name: 'Group B', value: 23 },
  { name: 'Group C', value: 12 },
];
const COLORS = ['#45c646', '#3e68ff', '#ffc947'];

export const DataTransferCard = () => {
  return (
    <Card role="figure" aria-label="Data Transfer Statistics Card" className="w-[237px] h-[237px] bg-white/80 backdrop-blur-sm shadow-2xl rounded-lg p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-sm font-semibold">Data transfer</CardTitle>
        <p className="text-xs text-gray-500">Viverra tristique</p>
      </CardHeader>
      <CardContent className="p-0 mt-4 h-40 flex items-center justify-center relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={60}
              innerRadius={0}
              fill="#8884d8"
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 h-40">
                <div className="absolute top-[30px] left-[65px] text-white font-bold text-lg">89.7</div>
                <div className="absolute top-[90px] left-[35px] text-white font-bold text-sm">23</div>
                <div className="absolute top-[105px] left-[95px] text-white font-bold text-sm">12</div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};