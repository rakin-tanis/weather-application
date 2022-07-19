import Swal from 'sweetalert2';

const makeRequest = async (url, params = {}, options = {}) => {
  const urlWithParams = addSearchParams(new URL(url), params);
  const request = new Request(urlWithParams, options);

  try {
    const response = await fetch(request);
    if (response.status != 200) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong on API server! ' + response.status,
        icon: 'error'
      })
      throw new Error('Something went wrong on API server!');
    } else {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
};

const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url?.pathname}?${new URLSearchParams([
      ...Array.from(url?.searchParams?.entries()),
      ...Object.entries(params),
    ]).toString()}`
  );

export const getGeo = () => makeRequest(process.env.GEO_ENDPOINT);

export const getCity = (city) =>
  makeRequest(process.env.CITY_SEARCH_ENDPOINT, {
    name: city,
    count: 10,
    format: 'json',
    language: 'en',
  });

export const getCurrentWeather = (lon, lat) =>
  makeRequest(process.env.CURRENT_WEATHER_ENDPOINT, {
    lon: lon,
    lat: lat,
    units: 'metric',
    appid: process.env.OPEN_WEATHER_API_KEY,
  });

export const getWeatherForecast = (lon, lat) =>
  makeRequest(process.env.CURRENT_AND_FORECAST_WEATHER_ENDPOINT, {
    lat: lon,
    lon: lat,
    units: 'metric',
    appid: process.env.OPEN_WEATHER_API_KEY,
  });
