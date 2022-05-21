import { memo } from "react";
import { CardForm } from "../../UI/CardForm/CardForm";
import styles from "./Cards.module.scss";

export const Cards = memo(({ data }: any) => {
  
  const date = new Date(data.lastUpdate).toDateString();
  console.log(data);
  return (
    <div className={styles.cards}>
      <CardForm title="Infect" data={data.confirmed} date={date} />
      <CardForm title="Recovered" data={data.recovered} date={date} />
      <CardForm title="Deaths" data={data.deaths} date={date} />
    </div>
  );
});
