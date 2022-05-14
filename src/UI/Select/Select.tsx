import React from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import styles from "./Select.module.scss";

type countryType = {
  name: string;
};

type bodyPropsTypes = {
  countries: {
    name: string;
  }[];
  setValueCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const Select = ({ countries, setValueCountry }: bodyPropsTypes) => {
  return (
    <div>
      <Box className={styles.box}>
        <FormControl>
          <NativeSelect
            defaultValue=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setValueCountry(e.target.value);
            }}
          >
            {countries.map((country: countryType) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};
