import React, { useState, useEffect } from 'react';
import './Poke.css'

const Poke = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Функция для получения данных с PokeAPI
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }


  return (
    <div className='poke'>
      <h1>Данные с сервера:</h1>
      <div>
        {pokemonList.map((pokemon, index) => (
            <div className='poke-list'>
          <span key={index}>{pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poke;
