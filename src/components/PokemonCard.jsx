// src/components/PokemonCard.jsx
import { onMount } from 'solid-js';
import { animateCard } from '../scripts/gsap.js';

export default function PokemonCard(props) {
  const { pokemon } = props;
  let cardEl;

  // Solo corre en cliente
  onMount(() => {
    if (cardEl) animateCard(cardEl);
  });

  return (
    <div ref={cardEl} class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        class="w-32 h-32"
      />
      <h2 class="capitalize text-lg mt-2">{pokemon?.name}</h2>

      {pokemon?.stats ? (
        <ul class="grid grid-cols-2 gap-2 mt-4 w-full">
          {pokemon.stats.map((s) => (
            <li class="flex justify-between" key={s.stat.name}>
              <span class="font-bold">{s.stat.name}</span>
              <span>{s.base_stat}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando estadísticas…</p>
      )}
    </div>
  );
}
