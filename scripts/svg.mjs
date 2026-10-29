export const FUENTE = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`
export const FUENTE_MONO = `ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace`
export const BORDE_APAGADO = '#30363d'

// Pesos de luminancia de Rec. 709: por debajo del mínimo, el logo no se ve sobre fondo oscuro.
const PESOS_DE_LUMINANCIA = [0.2126, 0.7152, 0.0722]
const LUMINANCIA_MINIMA = 0.15
const COLOR_CLARO = 'E6EDF3'
const DIGITOS_POR_CANAL = 2
const MAXIMO_DE_UN_CANAL = 255

const canalDe = (hex, canal) =>
  parseInt(hex.slice(canal * DIGITOS_POR_CANAL, (canal + 1) * DIGITOS_POR_CANAL), 16) / MAXIMO_DE_UN_CANAL

const luminancia = (hex) => PESOS_DE_LUMINANCIA.reduce((suma, peso, canal) => suma + peso * canalDe(hex, canal), 0)

export const colorLegible = (hex) => {
  if (luminancia(hex) < LUMINANCIA_MINIMA) return COLOR_CLARO
  return hex
}

export const segundos = (valor) => `${valor.toFixed(2)}s`

// GitHub muestra los SVG como <img>: las animaciones CSS funcionan, pero no las fuentes externas ni los scripts.
export const envolverSvg = ({ ancho, alto, titulo, estilos, contenido }) => `<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="${titulo}">
  <title>${titulo}</title>
  <style>${estilos}
  </style>${contenido}
</svg>
`
