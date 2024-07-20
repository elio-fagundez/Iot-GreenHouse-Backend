import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; // Importa CORS
import greenhousesRoutes from './routes/greenhouses.routes.js';

const app = express();

app.use(express.json());

// Habilita CORS para todas las rutas
app.use(cors());

// Rutas de la API
app.use('/api', greenhousesRoutes);

// Obtiene la ruta del directorio actual de manera compatible con módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Captura cualquier otra solicitud no manejada por las rutas anteriores y devuelve el index.html de tu frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 4000;
app.listen(port, () => console.log('Server on port', port));