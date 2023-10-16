import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CrearComentarios() {
	const url = "http://localhost:3000/api/comentarios";
	const [datos, setDatos] = useState({
		titulo: "",
		comentario: "",
		fecha: "",
	});
	const navigate = useNavigate();

	const agregarComentario = (e) => {
		e.preventDefault();
		const config = {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
			},
		};

		axios
		.post(url, datos, config)
		.then(() => navigate("/"))
		.catch((err) => console.error(err));
	};

	return (
		<div className="container py-5">
			<h3>Crear Comentario</h3>
			<div className="rounded shadow p-4">
				<form onSubmit={agregarComentario}>
					<div className="mb-3">
						<label htmlFor="titulo">Titulo:</label>
						<input
						type="text"
						name="titulo"
						className="form-control"
						placeholder="Ingresa titulo"
						onChange={(e) => setDatos({ ...datos, titulo: e.target.value })}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="comentario">Comentario:</label>
						<textarea
						type="text"
						name="comentario"
						className="form-control"
						placeholder="Ingresa comentario"
						onChange={(e) => setDatos({ ...datos, comentario: e.target.value })}
						></textarea>
					</div>

					<div className="mb-3">
						<label htmlFor="fecha">Fecha:</label>
						<input
						type="date"
						name="fecha"
						className="form-control"
						placeholder="Ingresa fecha"
						onChange={(e) => setDatos({ ...datos, fecha: e.target.value })}
						/>
					</div>

					<button className="btn btn-primary btn-sm me-2">Añadir <i className="bi bi-check-lg"></i></button>
					<Link to="/" className="btn btn-secondary btn-sm"><i className="bi bi-arrow-left"></i> Volver</Link>
				</form>
			</div>
		</div>
	);
}

export default CrearComentarios;