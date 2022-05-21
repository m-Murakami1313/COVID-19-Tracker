import { Cards } from "../Cards/Cards";
import { Select } from "../../UI/Select/Select";

import styles from "./Body.module.scss";
import { memo } from "react";

type bodyPropsTypes = {
data:any;
handleCountry(e:any):void;
};

export const Body = ({data,handleCountry}:bodyPropsTypes) => {
 
  return (
    <div className={styles.body}>
      <div className={styles.select}>
        <Select handleCountry={handleCountry}/>
      </div>
      <div className={styles.cardsContainer}>
        <Cards data={data} />
      </div>
    </div>
  );
};
