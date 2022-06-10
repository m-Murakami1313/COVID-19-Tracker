import { Box } from "@mui/material";
import { memo } from "react";

import styles from "./Header.module.scss";

export const Header = memo(() => {
  return (
    <div >
      <Box className={styles.container}>
        <h1>COVID-19 Tracker</h1>
      </Box>
    </div>
  );
});
