import React, { useState, memo, useEffect } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import styles from "./Select.module.scss";
import { useAPIData } from "../../hooks/UseAPIData";

type Props = {
  handleCountry: (e: any) => void;
};

export const Select = memo(({ handleCountry }: Props) => {
  const [countries, setCountries] = useState<string[]>([]);

  const { fetchCountries } = useAPIData();

  useEffect(() => {
    const fetchAPI: () => Promise<void> = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <Box className={styles.box}>
        <FormControl>
          <NativeSelect
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleCountry(e.target.value)
            }
          >
            <option value="">Global</option>
            {countries.map((country: string) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
});
