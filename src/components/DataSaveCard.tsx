import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const chartData = [
  { name: 'Facilisis', uv: 20 },
  { name: 'Sed', uv: 40 },
  { name: 'Molestie', uv: 30 },
  { name: 'Cursus', uv: 50 },
  { name: 'Elit', uv: 35 },
];

export const DataSaveCard = () => {
  return (
    <Card role="figure" aria-label="Data Save Statistics Card" className="w-[320px] h-[320px] bg-white/80 backdrop-blur-sm shadow-2xl rounded-lg p-6">
      <CardHeader className="p-0">
        <CardTitle className="text-base font-semibold">Data Save</CardTitle>
        <p className="text-sm text-gray-500">Viverra tristique</p>
      </CardHeader>
      <CardContent className="p-0 mt-8">
        <div className="text-4xl font-bold">
          <span className="text-yellow-500">$</span> 82,347
        </div>
        <p className="text-sm text-gray-500">Facilisi in magna mauris</p>
        <div className="h-32 mt-4 -ml-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#3e68ff' }}
              />
              <Line type="monotone" dataKey="uv" stroke="#3e68ff" strokeWidth={3} dot={{ r: 6, fill: '#3e68ff', stroke: 'white', strokeWidth: 2 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};