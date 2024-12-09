import { appStore } from "../Store/appStore";

function Search() {
  const { city, setCity } = appStore();
  return (
    <div className=" text-center">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="search"
        placeholder="Enter city name"
        className="w-2/3 h-12 p-4 sm:w-4/5 rounded border-gray-200 focus:ring focus:outline-none focus:ring-red-300
        "
      />
    </div>
  );
}

export default Search;
