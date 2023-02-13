import axios from "axios";
import { API_KEY, API_URL } from "./utils";

const APIRequest = (city, setWeather, setFiveDaysWeather, setError) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.length < 3) {
      setError("Please enter a city name with more than 2 characters!");
      return;
    }
    setError(null);
    try {
      const result = await axios(
        `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const result5Days = await axios(
        `${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setFiveDaysWeather(result5Days.data);
      setWeather(result.data);
    } catch (err) {
      setError("City not found! Please correct!");
    }
  };

  return handleSubmit;
};

export default APIRequest;
