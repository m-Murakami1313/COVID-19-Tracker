import { Card } from "../../UI/Card/Card";
import { Select } from "../../UI/Select/Select";

type bodyPropsTypes = {
  countries: {
    name:string;
  }[];
  setValueCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const Body = ({ countries, setValueCountry }: bodyPropsTypes) => {
  return (
    <div>
      <Card />
      <Select countries={countries} setValueCountry={setValueCountry} />
    </div>
  );
};
