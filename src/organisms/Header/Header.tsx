import { Box } from "@mui/material";
import { memo } from "react";

import imageUrl from "../../covid-19.jpg";
import styles from "./Header.module.scss";

export const Header = memo(() => {
  return (
    <div >
      <Box className={styles.container}>
        <img className={styles.image} src={imageUrl} />
      </Box>
    </div>
  );
});
