import "./App.css";
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
      </main>
    </body>
  );
}

export default App;
