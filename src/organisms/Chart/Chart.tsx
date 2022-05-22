import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { dataTypes } from "../../hooks/Types";
import styles from "./Chart.module.scss";

type Props = {
  data:dataTypes 
}

export const Chart = ({data}: Props) => {
  const datasets = [
    { label: "Infect", value: data.confirmed.value, fill: "red" },
    {
      label: "Recoveres",
      value: data.recovered.value,
      fill: "bule",
    },
    {
      label: "Deaths",
      value: data.deaths.value,
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
