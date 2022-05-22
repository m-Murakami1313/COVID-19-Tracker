import { memo, useEffect, useState, useCallback } from "react";

import { useAPIData } from "../../hooks/UseAPIData";
import { Body } from "../../organisms/Body/Body";
import { Chart } from "../../organisms/Chart/Chart";
import { Header } from "../../organisms/Header/Header";
import styles from "./Top.module.scss";

export const Top = memo(() => {
  const [data, setData] = useState<any>({});

  const { fetchData } = useAPIData();

  useEffect(() => {
    const fetchAPI = async () => {
      const firstFetch = await fetchData();
      setData(firstFetch);
    };
    fetchAPI();
  }, []);

  const handleCountry = async (selectedCountry: string) => {
    const response = await fetchData(selectedCountry);
    setData({ ...response, country: selectedCountry });
  };

  return (
    <div className={styles.top}>
      <Header />
      <Body data={data} handleCountry={handleCountry} />
      <div>{data.confirmed && <Chart data={data} />}</div>
    </div>
  );
});
