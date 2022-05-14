import { useEffect, useState } from "react";

import { Body } from "../../organisms/Body/Body";
import { Chart } from "../../organisms/Chart/Chart";
import { Header } from "../../organisms/Header/Header";

type countryType = {
  name: string;
};

export const Top = () => {
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
      <Header />
      <Body countries={countries} setValueCountry={setValueCountry} />
      <Chart />
    </div>
  );
};
