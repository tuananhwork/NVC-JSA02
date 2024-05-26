const container = document.querySelector('.container');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const notFound = document.querySelector('.not-found');
const searchBtn = document.querySelector('.search-box button');

const handleSubmit = () => {
  const cityName = document.querySelector('.search-box input').value.trim();

  if (!cityName || cityName === '') {
    return;
  }

  const ApiKey = '88f2fcab87a4e8c0b635b5c489294aa8';
  const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}&units=metric`;

  fetch(ApiURL)
    .then((res) => res.json()) // Thường chỉ để lấy dữ liệu
    .then((data) => {
      // Thường dùng để xử lý khi đã có dữ liệu

      // lấy ra 5 thành phần cần thay đổi
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-details .humidity span');
      const wind = document.querySelector('.weather-details .wind span');

      // Thay đổi các thành phần động theo dữ liệu
      temperature.innerHTML = `${data.main.temp}<span>°C</span>`;
      description.innerHTML = data.weather[0].description;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${data.wind.speed}Km/h`;

      // Change stutus image
      switch (data.weather[0].main.toLowerCase()) {
        case 'clear':
          image.src = 'images/clear.png';
          break;
        case 'mist':
          image.src = 'images/mist.png';
          break;
        case 'haze':
          image.src = 'images/mist.png';
          break;
        case 'rain':
          image.src = 'images/rain.png';
          break;
        case 'snow':
          image.src = 'images/snow.png';
          break;
        case 'clouds':
          image.src = 'images/cloud.png';
          break;
        default:
          image.src = 'images/cloud.png';
          break;
      }
    })
    .catch((err) => console.log(err)); // Dùng để xử lý khi lỗi không lấy được liệu
};

searchBtn.addEventListener('click', handleSubmit);

const res = {
  coord: {
    lon: 105.8412,
    lat: 21.0245,
  },
  weather: [
    {
      id: 501,
      main: 'Rain', // need
      description: 'moderate rain', // need
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 29, // need
    feels_like: 32.01,
    temp_min: 29,
    temp_max: 29,
    pressure: 1003,
    humidity: 66, // need
    sea_level: 1003,
    grnd_level: 1002,
  },
  visibility: 10000,
  wind: {
    speed: 2.26, // need
    deg: 34,
    gust: 1.61,
  },
  rain: {
    '1h': 1.04,
  },
  clouds: {
    all: 98,
  },
  dt: 1716092799,
  sys: {
    type: 1,
    id: 9308,
    country: 'VN',
    sunrise: 1716070656,
    sunset: 1716118133,
  },
  timezone: 25200,
  id: 1581130,
  name: 'Hanoi',
  cod: 200,
};
