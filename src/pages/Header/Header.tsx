import { Box } from "@mui/material";

import imageUrl from "../../covid-19.jpg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div >
      <Box className={styles.container}>
        <img className={styles.image} src={imageUrl} />
      </Box>
    </div>
  );
};
