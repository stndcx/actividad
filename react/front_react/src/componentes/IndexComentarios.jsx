import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexComentarios() {
	const [data, setData] = useState([]);
	const url = "http://localhost:3000/api/comentarios";

	useEffect(() => {

		const config = {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
			},
		};

		axios
		.get(`${url}`, config)
		.then(res => setData(res.data))
		.catch(err => console.error(err));
	}, []);

	const eliminarComentario = (id) => {
		const confirmar = window.confirm("¿Deseas eliminar este comentario?");

		const config = {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
			},
		};

		if (confirmar) {
			axios.delete(`${url}/${id}`, config)
			.then(() => location.reload())
			.catch(err => console.error(err));
		}
	};

	return (
		<div className="container py-5">
			<h3>Comentarios</h3>
			<div className="rounded shadow p-4">
				<div>
					<Link to="/crear" className="btn btn-primary btn-sm"><i className="bi bi-plus-circle"></i> Añadir Comentario</Link>
				</div>

				<ul className="list-group mt-4">
					{data.map((datos, i) => (
					<li key={i} className="list-group-item">
						<div className="d-flex justify-content-between align-items-center">
							<div>
								<h5 className="mb-1">{datos.titulo}</h5>
								<p className="mb-1">{datos.comentario}</p>
								<small>{datos.fecha}</small>
							</div>

							<div>
								<Link to={`/actualizar/${datos.id}`} className="btn btn-success btn-sm me-2"><i className="bi bi-pencil-square"></i></Link>
								<button onClick={e => eliminarComentario(datos.id)} className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
							</div>
						</div>
					</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default IndexComentarios;