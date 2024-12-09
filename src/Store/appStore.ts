import { create } from "zustand";

//interface for weather data
interface weatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: string;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: string;
    humidity: string;
  };
}

interface myStore {
  city: string;
  setCity: (city: string) => void;
  fetchWeather: () => Promise<void>;
  weather: weatherData | null;
}
export const appStore = create<myStore>((set) => ({
  city: "",
  setCity: (city: string) => set(() => ({ city })),
  weather: null,
  fetchWeather: async () => {
    try {
      console.log("Fetching Weather report...");

      //get the loaction using browser's Geolocation API
      const location = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude}, ${longitude}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      set(() => ({ weather: data }));
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  },
}));
