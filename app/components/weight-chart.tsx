import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type WeightData = {
  date: string;
  weightKg: number;
};

type WeightChartProps = {
  data: WeightData[];
};

export default function WeightChart(props: Readonly<WeightChartProps>) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip formatter={(value) => `${value} kg`} />
        <Line type="monotone" dataKey="weightKg" stroke="#6930c5" />
      </LineChart>
    </ResponsiveContainer>
  );
}
