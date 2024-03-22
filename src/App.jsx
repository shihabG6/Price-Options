
import "./App.css";
import BarCharts from "./Components/BarChart/BarChart";
import LineChart from "./Components/LIneChart/LineChart";
import Navber from "./Components/Navber/Navber";
import PriceOptions from "./Components/PriceOptions/PriceOptions";



function App() {
  return (
    <body>
      <header>
        <nav>
          <Navber></Navber>
        </nav>
      </header>

      <main>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <BarCharts></BarCharts>
      </main>
    </body>
  );
}

export default App;
