import { CardForm } from "../../UI/CardForm/CardForm";
import styles from "./Cards.module.scss";

export const Cards = () => {
  return (
    <div className={styles.cards}>
      <CardForm />
      <CardForm />
      <CardForm />
    </div>
  );
};
