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
    heatindex_c: string;
  };
}

interface myStore {
  city: string;
  setCity: (city: string) => void;
  fetchWeather: () => Promise<void>;
  weather: weatherData | null;
  fetchSearchedWeather: () => Promise<void>;
}
export const appStore = create<myStore>((set, get) => ({
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
      ).catch(() => {
        throw new Error("Geolocation Permission denied");
      });
      const { latitude, longitude } = location.coords;
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${latitude}, ${longitude}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      set(() => ({ weather: data }));
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
    }
  },
  fetchSearchedWeather: async () => {
    const { city } = get();
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${city}`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error:${response.status}`);
      }
      const data = await response.json();
      set(() => ({ weather: data }));
    } catch (error) {
      console.error("Error fetching weather:", error);
      throw error;
    }
  },
}));
