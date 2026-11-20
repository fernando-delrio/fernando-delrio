# Ruta por bloques

Contrastada el 20/11/2026 con la lista de temas del roadmap de AI Engineer de roadmap.sh, leída en su repositorio público. Los bloques y su orden son míos; los temas que aparecen entre paréntesis son los que ese roadmap trae para el área, solo como puntero. Para el detalle: [roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer).

Estado: **por empezar**, **medio**, **avanzado**. Se decide con evidencia, no con sensación (ver [PROGRESO.md](PROGRESO.md)).

| # | Bloque | Estado | Entregable que lo demuestra |
|---|---|---|---|
| 1 | Cómo funciona un LLM | Medio | Explicar sin ayuda tokens, ventana de contexto y muestreo (temperatura, top-p) con un ejemplo propio |
| 2 | Prompting y ingeniería de contexto | Medio | Dos versiones de un prompt medidas contra los mismos casos |
| 3 | Arnés y agentes de código | Avanzado | Un repo con guardarraíles que se ejecutan (permisos, hooks, pruebas) |
| 4 | Salidas estructuradas y herramientas | Medio | Esquema validado y test del caso inválido |
| 5 | MCP | Por empezar | Un servidor MCP propio, pequeño, con permisos mínimos |
| 6 | Agentes y multiagente | Medio | Un agente con límite de pasos, trazas y coste máximo |
| 7 | RAG y datos | Por empezar | Buscador sobre documentación propia con medida de acierto de recuperación |
| 8 | Evals | Por empezar | Conjunto de casos, línea base y regla de aceptación |
| 9 | Observabilidad y producción | Por empezar | Coste, latencia y trazas por llamada |
| 10 | Seguridad de LLMs | Por empezar | Conjunto de ataques de prueba pasado a un asistente real |
| 11 | Modelos y herramientas | Medio | Tabla propia de modelo, coste y tarea con datos de mis tareas |
| 12 | Multimodal y fine-tuning | Por empezar | Solo si un proyecto real lo pide |

## Qué cubre cada bloque

1. **Cómo funciona un LLM:** tokens, ventana de contexto, parámetros de muestreo, límites. *roadmap.sh:* how LLMs work, tokens, context window, sampling parameters, temperature, top-p.
2. **Prompting y contexto:** sistema y roles, ejemplos, razonamiento paso a paso, y qué se mete en el contexto y qué no. *roadmap.sh:* prompt engineering, context engineering, context failure modes, context compaction.
3. **Arnés y agentes de código:** permisos, hooks, memoria del proyecto, specs. *roadmap.sh:* harness engineering, Claude Code, Codex, Cursor.
4. **Salidas estructuradas y herramientas:** contrato entre el modelo y mi código. *roadmap.sh:* structured output, function calling, constraining outputs.
5. **MCP:** cliente, servidor, host y transporte. *roadmap.sh:* MCP, building an MCP server, building an MCP client.
6. **Agentes:** bucle, herramientas, parada, memoria y varios agentes. *roadmap.sh:* AI agents, multi-agents, memory systems, Claude Agent SDK, Google ADK.
7. **RAG y datos:** troceado, embeddings, bases vectoriales, recuperación, y cuándo no hace falta. *roadmap.sh:* RAG, chunking, embeddings, vector databases, RAG vs fine-tuning.
8. **Evals:** casos con resultado esperado, métricas y regresiones. *roadmap.sh:* LLM evaluations, deterministic evals, model-based evals, human evals, regression testing.
9. **Observabilidad y producción:** trazas, coste, latencia, caché de prompts. *roadmap.sh:* LLM observability, tracing and logging, cost and latency monitoring, prompt caching.
10. **Seguridad:** inyección de prompt, pruebas adversarias, seguridad del contexto, ética. *roadmap.sh:* prompt injection attacks, adversarial testing, context security, AI safety and ethics.
11. **Modelos y herramientas:** abiertos o cerrados, locales o alojados, elegir el adecuado. *roadmap.sh:* choosing the right model, open vs closed models, self-hosted models.
12. **Multimodal y fine-tuning:** imagen, voz, vídeo y ajuste fino; solo con caso real.

## Orden de estudio

1. Bloque 8 (evals), porque es lo que más separa un prototipo de un producto y se aplica a todo lo demás.
2. Bloques 4 y 9, para tener contratos y cifras antes de añadir piezas.
3. Bloque 10, sobre un asistente real.
4. Bloques 7, 5 y 6, uno por proyecto que los necesite.
5. Bloques 1, 2, 11 y 12 se refuerzan por el camino.

## Regla de control

Un bloque pasa a **medio** o **avanzado** solo con un entregable guardado con fecha. Estudiar un tema no lo mueve.
