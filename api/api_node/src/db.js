import { createPool } from "mysql2/promise";
import {DB_HOST, DB_PUERTO, DB_NAME, DB_USER } from "./config.js"


export const conexion = createPool({
	host: DB_HOST,
	user: DB_USER,
	password: "",
	port: DB_PUERTO,
	database: DB_NAME
})