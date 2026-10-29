import {
  siChatwoot,
  siClaude,
  siDocker,
  siEslint,
  siFastapi,
  siFlask,
  siGit,
  siGithubactions,
  siJavascript,
  siMistralai,
  siN8n,
  siOllama,
  siPostgresql,
  siPrettier,
  siPydantic,
  siPytest,
  siPython,
  siReact,
  siRuff,
  siSqlalchemy,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
} from 'simple-icons'

// Vapi no está en simple-icons: una onda de voz en la misma caja de 24×24.
const ICONO_DE_VAPI = { hex: '5DFECA', path: 'M3 9h2v6H3zM7 6h2v12H7zM11 3h2v18h-2zM15 6h2v12h-2zM19 9h2v6h-2z' }

export const CATEGORIAS = [
  {
    archivo: 'stack-frontend.svg',
    titulo: 'Frontend',
    tecnologias: [
      { icono: siTypescript, nombre: 'TypeScript' },
      { icono: siReact, nombre: 'React' },
      { icono: siJavascript, nombre: 'JavaScript' },
      { icono: siVite, nombre: 'Vite' },
      { icono: siTailwindcss, nombre: 'Tailwind' },
    ],
  },
  {
    archivo: 'stack-backend.svg',
    titulo: 'Backend y datos',
    tecnologias: [
      { icono: siPython, nombre: 'Python' },
      { icono: siFastapi, nombre: 'FastAPI' },
      { icono: siPydantic, nombre: 'Pydantic' },
      { icono: siPostgresql, nombre: 'PostgreSQL' },
      { icono: siSqlalchemy, nombre: 'SQLAlchemy' },
      { icono: siSupabase, nombre: 'Supabase' },
      { icono: siFlask, nombre: 'Flask' },
    ],
  },
  {
    archivo: 'stack-ia.svg',
    titulo: 'IA, voz y automatización',
    tecnologias: [
      { icono: siClaude, nombre: 'Claude Code' },
      { icono: ICONO_DE_VAPI, nombre: 'Vapi' },
      { icono: siChatwoot, nombre: 'Chatwoot' },
      { icono: siN8n, nombre: 'n8n' },
      { icono: siMistralai, nombre: 'Mistral' },
      { icono: siOllama, nombre: 'Ollama' },
    ],
  },
  {
    archivo: 'stack-calidad.svg',
    titulo: 'Calidad y CI',
    tecnologias: [
      { icono: siVitest, nombre: 'Vitest' },
      { icono: siPytest, nombre: 'pytest' },
      { icono: siEslint, nombre: 'ESLint' },
      { icono: siPrettier, nombre: 'Prettier' },
      { icono: siRuff, nombre: 'Ruff' },
      { icono: siGithubactions, nombre: 'Actions' },
    ],
  },
  {
    archivo: 'stack-infra.svg',
    titulo: 'Infraestructura y pagos',
    tecnologias: [
      { icono: siDocker, nombre: 'Docker' },
      { icono: siStripe, nombre: 'Stripe' },
      { icono: siGit, nombre: 'Git' },
    ],
  },
]
