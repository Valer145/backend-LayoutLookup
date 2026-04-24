# Interior Design Styles - Backend (SIS3410)

Backend completo para tu aplicación de estilos de diseño de interiores.

## Setup
1. `npm install`
2. Crea archivo `.env` (copia de `.env.example`)
3. Pon tu conexión de MongoDB Atlas en `MONGO_URI`
4. `npm run dev`

## Endpoints principales
- GET    `/api/styles`          → todos los estilos
- GET    `/api/styles/:id`      → un estilo
- POST   `/api/styles`          → crear (necesita token)
- PUT    `/api/styles/:id`      → actualizar
- DELETE `/api/styles/:id`      → eliminar
- POST   `/api/auth/register`
- POST   `/api/auth/login`

Perfecto para conectar con tu frontend del primer parcial.