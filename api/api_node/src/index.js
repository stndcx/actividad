import express from "express";
import comentarioRutas  from "./rutas/comentarios_rutas.js";
import cors from "cors";
import {PUERTO} from "./config.js";
import jwt from 'jsonwebtoken';
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", comentarioRutas);

app.post('/api/auth', (req, res) => {
	const user = {
		id: 1,
		nombre: 'stndc',
		email: 'stndc@email.com',
	};

	jwt.sign({ user }, 'clave_secreta', (err, token) => {
		res.json({
			token,
		});
	});
});

app.use((req, res, next) => {
	res.status(404).json({ message: "API no encontrada" });
});

app.listen(PUERTO)