// src/scripts/api.js
const BASE = 'https://pokeapi.co/api/v2';

/**
 * Fetch datos básicos de un Pokémon (stats, sprites, etc.)
 */
export async function fetchPokemon(nameOrId) {
  const res = await fetch(`${BASE}/pokemon/${nameOrId}`);
  if (!res.ok) throw new Error('Pokémon no encontrado');
  return res.json();
}

/**
 * Fetch datos de la especie de un Pokémon (habitat, genera, flavor text…)
 */
export async function fetchSpecies(nameOrId) {
  const res = await fetch(`${BASE}/pokemon-species/${nameOrId}`);
  if (!res.ok) throw new Error('Especie de Pokémon no encontrada');
  return res.json();
}
