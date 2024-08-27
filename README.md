# weather-app

![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E) ![Static Badge](https://img.shields.io/badge/react-gray?logo=react) ![Static Badge](https://img.shields.io/badge/vite-white?logo=vite)  ![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)


![screenshot](/public/readme/readme.png "project preview")
![screenshot](/public/readme/readme.gif "project preview desktop")
<details><summary>mobile preview</summary>

![screenshot](/public/readme/readme_m.gif "project preview mobile")

</details>

## Project's Description

A weather application that uses the OpenWeatherMap API and GeoDB API for location autocomplete. The project uses a responsive design and animated icons.

**Important information!** Be aware of API limitations! Not all known locations in the world are available in the GeoDB API!

### Quick Start

Follow these steps to set up the project locally on your machine.

*Prerequisites*

Make sure you have the following installed on your machine:

   - [Git](https://git-scm.com/)
   - [Node.js](https://nodejs.org/en)
   - [npm](https://www.npmjs.com/) (Node Package Manager)



1. Sign Up: [https://rapidapi.com](https://rapidapi.com/) and [https://openweathermap.org](https://openweathermap.org/)

2. Choose your RapidAPI Hub experience: Review the [pricing](https://rapidapi.com/products/pricing) options and obtain an [API key](https://rapidapi.com/wirefreethought/api/geodb-cities/)

3. Get your OpenWeatherMap API key: After registering (via `Email` on the `account page`)

4. Clone the Repository:
```bash
git clone https://github.com/anthony-th/weather-app.git
cd weather-app
```

5. Create `.env` file
```bash
touch .env
```
6. Fill in the `.env` file with the necessary data:

```bash
VITE_WEATHER_API_KEY = <your-openweathermap-key>
VITE_GEO_API_KEY = <your-rapidapi-key>
```

7. Install the NPM packages in the project folder:
```bash
npm install
```


8. Running the Project

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.
