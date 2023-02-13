export const API_KEY = '';
export const API_URL = 'https://api.openweathermap.org/data/2.5';
export const IMG_URL = 'https://openweathermap.org/img/wn';
export const weatherContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};
export const weatherItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};