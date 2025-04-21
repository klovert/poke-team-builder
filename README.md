# PokéTeam Builder

**PokéTeam Builder** es una aplicación web full-stack que permite a jugadores y fans de Pokémon crear equipos, comparar estadísticas en tiempo real y planificar estrategias equilibradas.

---

## 🚀 Características

- **Búsqueda de Pokémon** por nombre o ID.
- **Añadir y eliminar** Pokémon de tu equipo (hasta 6).
- **Comparación visual de estadísticas** (HP, Ataque, Defensa, Ataque Especial, Defensa Especial, Velocidad).
- **Animaciones GSAP** para microinteracciones fluidas.
- **Diseño responsive** inspirado en la Pokédex.

---

## 🛠 Tecnologías

- **Astro** – Generación de sitios estáticos y renderizado híbrido.
- **Tailwind CSS** – Framework de utilidades para estilos rápidos y consistentes.
- **PokeAPI** – API pública de datos de Pokémon.
- **GSAP** – Biblioteca de animaciones profesionales y de alto rendimiento.
- **Solid.js** – Gestión de estado y lógica de interacción en componentes.
- **Chart.js** – Visualización de datos en gráficas de barras.

---

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── PokemonCard.jsx  – Componente de tarjeta de Pokémon.
│   ├── TeamBuilder.jsx  – Lógica principal y UI del builder.
│   └── StatChart.jsx    – Componente del gráfico de estadísticas.
├── pages/
│   ├── index.astro      – Página principal con el Team Builder.
│   └── team.astro       – Alias para la ruta `/team`.
├── scripts/
│   ├── api.js           – Funciones de fetch a PokeAPI.
│   └── gsap.js          – Funciones de animación con GSAP.
└── styles/
    └── global.css       – Estilos globales y temáticas de Pokédex.
```

---

## 📥 Instalación

Clona el repositorio e instala dependencias:

```bash
git clone https://github.com/klovert/poke-team-builder.git
cd poke-team-builder
npm install
```

---

## 🏃‍♂️ Desarrollo

Arranca el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000/team` para acceder al Team Builder.

---

## 📦 Build de producción

Genera la versión optimizada y pré-visualiza localmente:

```bash
npm run build
npm run preview
```

---

## 🌐 Despliegue

### GitHub Pages

1. Configura una GitHub Action para publicar la carpeta `dist/`.
2. Ajusta la rama o carpeta en los settings de GitHub Pages.

### Netlify

1. Conecta tu repo en Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist/`.

---

## 📄 Licencia

Este proyecto está licenciado bajo la licencia **MIT**. ¡Disfruta construyendo tu equipo Pokémon!

