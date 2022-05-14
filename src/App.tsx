import { Body } from "./organisms/Body/Body";
import { Chart } from "./pages/Chart/Chart";
import { Header } from "./pages/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Chart />
    </div>
  );
}

export default App;
