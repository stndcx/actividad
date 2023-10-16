<?php
$list = $app->get_coment();

if(isset($_POST['add'])){
	$titulo = $_POST['titulo'];
	$comentario = $_POST['comentario'];
	$fecha = date('Y-m-d');

	$app->new_coment($titulo, $comentario, $fecha);

	header("Location: ./");
}

?>

<div class="container py-5">
<h5>Comentarios</h5>

<div class="row">
<div class="col-md-8">
<?php
foreach($list as $row){
	echo $row['titulo'].'<br>';
	echo $row['comentario'].'<br>';
	echo '<a href="./?page=edit&id='.$row['id'].'">Editar</a> ';
	echo '<a href="./?page=delete&id='.$row['id'].'">Borrar</a><br>';
	echo '<hr>';
}
?>
</div>

<div class="col-md-4">
<h5>Nuevo Comentario</h5>
<form method="post">
<div class="mb-3">
<label class="form-label">Titulo</label>
<input class="form-control" type="text" name="titulo" autocomplete="off" required>
</div>

<div class="mb-3">
<label class="form-label">Comentario</label>
<textarea class="form-control" name="comentario" rows="3" required></textarea>
</div>

<button class="btn btn-primary" name="add">Comentar</button>
</form>
</div>


</div>
</div>