import { Router } from "express";
import { verificaToken } from '../autentificar/autorizar.js';
import { obtenComentarios, obtenComentario, creaComentario, actualizaComentario, eliminaComentario } from "../controladores/comentarios_control.js";

const ruta = Router();

ruta.get("/comentarios", verificaToken, obtenComentarios)
ruta.get("/comentarios/:id", verificaToken, obtenComentario)
ruta.post("/comentarios", verificaToken, creaComentario)
ruta.patch("/comentarios/:id", verificaToken, actualizaComentario)
ruta.delete("/comentarios/:id", verificaToken, eliminaComentario)

export default ruta;
