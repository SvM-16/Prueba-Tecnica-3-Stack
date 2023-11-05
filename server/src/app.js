import express from 'express'
import morgan from 'morgan'
import empleadosRoute from './routes/empleados.routes.js'
import rolesRoute from  './routes/roles.routes.js'
import areasRoute from './routes/areas.routes.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

app.use(express.json())

app.use(morgan('dev'))

app.use('/api', empleadosRoute)
app.use('/api', rolesRoute)
app.use('/api', areasRoute)


export default app
