import { appStore } from "../Store/appStore";

function Search() {
  const { city, setCity, fetchSearchedWeather } = appStore();

  const searchCity = async () => {
    try {
      await fetchSearchedWeather();
    } catch (error) {
      console.error("Error searching cities:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchCity();
    }
  };

  return (
    <div className=" text-center ">
      <input
        value={city}
        onKeyDown={handleKeyPress}
        onChange={(e) => setCity(e.target.value)}
        type="search"
        placeholder="Enter city name..."
        className="w-3/4 h-12 p-4 sm:w-4/5 lg:w-2/3 rounded border-gray-200 focus:ring focus:outline-none focus:ring-red-300
        "
      />
    </div>
  );
}

export default Search;
