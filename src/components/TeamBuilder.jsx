// src/components/TeamBuilder.jsx
import { createSignal, createEffect } from 'solid-js';
import PokemonCard from './PokemonCard.jsx';
import { fetchPokemon } from '../scripts/api.js';
import StatChart from './StatChart.jsx';

export default function TeamBuilder() {
  // Estado
  const [search, setSearch] = createSignal('');
  const [found, setFound] = createSignal(null);
  const [team, setTeam] = createSignal([]);
  const [showChart,   setShowChart] = createSignal(false);

  // Reinicia showChart cuando cambie el equipo
  createEffect(() => {
    team();
    setShowChart(false);
  });

  // Buscar un Pokémon
  async function handleSearch(e) {
    e.preventDefault();
    try {
      const data = await fetchPokemon(search().toLowerCase());
      setFound(data);
    } catch {
      setFound(null);
      alert('Pokémon no encontrado');
    }
  }

  // Añadir y quitar del equipo
  function addToTeam() {
    if (found() && team().length < 6) {
      setTeam([...team(), found()]);
      setFound(null);
      setSearch('');
    }
  }
  function removeFromTeam(idx) {
    setTeam(team().filter((_, i) => i !== idx));
  }

  return (
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* — Buscador — */}
      <div>
        <h3 class="text-2xl mb-2">Buscador</h3>
        <form onSubmit={handleSearch} class="flex space-x-2 mb-4">
          <input
            type="text"
            value={search()}
            onInput={e => setSearch(e.target.value)}
            placeholder="Nombre o ID"
            class="flex-1 p-2 border rounded"
          />
          <button type="submit" class="bg-pokeball text-white px-4 py-2 rounded">
            Buscar
          </button>
        </form>

        {found() && (
          <div class="space-y-2">
            <PokemonCard pokemon={found()} />
            <button
              onClick={addToTeam}
              class="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            >
              Añadir al equipo
            </button>
          </div>
        )}
      </div>

      {/* — Mi Equipo — */}
      <div>
        <h3 class="text-2xl mb-2">Mi Equipo ({team().length}/6)</h3>
        <div class="space-y-4">
          {team().map((p, i) => (
            <div class="relative" key={p.name + i}>
              <PokemonCard pokemon={p} />
              <button
                onClick={() => removeFromTeam(i)}
                class="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                aria-label="Quitar Pokémon"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        <button
          disabled={team().length < 2}
          onClick={() => setShowChart(true)}
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Comparar estadísticas
        </button>

        {showChart() && (
          <StatChart
            teamStats={team()}
            labels={['hp','attack','defense','special-attack','special-defense','speed']}
          />
        )}
      </div>
    </section>
  );
}
