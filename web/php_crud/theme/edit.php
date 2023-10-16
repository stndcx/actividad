<?php
$id = $_GET['id'];
$coment = $app->get_coment_id($id);

$list = $app->get_coment();

if(isset($_POST['add'])){
	$titulo = $_POST['titulo'];
	$comentario = $_POST['comentario'];

	$app->update_coment($titulo, $comentario, $id);

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
<h5>Editar Comentario</h5>
<form method="post">
<div class="mb-3">
<label class="form-label">Titulo</label>
<input class="form-control" type="text" name="titulo" value="<?=$coment[0]['titulo'];?>" autocomplete="off">
</div>

<div class="mb-3">
<label class="form-label">Comentario</label>
<textarea class="form-control" name="comentario" rows="3"><?=$coment[0]['comentario'];?></textarea>
</div>

<button class="btn btn-primary" name="add">Editar</button>
</form>
</div>


</div>
</div>