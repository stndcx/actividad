import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ActualizarComentarios() {
	const url = "http://localhost:3000/api/comentarios";
	const { id } = useParams();
	const [datos, setDatos] = useState({
		titulo: "",
		comentario: "",
		fecha: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
			},
		};

		axios
		.get(`${url}/${id}`, config)
		.then((res) => setDatos(res.data))
		.catch((err) => console.error(err));
	}, []);

	const actualizarComentario = (e) => {
		e.preventDefault();
		const config = {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
			},
		};

		axios
		.patch(`${url}/${id}`, datos, config)
		.then((res) => navigate("/"))
		.catch((err) => console.error(err));
	};

	return (
		<div className="container py-5">
			<h3>Actualizar Comentario</h3>
			<div className="rounded shadow p-4">
				<form onSubmit={actualizarComentario}>
					<div className="mb-3">
						<label htmlFor="titulo">Titulo:</label>
						<input
						type="text"
						name="titulo"
						className="form-control"
						placeholder="Ingresa titulo"
						value={datos.titulo}
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
						value={datos.comentario}
						onChange={(e) =>
						setDatos({ ...datos, comentario: e.target.value })
						}
						></textarea>
					</div>

					<div className="mb-3">
						<label htmlFor="fecha">Fecha:</label>
						<input
						type="date"
						name="fecha"
						className="form-control"
						placeholder="Ingresa fecha"
						value={datos.fecha}
						onChange={(e) =>
						setDatos({ ...datos, fecha: e.target.value })
						}
						/>
					</div>

					<button className="btn btn-primary btn-sm me-2">Actualizar <i className="bi bi-check-lg"></i></button>
					<Link to="/" className="btn btn-secondary btn-sm"><i className="bi bi-arrow-left"></i> Volver</Link>
				</form>
			</div>
		</div>
	);
}

export default ActualizarComentarios;