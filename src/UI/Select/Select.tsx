import React, { useState, memo, useEffect } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import styles from "./Select.module.scss";
import { useAPIData } from "../../hooks/UseAPIData";

type Props = {
  handleCountry(e: any): void;
};

export const Select = ({ handleCountry }: Props) => {
  const [countries, setCountries] = useState<any>([]);

  const { fetchCountries } = useAPIData();

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  

  return (
    <div>
      <Box className={styles.box}>
        <FormControl>
          <NativeSelect onChange={(e: any) => handleCountry(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country: any) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};
