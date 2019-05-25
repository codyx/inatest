import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "Recharts";

const Chart = props => (
  <div id="container">
    <LineChart
      width={600}
      height={300}
      data={props.data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="benefit" stroke="#82ca9d" />
      <Line type="monotone" dataKey="expiresIn" stroke="#42aaf4" />
    </LineChart>
  </div>
);

export default Chart;
