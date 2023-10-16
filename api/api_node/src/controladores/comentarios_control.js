import { conexion } from "../db.js";

export const obtenComentarios= async(req, res)=>{
	try{
		const [rows] = await conexion.query("SELECT * FROM comentar");
		res.json(rows);
	} catch (error){
		return res.status(500).json({ message: "Ocurrio un error" });
	}
}

export const obtenComentario= async (req, res) => {
	try{
		const [rows] = await conexion.query("SELECT * FROM comentar WHERE id = ?", [req.params.id]);
		if(rows.length <= 0){
			return res.status(404).json({ message: 'Comentario no encontrado!'})
	}
	res.json(rows[0]);
	} catch (error){
		return res.status(500).json({ message: "Ocurrio un error" });
	}
}

export const creaComentario= async (req, res)=>{
	try{
		const {titulo, comentario, fecha}=req.body;
		const [rows] =await conexion.query("INSERT INTO comentar(titulo, comentario, fecha) VALUES(?, ?, ?)", [titulo, comentario, fecha])
		res.send({
			id: rows.insertId,
			titulo,
			comentario,
			fecha
		})
	} catch (error){
		return res.status(500).json({ message: "Ocurrio un error" });
	}   
}

export const actualizaComentario= async(req, res)=>{
	try{
		const { id } = req.params;
		const { titulo, comentario, fecha } = req.body;
		const [resultado] = await conexion.query("UPDATE comentar SET titulo =  IFNULL(?, titulo), comentario =  IFNULL(?, comentario), fecha = IFNULL(?, fecha)  WHERE id = ?",[titulo, comentario, fecha, id]);

		if (resultado.affectedRows === 0){
			return res.status(404).json({ message: "Comentario no encontrado" });
		}
		const [rows] = await conexion.query("SELECT * FROM comentar WHERE id = ?", [id]);
		res.json(rows[0]);
	} catch (error){
		return res.status(500).json({ message: "Ocurrio un error" });
	}
}

export const eliminaComentario= async(req, res)=>{
	try{
		const [rows] = await conexion.query("DELETE FROM comentar WHERE id = ?", [req.params.id])
		if(rows.affectedRows <= 0){
			return res.status(404).json({message: 'Comentario no encontrado'})
		}
		res.sendStatus(204)
	} catch (error){
		return res.status(500).json({ message: "Ocurrio un error" });
	}  
}


