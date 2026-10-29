import { BORDE_APAGADO, envolverSvg, FUENTE, segundos } from './svg.mjs'

const ANCHO = 900
const ALTO = 190
const ANCHO_DEL_PASO = 136
const ALTO_DEL_PASO = 66
const HUECO = 15
const ARRIBA = 24
const BAJADA_DEL_RETORNO = 40
const SEGUNDOS_POR_PASO = 1
const COLOR_ENCENDIDO = '#D97757'

const PASOS = [
  { titulo: 'Yo', detalle: 'idea y criterio' },
  { titulo: 'Spec', detalle: 'requisitos EARS' },
  { titulo: 'Plan y tareas', detalle: 'los apruebo yo' },
  { titulo: 'Implementer', detalle: 'prueba primero' },
  { titulo: 'Revisores', detalle: 'norma y seguridad' },
  { titulo: 'Hook de cierre', detalle: 'linter y formato' },
]

const MARGEN = (ANCHO - PASOS.length * ANCHO_DEL_PASO - (PASOS.length - 1) * HUECO) / 2
const ABAJO_DE_LOS_PASOS = ARRIBA + ALTO_DEL_PASO
const ALTURA_DEL_RETORNO = ABAJO_DE_LOS_PASOS + BAJADA_DEL_RETORNO

const izquierdaDelPaso = (posicion) => MARGEN + posicion * (ANCHO_DEL_PASO + HUECO)

const centroDelPaso = (posicion) => izquierdaDelPaso(posicion) + ANCHO_DEL_PASO / 2

const estilosDelFlujo = () => `
    .paso { fill: #161b22; stroke: ${BORDE_APAGADO}; stroke-width: 1.5; animation: encender ${segundos(PASOS.length * SEGUNDOS_POR_PASO)} infinite both; }
    .titulo { font: 700 15px ${FUENTE}; fill: #e6edf3; text-anchor: middle; }
    .detalle { font: 400 12px ${FUENTE}; fill: #8b949e; text-anchor: middle; }
    .flecha { font: 700 16px ${FUENTE}; fill: #6e7681; text-anchor: middle; }
    .retorno { fill: none; stroke: ${COLOR_ENCENDIDO}; stroke-width: 2; stroke-dasharray: 6 8; animation: fluir 1.2s linear infinite; }
    .nota { font: 500 13px ${FUENTE}; fill: #c9d1d9; text-anchor: middle; }
    @keyframes encender { 0%, 22%, 100% { stroke: ${BORDE_APAGADO}; } 6%, 14% { stroke: ${COLOR_ENCENDIDO}; } }
    @keyframes fluir { to { stroke-dashoffset: -28; } }
    @media (prefers-reduced-motion: reduce) { .paso, .retorno { animation: none; } }`

const dibujarPaso = ({ titulo, detalle }, posicion) => `
  <g transform="translate(${izquierdaDelPaso(posicion)} ${ARRIBA})">
    <rect class="paso" width="${ANCHO_DEL_PASO}" height="${ALTO_DEL_PASO}" rx="14" style="animation-delay: ${segundos(posicion * SEGUNDOS_POR_PASO)}"/>
    <text class="titulo" x="${ANCHO_DEL_PASO / 2}" y="29">${titulo}</text>
    <text class="detalle" x="${ANCHO_DEL_PASO / 2}" y="49">${detalle}</text>
  </g>`

const dibujarFlecha = (posicion) =>
  `<text class="flecha" x="${izquierdaDelPaso(posicion + 1) - HUECO / 2}" y="${ARRIBA + ALTO_DEL_PASO / 2 + 5}">›</text>`

const dibujarRetorno = () => {
  const ultimo = PASOS.length - 1
  return `
  <defs><marker id="punta" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${COLOR_ENCENDIDO}"/></marker></defs>
  <path class="retorno" marker-end="url(#punta)" d="M${centroDelPaso(ultimo)} ${ABAJO_DE_LOS_PASOS + 4} V${ALTURA_DEL_RETORNO} H${centroDelPaso(0)} V${ABAJO_DE_LOS_PASOS + 8}"/>
  <text class="nota" x="${ANCHO / 2}" y="${ALTURA_DEL_RETORNO + 26}">vuelve a mí: código que puedo leer, revisar y cambiar sin IA</text>`
}

export const dibujarFlujo = () =>
  envolverSvg({
    ancho: ANCHO,
    alto: ALTO,
    titulo: `Flujo de trabajo con agentes: ${PASOS.map(({ titulo }) => titulo).join(', ')}, y vuelve a mí para revisarlo`,
    estilos: estilosDelFlujo(),
    contenido: [
      ...PASOS.map(dibujarPaso),
      ...PASOS.slice(1).map((_paso, posicion) => dibujarFlecha(posicion)),
      dibujarRetorno(),
    ].join(''),
  })
