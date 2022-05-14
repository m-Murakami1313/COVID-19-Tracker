import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./CardForm.module.scss";

export const CardForm = () => {
  return (
    <Card className={styles.container}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INfected
        </Typography>
        <Typography variant="h5" component="div">
          15648
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          hiduke
        </Typography>
        <Typography variant="body2">
          Number of active cases of COVID-19
        </Typography>
      </CardContent>
    </Card>
  );
};
