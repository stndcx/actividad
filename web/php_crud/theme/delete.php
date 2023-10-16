<?php
$id = $_GET['id'];
$app->delete($id);
header('Location: ./');
?>