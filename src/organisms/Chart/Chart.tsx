import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
} from "recharts";

import styles from "./Chart.module.scss";

export const Chart = (data: any) => {
  const datasets = [
    { label: "Infect", value: data.data.confirmed.value, fill: "red" },
    {
      label: "Recoveres",
      value: data.data.recovered.value,
      fill: "bule",
    },
    {
      label: "Deaths",
      value: data.data.deaths.value,
      fill: "green",
    },
  ];

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="95%">
        <BarChart
          data={datasets}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={50} fill={data.fill} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
