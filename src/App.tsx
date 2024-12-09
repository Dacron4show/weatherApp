import "./App.css";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import { appStore } from "./Store/appStore";

function App() {
  const { weather } = appStore();
  return (
    <div
      className={`${
        weather?.current?.condition?.text === "Mist"
          ? "bg-gray-400"
          : "bg-blue-300"
      } flex flex-col gap-14 min-h-screen p-14`}
    >
      <Search />
      <Weather />
    </div>
  );
}

export default App;
