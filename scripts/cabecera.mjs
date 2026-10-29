import { envolverSvg, FUENTE, FUENTE_MONO, segundos } from './svg.mjs'

const ANCHO = 900
const ALTO = 230
const CENTRO = ANCHO / 2
const TAMANO_DE_LA_FRASE = 20
// Ancho medio de un carácter de las monoespaciadas del sistema, en ems: el recorte se ajusta a él.
const ANCHO_DE_CARACTER = 0.6
const HOLGURA_DEL_RECORTE = 24
const SEGUNDOS_POR_FRASE = 4.5
const PARTE_ESCRIBIENDO = 0.45
const PARTE_ANTES_DE_APAGAR = 0.9
const ARRIBA_DE_LA_FRASE = 130
const ALTO_DE_LA_FRASE = 34
const LINEA_DE_LA_FRASE = 154

const FRASES = [
  'Software developer',
  'Mantengo y escalo toolsequip.es',
  'Asistente telefónico y chatbot, desde cero',
  'Agentes de IA que escriben código como lo escribo yo',
]

const porcentaje = (valor) => `${valor.toFixed(2)}%`

const estilosDeLaCabecera = () => {
  const ventana = 100 / FRASES.length
  return `
    .nombre { font: 800 46px ${FUENTE}; fill: #f0f6fc; text-anchor: middle; letter-spacing: -.5px; }
    .lema { font: 400 14px ${FUENTE}; fill: #8b949e; text-anchor: middle; }
    .frase { font: 500 ${TAMANO_DE_LA_FRASE}px ${FUENTE_MONO}; fill: #79c0ff; text-anchor: middle;
      animation: mostrar ${segundos(FRASES.length * SEGUNDOS_POR_FRASE)} infinite both; }
    .escribir { transform-box: fill-box; transform-origin: left center;
      animation: escribir ${segundos(FRASES.length * SEGUNDOS_POR_FRASE)} infinite both; }
    .subrayado { transform-box: fill-box; transform-origin: center; animation: crecer 1.2s .3s cubic-bezier(.2, .8, .2, 1) both; }
    .luz { animation: derivar 14s ease-in-out infinite alternate; }
    .luz-2 { animation-duration: 18s; animation-direction: alternate-reverse; }
    @keyframes escribir { 0% { transform: scaleX(0); } ${porcentaje(ventana * PARTE_ESCRIBIENDO)}, 100% { transform: scaleX(1); } }
    @keyframes mostrar { 0%, ${porcentaje(ventana * PARTE_ANTES_DE_APAGAR)} { opacity: 1; } ${porcentaje(ventana)}, 100% { opacity: 0; } }
    @keyframes crecer { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes derivar { from { transform: translate(0, 0); } to { transform: translate(120px, 30px); } }
    @media (prefers-reduced-motion: reduce) { .frase, .escribir, .subrayado, .luz { animation: none; } .frase:not(.frase-0) { display: none; } }`
}

const dibujarFondo = () => `
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d1117"/><stop offset="1" stop-color="#161b22"/></linearGradient>
    <linearGradient id="acento" x1="0" x2="1"><stop offset="0" stop-color="#D97757"/><stop offset="1" stop-color="#3178C6"/></linearGradient>
    <filter id="desenfoque" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="45"/></filter>
    <clipPath id="marco"><rect width="${ANCHO}" height="${ALTO}" rx="20"/></clipPath>
  </defs>
  <g clip-path="url(#marco)">
    <rect width="${ANCHO}" height="${ALTO}" fill="url(#fondo)"/>
    <g filter="url(#desenfoque)" opacity=".45">
      <circle class="luz" cx="170" cy="50" r="90" fill="#D97757"/>
      <circle class="luz luz-2" cx="700" cy="190" r="100" fill="#3178C6"/>
    </g>
  </g>
  <rect width="${ANCHO - 1}" height="${ALTO - 1}" x=".5" y=".5" rx="20" fill="none" stroke="#30363d"/>`

const dibujarNombre = () => `
  <text class="nombre" x="${CENTRO}" y="88">Fernando Del Río</text>
  <rect class="subrayado" x="${CENTRO - 70}" y="106" width="140" height="3" rx="1.5" fill="url(#acento)"/>
  <text class="lema" x="${CENTRO}" y="200">Full stack · React + TypeScript · FastAPI · agentes de IA · El Bierzo (León)</text>`

const dibujarFrase = (frase, posicion) => {
  const ancho = frase.length * TAMANO_DE_LA_FRASE * ANCHO_DE_CARACTER + HOLGURA_DEL_RECORTE
  const retraso = segundos(posicion * SEGUNDOS_POR_FRASE)
  return `
  <clipPath id="frase-${posicion}">
    <rect class="escribir" x="${CENTRO - ancho / 2}" y="${ARRIBA_DE_LA_FRASE}" width="${ancho}" height="${ALTO_DE_LA_FRASE}" style="animation-delay: ${retraso}; animation-timing-function: steps(${frase.length})"/>
  </clipPath>
  <text class="frase frase-${posicion}" x="${CENTRO}" y="${LINEA_DE_LA_FRASE}" clip-path="url(#frase-${posicion})" style="animation-delay: ${retraso}">${frase}</text>`
}

export const dibujarCabecera = () =>
  envolverSvg({
    ancho: ANCHO,
    alto: ALTO,
    titulo: `Fernando Del Río. ${FRASES.join('. ')}.`,
    estilos: estilosDeLaCabecera(),
    contenido: [dibujarFondo(), dibujarNombre(), ...FRASES.map(dibujarFrase)].join(''),
  })
