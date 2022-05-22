import { memo } from "react";
import { CardForm } from "../../UI/CardForm/CardForm";
import styles from "./Cards.module.scss";

import { dataTypes } from "../../hooks/Types";

type Props = {
  data:dataTypes 
}

export const Cards = memo(({data}:Props) => {
  const date = new Date(data.lastUpdate).toDateString();
  return (
    <div className={styles.cards}>
      <CardForm title="Infect" data={data.confirmed} date={date} />
      <CardForm title="Recovered" data={data.recovered} date={date} />
      <CardForm title="Deaths" data={data.deaths} date={date} />
    </div>
  );
});
