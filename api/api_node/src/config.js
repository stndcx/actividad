import {config} from 'dotenv';

config();

export const PUERTO = process.env.PUERTO || 3000;
export const DB_NAME = process.env.DB_NAME || 'comentarios';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PUERTO = process.env.DB_PUERTO || 3306;
export const DB_USER = process.env.DB_USER || 'root';
