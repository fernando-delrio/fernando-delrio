<h1 align="center">Fernando Del Río</h1>

<p align="center">
  Diez años soldando en talleres del metal. Ahora construyo el software que me hubiera gustado tener dentro.
</p>

---

## Quién soy

Pasé 10 años trabajando como soldador en talleres del metal.
Sé lo que es gestionar órdenes de trabajo en papel, perder el control del stock, o no saber qué está haciendo cada operario sin ir a preguntarle.

Cuando aprendí a programar, lo primero que hice fue construir la herramienta que me hubiera gustado tener.

Eso es Weldix.

---

## Weldix — SaaS multi-tenant para talleres del metal

**[→ Ver el repositorio](https://github.com/fernando-delrio/weldix)**

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

### [Trail](https://github.com/fernando-delrio/trail-) — Plataforma social full stack para ciclistas

Nació de otra necesidad real: llevar mis rutas sin depender de apps de terceros con suscripción. Acabó siendo bastante más.

- Rutas GPS sobre mapas interactivos con capas dinámicas
- Servicios cercanos al recorrido (hospitales, talleres, gasolineras) vía **OpenStreetMap + Overpass API**
- Garaje de bicicletas con seguimiento de mantenimiento
- **Recomendador de bicis y componentes con IA local** — microservicio propio sobre Ollama + Qwen 2.5
- Actividad social entre usuarios

**Stack:** React · Vite · MapLibre · Flask · SQLAlchemy · PostgreSQL · JWT · Ollama

### Tools Equip *(código privado)*

Web y sistema de citas de un negocio real de electrónica del automóvil en Ponferrada. React 19 + FastAPI, motor de citas con detección de conflictos de horario, 17 tests y CI en GitHub Actions.

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
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-000000?style=for-the-badge&logo=postgresql&logoColor=4169E1)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-000000?style=for-the-badge&logo=python&logoColor=red)

**Infraestructura**

![Docker](https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=2496ED)
![n8n](https://img.shields.io/badge/n8n-000000?style=for-the-badge&logo=n8n&logoColor=EA4B71)
![Stripe](https://img.shields.io/badge/Stripe-000000?style=for-the-badge&logo=stripe&logoColor=635BFF)
![Git](https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=F05032)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-000000?style=for-the-badge&logo=githubactions&logoColor=white)

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

