//nos facilita el uso de las rutas
import express from "express";
//nos sirve para comunicar ambos backend tanto el del frontend como el del backend
//tambien es un middleware
import cors from 'cors';
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
//middlewares
//para entender los json
app.use(cors({
    //sirve para indicar que servidores queremos que se conecten 
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`app listen ${PORT}`);
