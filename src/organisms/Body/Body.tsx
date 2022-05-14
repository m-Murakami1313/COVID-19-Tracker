import { Cards } from "../Cards/Cards";
import { Select } from "../../UI/Select/Select";

import styles from "./Body.module.scss";

type bodyPropsTypes = {
  countries: {
    name: string;
  }[];
  setValueCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const Body = ({ countries, setValueCountry }: bodyPropsTypes) => {
  return (
    <div className={styles.body}>
      <Select countries={countries} setValueCountry={setValueCountry} />
      <div className={styles.cardsContainer}>
        <Cards />
      </div>
    </div>
  );
};
