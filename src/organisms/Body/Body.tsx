import { Cards } from "../Cards/Cards";
import { Select } from "../../UI/Select/Select";

import { dataTypes } from "../../hooks/Types";
import styles from "./Body.module.scss";

type bodyPropsTypes = {
  data: dataTypes;
  handleCountry: (e: any) => void;
};

export const Body = ({ data, handleCountry }: bodyPropsTypes) => {
  return (
    <div className={styles.body}>
      <div className={styles.select}>
        <Select handleCountry={handleCountry} />
      </div>
      <div className={styles.cardsContainer}>
        <Cards data={data} />
      </div>
    </div>
  );
};
