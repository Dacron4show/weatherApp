import SearchBar from "./Components/Search";
import Weather from "./Components/Weather";
import { appStore } from "./Store/appStore";

const weatherBackground = {
  Sunny: (
    <div className="bg-gradient-to-bl from-yellow-200 to-blue-300 min-h-screen  " />
  ),
  "Partly cloudy": (
    <div className="bg-gradient-to-b from-gray-300 via-gray-100 to-blue-300 min-h-screen " />
  ),
  Cloudy: (
    <div className="bg-gradient-to-tr from-gray-600 via-gray-400 to-gray-200 min-h-screen " />
  ),
  Overcast: (
    <div className="bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-300 min-h-screen " />
  ),
  Mist: (
    <div className="bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 min-h-screen  " />
  ),
  "Patchy rain possible": (
    <div className=" bg-gradient-to-tr from-gray-600 via-blue-400 to-gray-300 min-h-screen " />
  ),
  Rain: (
    <div className=" bg-gradient-to-tr from-gray-700 via-blue-500 to-blue-300 0 min-h-screen " />
  ),
  "Light rain": (
    <div className=" bg-gradient-to-r from-gray-400 via-blue-300 to-gray-200 min-h-screen " />
  ),
  "Heavy rain": (
    <div className=" bg-gradient-to-tr from-gray-800 via-blue-700 to-blue-500 min-h-screen " />
  ),
  Thundery: (
    <div className=" bg-gradient-to-tr from-gray-800 via-yellow-500 to-gray-600  min-h-screen " />
  ),
  Snow: (
    <div className=" bg-gradient-to-tr from-gray-100 via-blue-200 to-white min-h-screen " />
  ),
  "Patchy snow possible": (
    <div className=" bg-gradient-to-tr from-gray-300 via-blue-200 to-gray-100 min-h-screen " />
  ),
  "Freezing fog": (
    <div className=" bg-gradient-to-bl from-gray-600 via-gray-400 to-white min-h-screen " />
  ),
  Clear: (
    <div className=" bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 min-h-dvh " />
  ),
};

function App() {
  const { weather } = appStore();

  const weatherCondition = weather?.current?.condition?.text;
  const backgroundElement = weatherBackground[
    weatherCondition as keyof typeof weatherBackground
  ] || <div className="bg-blue-300  min-h-screen " />;

  return (
    <div className="flex flex-col gap-6 sm:gap-14 h-dvh p-8 sm:p-14"> 
      <div className="absolute inset-0 -z-10">{backgroundElement}</div>
      <SearchBar />
      <Weather />
    </div>
  );
}

export default App;
