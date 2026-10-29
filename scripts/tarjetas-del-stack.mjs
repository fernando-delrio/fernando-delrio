import { BORDE_APAGADO, colorLegible, envolverSvg, FUENTE, segundos } from './svg.mjs'

const LADO = 104
const HUECO = 16
const MARGEN = 14
const LADO_DEL_ICONO = 40
const CAJA_DE_SIMPLE_ICONS = 24
const ARRIBA_DEL_ICONO = 20
const ABAJO_DEL_NOMBRE = 16
const RETRASO_ENTRE_TARJETAS = 0.12
const DURACION_DE_APARECER = 0.6
// Cada tarjeta flota con su propio desfase para que no suban todas a la vez.
const DESFASE_DEL_FLOTE = 0.35
const PASO_DEL_BRILLO = 0.9

const estilosDelStack = (cantidad) => `
    .tarjeta { opacity: 0; transform-box: fill-box; transform-origin: center;
      animation: aparecer ${segundos(DURACION_DE_APARECER)} cubic-bezier(.2, .8, .2, 1) forwards, flotar 4s ease-in-out infinite; }
    .fondo { fill: #0d1117; stroke: ${BORDE_APAGADO}; stroke-width: 1.5; animation: brillo ${segundos(cantidad * PASO_DEL_BRILLO)} ease-in-out infinite; }
    .nombre { font: 600 13px ${FUENTE}; fill: #c9d1d9; text-anchor: middle; }
    @keyframes aparecer { from { opacity: 0; transform: translateY(14px) scale(.92); } to { opacity: 1; transform: none; } }
    @keyframes flotar { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
    @keyframes brillo { 0%, 22%, 100% { stroke: ${BORDE_APAGADO}; } 10% { stroke: var(--color); } }
    @media (prefers-reduced-motion: reduce) { .tarjeta, .fondo { animation: none; opacity: 1; } }`

const retrasosDeLaTarjeta = (posicion) => {
  const aparece = posicion * RETRASO_ENTRE_TARJETAS
  return `${segundos(aparece)}, ${segundos(aparece + DURACION_DE_APARECER + posicion * DESFASE_DEL_FLOTE)}`
}

const dibujarTarjeta = ({ icono, nombre }, posicion) => {
  const color = `#${colorLegible(icono.hex)}`
  const escala = LADO_DEL_ICONO / CAJA_DE_SIMPLE_ICONS
  const izquierdaDelIcono = (LADO - LADO_DEL_ICONO) / 2
  return `
  <g transform="translate(${MARGEN + posicion * (LADO + HUECO)} ${MARGEN})">
    <g class="tarjeta" style="animation-delay: ${retrasosDeLaTarjeta(posicion)}">
      <rect class="fondo" width="${LADO}" height="${LADO}" rx="18" style="--color: ${color}; animation-delay: ${segundos(posicion * PASO_DEL_BRILLO)}"/>
      <path transform="translate(${izquierdaDelIcono} ${ARRIBA_DEL_ICONO}) scale(${escala})" fill="${color}" d="${icono.path}"/>
      <text class="nombre" x="${LADO / 2}" y="${LADO - ABAJO_DEL_NOMBRE}">${nombre}</text>
    </g>
  </g>`
}

export const dibujarStack = ({ titulo, tecnologias }) =>
  envolverSvg({
    ancho: MARGEN * 2 + tecnologias.length * LADO + (tecnologias.length - 1) * HUECO,
    alto: MARGEN * 2 + LADO,
    titulo: `Stack: ${titulo}`,
    estilos: estilosDelStack(tecnologias.length),
    contenido: tecnologias.map(dibujarTarjeta).join(''),
  })
