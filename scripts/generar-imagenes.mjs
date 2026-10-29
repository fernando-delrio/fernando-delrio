import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dibujarCabecera } from './cabecera.mjs'
import { dibujarFlujo } from './flujo.mjs'
import { CATEGORIAS } from './stack.mjs'
import { dibujarStack } from './tarjetas-del-stack.mjs'

const CARPETA_DE_IMAGENES = fileURLToPath(new URL('../assets/', import.meta.url))

const IMAGENES = [
  { archivo: 'cabecera.svg', svg: dibujarCabecera() },
  { archivo: 'flujo-ia.svg', svg: dibujarFlujo() },
  ...CATEGORIAS.map((categoria) => ({ archivo: categoria.archivo, svg: dibujarStack(categoria) })),
]

mkdirSync(CARPETA_DE_IMAGENES, { recursive: true })
for (const { archivo, svg } of IMAGENES) writeFileSync(join(CARPETA_DE_IMAGENES, archivo), svg)
console.log(`${IMAGENES.length} imágenes en assets/`)
