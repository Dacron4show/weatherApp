import {
  CloudSun,
  Sun,
  Cloud,
  CloudRain,
  CloudFog,
  CloudSnow,
  CloudLightning,
  WindIcon,
  DropletIcon,
  ThermometerSun,
} from "lucide-react";
import { appStore } from "../Store/appStore";
import { useEffect } from "react";

const weatherIcons = {
  Sunny: <Sun className="w-24 h-24 text-yellow-500 drop-shadow-lg" />,
  "Partly cloudy": (
    <CloudSun className="w-24 h-24 text-gray-400 drop-shadow-lg" />
  ),
  Cloudy: <Cloud className="w-24 h-24 drop-shadow-lg" />,
  Overcast: <Cloud className="w-24 h-24 drop-shadow-lg" />,
  Mist: <CloudFog className="w-24 h-24 text-gray-500  drop-shadow-lg" />,
  "Patchy rain possible": <CloudRain className="w-24 h-2 drop-shadow-lg" />,
  Rain: <CloudRain className="w-24 h-24 drop-shadow-lg" />,
  "Heavy rain": <CloudRain className="w-24 h-24 drop-shadow-lg" />,
  Thundery: <CloudLightning className="w-24 h-24  drop-shadow-lg" />,
  Snow: <CloudSnow className="w-24 h-24  drop-shadow-lg" />,
  "Patchy snow possible": <CloudSnow className="w-24 h-24 drop-shadow-lg" />,
};

export default function Weather() {
  const { fetchWeather, weather } = appStore();

  useEffect(() => {
    fetchWeather();
  }, []);

  const weatherCondition = weather?.current?.condition?.text;
  const WeatherIcon = weatherIcons[
    weatherCondition as keyof typeof weatherIcons
  ] || <Cloud className="w-24 h-24 " />;

  return (
    <div className="flex text-black flex-col gap-6  sm:gap-10 text-center items-center ">
      {WeatherIcon}
      <h3
        className="text-8xl
      "
      >
        {weather?.current?.temp_c ?? 0}°
      </h3>
      <p className="text-2xl">{weatherCondition ?? "Loading"}</p>
      <p className="text-lg">
        {" "}
        {weather?.location?.name ?? "Loading"}{" "}
        {weather?.location?.region ?? "Loading"} ,{" "}
        {weather?.location?.country ?? "Loading"}
      </p>
      <div
        className="
bg-white/20 backdrop-blur-2xl border border-white/10 p-3 rounded-lg shadow-md"
      >
        {" "}
        <div className="flex gap-8 sm:gap-14 ">
          <div className="flex flex-col items-center gap-2 ">
            <WindIcon className="text-center" />
            <p className="text-lg">
              {weather?.current?.wind_kph ?? "Loading"}kph{" "}
            </p>
            <p>Wind</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <DropletIcon />
            <p className="text-lg">
              {weather?.current?.humidity ?? "Loading"}%
            </p>
            <p>Humidity</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <ThermometerSun />
            <p className="text-lg">{weather?.current?.heatindex_c}°</p>
            <p>Heat index</p>
          </div>
        </div>
      </div>
    </div>
  );
}
