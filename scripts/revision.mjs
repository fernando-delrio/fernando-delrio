import { BORDE_APAGADO, dibujarTarjetaDeFondo, envolverSvg, FUENTE, segundos } from './svg.mjs'

const ANCHO = 900
const ALTO = 176
const IZQUIERDA = 48
const ANCHO_DE_LA_BARRA = 228
const PARTE_REVISADA = 0.9
const ARRIBA_DE_LOS_PASOS = 66
const IZQUIERDA_DE_LOS_PASOS = 330
const ANCHO_DEL_PASO = 125
const ALTO_DEL_PASO = 70
const HUECO = 14
const SEGUNDOS_POR_PASO = 1.1
const COLOR_ENCENDIDO = '#D97757'

// El orden en que leo un diff: primero lo que más daño hace si está mal.
const PASOS = [
  { titulo: 'Textos', detalle: 'los ve el cliente' },
  { titulo: 'Tests', detalle: '¿alguno rebajado?' },
  { titulo: 'Docs', detalle: 'decisiones reales' },
  { titulo: 'Código', detalle: 'con readfirst' },
]

const estilosDeLaRevision = () => `
    .previo { font: 500 15px ${FUENTE}; fill: #8b949e; }
    .cifra { font: 800 64px ${FUENTE}; fill: url(#acento); letter-spacing: -1px; }
    .pie { font: 500 14px ${FUENTE}; fill: #c9d1d9; }
    .pista { fill: #21262d; }
    .relleno { fill: url(#acento); transform-box: fill-box; transform-origin: left center;
      animation: llenar 1.6s .3s cubic-bezier(.2, .8, .2, 1) both; }
    .cabecera-de-pasos { font: 600 13px ${FUENTE}; fill: #8b949e; letter-spacing: .4px; }
    .paso { fill: #161b22; stroke: ${BORDE_APAGADO}; stroke-width: 1.5; animation: encender ${segundos(PASOS.length * SEGUNDOS_POR_PASO)} infinite both; }
    .numero { font: 700 12px ${FUENTE}; fill: ${COLOR_ENCENDIDO}; text-anchor: middle; }
    .titulo { font: 700 15px ${FUENTE}; fill: #e6edf3; text-anchor: middle; }
    .detalle { font: 400 12px ${FUENTE}; fill: #8b949e; text-anchor: middle; }
    .flecha { font: 700 16px ${FUENTE}; fill: #6e7681; text-anchor: middle; }
    @keyframes llenar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes encender { 0%, 22%, 100% { stroke: ${BORDE_APAGADO}; } 6%, 16% { stroke: ${COLOR_ENCENDIDO}; } }
    @media (prefers-reduced-motion: reduce) { .relleno, .paso { animation: none; } }`

const dibujarAcento = () =>
  `<defs><linearGradient id="acento" x1="0" x2="1"><stop offset="0" stop-color="#D97757"/><stop offset="1" stop-color="#3178C6"/></linearGradient></defs>`

const dibujarCifra = () => `
  <text class="previo" x="${IZQUIERDA}" y="50">casi el</text>
  <text class="cifra" x="${IZQUIERDA - 3}" y="112">90 %</text>
  <rect class="pista" x="${IZQUIERDA}" y="126" width="${ANCHO_DE_LA_BARRA}" height="6" rx="3"/>
  <rect class="relleno" x="${IZQUIERDA}" y="126" width="${ANCHO_DE_LA_BARRA * PARTE_REVISADA}" height="6" rx="3"/>
  <text class="pie" x="${IZQUIERDA}" y="156">del código que entra lo reviso yo</text>`

const izquierdaDelPaso = (posicion) => IZQUIERDA_DE_LOS_PASOS + posicion * (ANCHO_DEL_PASO + HUECO)

const dibujarPaso = ({ titulo, detalle }, posicion) => `
  <g transform="translate(${izquierdaDelPaso(posicion)} ${ARRIBA_DE_LOS_PASOS})">
    <rect class="paso" width="${ANCHO_DEL_PASO}" height="${ALTO_DEL_PASO}" rx="14" style="animation-delay: ${segundos(posicion * SEGUNDOS_POR_PASO)}"/>
    <text class="numero" x="${ANCHO_DEL_PASO / 2}" y="21">${posicion + 1}</text>
    <text class="titulo" x="${ANCHO_DEL_PASO / 2}" y="41">${titulo}</text>
    <text class="detalle" x="${ANCHO_DEL_PASO / 2}" y="59">${detalle}</text>
  </g>`

const dibujarFlecha = (posicion) =>
  `<text class="flecha" x="${izquierdaDelPaso(posicion + 1) - HUECO / 2}" y="${ARRIBA_DE_LOS_PASOS + ALTO_DEL_PASO / 2 + 5}">›</text>`

export const dibujarRevision = () =>
  envolverSvg({
    ancho: ANCHO,
    alto: ALTO,
    titulo: `Casi el 90 % del código que entra lo reviso yo. Leo el diff en este orden: ${PASOS.map(({ titulo }) => titulo).join(', ')}`,
    estilos: estilosDeLaRevision(),
    contenido: [
      dibujarTarjetaDeFondo({ ancho: ANCHO, alto: ALTO }),
      dibujarAcento(),
      dibujarCifra(),
      `<text class="cabecera-de-pasos" x="${IZQUIERDA_DE_LOS_PASOS}" y="46">MI ORDEN DE LECTURA DEL DIFF</text>`,
      ...PASOS.map(dibujarPaso),
      ...PASOS.slice(1).map((_paso, posicion) => dibujarFlecha(posicion)),
    ].join(''),
  })
