import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { schemeInfos } from "../Data/data";


function Chart() {
  return (
    <ResponsiveContainer>
      <BarChart width={150} height={40} data={schemeInfos}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="interestRate" fill="#2c5326" />
        <Bar dataKey="maintenance" fill="#8884d8" />
        <Bar dataKey="adminFee" fill="#D1644C" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Chart;
