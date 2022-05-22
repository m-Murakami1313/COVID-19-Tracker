const url = "https://covid19.mathdro.id/api";

export const useAPIData = () => {
  const fetchData = async (country?: string) => {
    let changeableUrl = url;

    {
      country && (changeableUrl = `${url}/countries/${country}`);
    }

    try {
      const response = await fetch(changeableUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log("情報の取得に失敗しました");
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${url}/countries`);
      const { countries } = await response.json();

      return countries.map((country: { name: string }) => country.name);
    } catch (error) {
      console.log("情報の取得に失敗しました");
    }
  };

  return { fetchData, fetchCountries };
};
