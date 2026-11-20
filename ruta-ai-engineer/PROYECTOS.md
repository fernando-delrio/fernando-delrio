# Proyectos

Cada bloque del [ROADMAP.md](ROADMAP.md) se demuestra en un proyecto real, no en un ejercicio suelto.

## La app de la tienda (proyecto central)

Portal interno y asistente de voz en una misma app, en `~/dev/primer-equipo-ai`. Es un repositorio de empresa: aquí solo se enlaza por nombre y no se copia su contenido.

| Superficie | Estado a 20/11/2026 | Bloques que demuestra |
|---|---|---|
| Asistente de voz | En marcha; mediciones pendientes | 4, 8, 9, 10 |
| Copiloto del portal | Solo preguntas escritas, sin spec | 6, 7, 10 |
| Arnés, specs y guardarraíles | Montado | 3 |

Lo que se mide primero: SPEC-023, evals del asistente de voz con 30 o 40 casos simulados, línea base, coste, duración y casos adversarios, ejecutados en Vapi Simulations con tope de gasto por escrito.

Historia que cuenta: dos usos reales de LLM en una app, con permisos por perfil, medición y control de datos.

## Proyectos de apoyo

- **readfirst:** plugin de estilo y revisores. Demuestra el bloque 3 y que la legibilidad se vigila con máquinas.
- **libro-web-2026:** capítulos de fundamentos. Material para enseñar.

## Reglas para publicar

- Nada de datos de clientes, teléfonos, credenciales ni rutas privadas.
- Los números de las mediciones se publican tras una revisión humana.
- El código de la empresa no sale de su repositorio sin permiso del jefe.
