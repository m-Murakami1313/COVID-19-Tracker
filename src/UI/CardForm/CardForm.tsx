import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { memo } from "react";
import cx from "classnames";

import styles from "./CardForm.module.scss";

export const CardForm = memo(({ title, data, date }: any) => {

const styled = (title:any)=>{
  switch(title){
    case "Infect":
      return styles.infect
      case "Deaths":
        return styles.deaths
      default:
        return styles.recovered
  }

}
  return (
    <div className={styles.container}>
      <Card className={cx(styled(title))}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          {data && (
            <Typography variant="h5" component="div">
              {data.value}
            </Typography>
          )}
          <Typography variant="h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2">
            Number of active cases of COVID-19
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
