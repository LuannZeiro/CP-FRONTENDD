"use client";

import React, { useEffect, useState } from 'react';

const Principais = () => {
  const [citiesWeather, setCitiesWeather] = useState<any[]>([]);
  const apiKey = '867e2b8025a07c515d924aaafe892871';

  const cities = [
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Brasília',
    'Salvador',
    'Fortaleza',
    'Curitiba',
    'Manaus',
    'Recife',
    'Porto Alegre'
  ];

  const fetchWeatherData = async () => {
    const weatherDataArray = await Promise.all(
      cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
        );
        const data = await response.json();
        return {
          city: city,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
        };
      })
    );
    setCitiesWeather(weatherDataArray);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Clima nas Principais Cidades do Brasil</h1>
      {citiesWeather.length > 0 ? (
        <ul>
          {citiesWeather.map((weather, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <h3>{weather.city}</h3>
              <p>Temperatura Mínima: {weather.tempMin}°C</p>
              <p>Temperatura Máxima: {weather.tempMax}°C</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Principais;
