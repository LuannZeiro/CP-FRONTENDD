"use client";

import React, { useState } from 'react';

const Buscar = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [error, setError] = useState('');
  const apiKey = '867e2b8025a07c515d924aaafe892871';

  const fetchWeatherData = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData({
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
        });
        setError('');
      } else {
        setWeatherData(null);
        setError('Cidade não encontrada. Tente novamente.');
      }
    } catch (error) {
      setWeatherData(null);
      setError('Erro ao buscar os dados. Tente novamente.');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeatherData(city);
    } else {
      setError('Por favor, insira o nome de uma cidade.');
      setWeatherData(null);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Pesquise Temperatura de Outra Cidade</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Digite o nome da cidade"
          style={{ padding: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px', backgroundColor: '#002e4d' }}>
          Buscar
        </button>
      </form>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h3>Temperatura em {city}</h3>
          <p>Temperatura Mínima: {weatherData.tempMin}°C</p>
          <p>Temperatura Máxima: {weatherData.tempMax}°C</p>
        </div>
      )}
    </div>
  );
};

export default Buscar;
