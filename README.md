<h1 align="center">Fernando Del Río</h1>

<p align="center">
  Diez años soldando en talleres del metal. Ahora construyo el software que me hubiera gustado tener dentro.
</p>

---

## Quién soy

Pasé 10 años trabajando como soldador en talleres del metal.
Sé lo que es gestionar órdenes de trabajo en papel, perder el control del stock, o no saber qué está haciendo cada operario sin ir a preguntarle.

Cuando aprendí a programar, dejé de hacer ejercicios de curso y empecé a construir software para problemas reales: el mío, el de un cerrajero de Ponferrada, el de un taller de electrónica del automóvil, el de un entrenador personal.

Weldix es el más grande de todos y el que más lejos he llevado — no un prototipo, un producto en producción con clientes reales.

---

## Weldix — SaaS multi-tenant para talleres del metal

**[→ Probar la aplicación](https://weldix.es)** · **[→ Ver el repositorio](https://github.com/fernando-delrio/weldix)**

> Desplegado en el plan gratuito de Render: la API se duerme tras un rato sin uso y el primer inicio de sesión puede tardar hasta un minuto. Los siguientes son instantáneos.

Sistema de gestión para talleres de soldadura, cerrajería y metal. No un CRUD de demostración: el flujo está diseñado desde el lado del operario, no desde el diagrama entidad-relación.

- Órdenes de trabajo con máquina de estados (pendiente → en proceso → control → listo → entregado)
- Fichaje de operarios desde tablet o móvil, y escáner QR para iniciar trabajos sin teclear
- Materiales con alertas de stock bajo
- RRHH: vacaciones, ausencias, festivos, informes mensuales
- GMAO: estado de maquinaria con alertas de mantenimiento
- Asistente de IA con contexto real del taller (Mistral)
- Automatizaciones con n8n: WhatsApp al cliente cuando una OT está lista, alertas de stock, resúmenes diarios

**Stack:** React 19 · Vite · Tailwind v4 · FastAPI · SQLAlchemy · PostgreSQL · Pydantic v2 · JWT multi-rol · Stripe · Resend · n8n + Docker

**Arquitectura:** multi-tenant con aislamiento por `tenant_id`, trial automático de 15 días, módulos por feature en frontend, capas router → service → model en backend.

---

## Otros proyectos

### Tools Equip *(código privado)*

Web y sistema de citas de un negocio real de electrónica del automóvil en Ponferrada. React 19 + FastAPI, motor de citas con detección de conflictos de horario, 17 tests y CI en GitHub Actions.

### [Kinovia](https://github.com/fernando-delrio/kinovia) — SaaS para entrenadores personales *(en desarrollo)*

Planes de entrenamiento que se adaptan a la condición física real del cliente, no al revés. Un entrenador crea plantillas (fases → días → ejercicios) y las asigna a sus clientes, que registran su seguimiento desde su propia cuenta.

El diferenciador vive en el propio dato: un **motor de sustitución de ejercicios por condición física** (cadera, rodilla, diástasis abdominal...) integrado en la plantilla, no una nota manual aparte — lo que separa a Kinovia de un Trainerize o TrueCoach genérico.

Multi-tenant desde el diseño: muchos entrenadores, cada uno con sus clientes, aislados por Row Level Security de Postgres, nunca por lógica de aplicación.

**Stack:** React 19 · Vite · Tailwind v4 · Supabase (Postgres, Auth, RLS) · Cucumber para tests de aceptación

### [Trail](https://github.com/fernando-delrio/trail-app) — Plataforma social full stack para ciclistas

Nació de otra necesidad real: llevar mis rutas sin depender de apps de terceros con suscripción. Acabó siendo bastante más.

- Rutas GPS sobre mapas interactivos con capas dinámicas
- Servicios cercanos al recorrido (hospitales, talleres, gasolineras) vía **OpenStreetMap + Overpass API**
- Garaje de bicicletas con seguimiento de mantenimiento
- **Recomendador de bicis y componentes con IA local** — microservicio propio sobre Ollama + Qwen 2.5
- Actividad social entre usuarios

**Stack:** React · Vite · MapLibre · Flask · SQLAlchemy · PostgreSQL · JWT · Ollama

---

## Stack

**Frontend**

![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite&logoColor=646CFF)
![TailwindCSS](https://img.shields.io/badge/Tailwind-000000?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)

**Backend**

![Python](https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=3776AB)
![FastAPI](https://img.shields.io/badge/FastAPI-000000?style=for-the-badge&logo=fastapi&logoColor=009688)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-000000?style=for-the-badge&logo=postgresql&logoColor=4169E1)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-000000?style=for-the-badge&logo=python&logoColor=red)

**Testing y CI**

![Vitest](https://img.shields.io/badge/Vitest-000000?style=for-the-badge&logo=vitest&logoColor=6E9F18)
![pytest](https://img.shields.io/badge/pytest-000000?style=for-the-badge&logo=pytest&logoColor=0A9EDC)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-000000?style=for-the-badge&logo=githubactions&logoColor=2088FF)

**IA y automatización**

![Mistral AI](https://img.shields.io/badge/Mistral_AI-000000?style=for-the-badge&logo=mistralai&logoColor=FA520F)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-000000?style=for-the-badge&logo=n8n&logoColor=EA4B71)

**Infraestructura**

![Docker](https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=2496ED)
![Stripe](https://img.shields.io/badge/Stripe-000000?style=for-the-badge&logo=stripe&logoColor=635BFF)
![Git](https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=F05032)

---

## Conectamos

Abierto a oportunidades como desarrollador full-stack. El Bierzo (León) o remoto.

<p align="center">
  <a href="https://www.linkedin.com/in/fernando-david-del-rio-96b71168/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:fernandogondelrio@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</p>
