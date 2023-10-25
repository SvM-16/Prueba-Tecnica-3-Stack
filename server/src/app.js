import express from 'express'
import morgan from 'morgan'

import empleadosRoutes from './routes/empleados.routes.js'

const app = express();

app.use(express.json())

app.use(morgan('dev'))

app.use("api", empleadosRoutes);

export default app
