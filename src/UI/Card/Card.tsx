import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import styles from "./Card.module.scss"

type countryType = {
  name: string;
};

export const Card = () => {
  const [countries, setCountries] = useState<countryType[]>([]);
  const [valueCountry, setValueCountry] = useState<string>("");

  const baseUrl = "https://covid19.mathdro.id/api";
  const countriesUrl = "/countries";
  const url = baseUrl + countriesUrl;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data.countries);
      } catch (err) {
        console.error("情報の取得に失敗しました");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Box className={styles.box}>
        <FormControl >
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
