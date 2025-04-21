// src/components/StatChart.jsx
import { onMount } from 'solid-js';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

export default function StatChart(props) {
  const { teamStats, labels } = props;
  let canvasRef;

  onMount(() => {
    Chart.register(
      BarController,
      BarElement,
      CategoryScale,
      LinearScale,
      Title,
      Tooltip,
      Legend
    );

    // Palette sencilla para hasta 6 Pokémon
    const palette = [
      'rgba(239, 68, 68, 0.6)',    // rojo
      'rgba(37, 99, 235, 0.6)',    // azul
      'rgba(245, 158, 11, 0.6)',   // amarillo
      'rgba(16, 185, 129, 0.6)',   // verde
      'rgba(168, 85, 247, 0.6)',   // morado
      'rgba(234, 179, 8, 0.6)',    // ámbar
    ];

    const datasets = teamStats.map((poke, idx) => {
      const color = palette[idx % palette.length];
      return {
        label: poke.name,
        data: labels.map(lab => {
          const statObj = poke.stats.find(s => s.stat.name === lab);
          return statObj ? statObj.base_stat : 0;
        }),
        backgroundColor: color,
        borderColor: color.replace('0.6', '1'),
        borderWidth: 1,
      };
    });

    new Chart(canvasRef.getContext('2d'), {
      type: 'bar',
      data: { labels, datasets },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparación de estadísticas',
            color: '#1f2937',       // gris oscuro
            font: { size: 18 },
          },
          legend: {
            position: 'top',
            labels: { color: '#1f2937' },
          },
          tooltip: {
            bodyColor: '#1f2937',
            backgroundColor: '#fff',
            borderColor: '#d1d5db',
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { color: '#374151' },
          },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: {
              stepSize: 20,
              color: '#374151',
            },
          },
        },
      },
    });
  });

  return (
    <div class="mt-6 p-4 bg-white rounded-lg shadow-lg">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
