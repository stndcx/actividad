<?php

/*
* CodeSkate
* Author: STNDC
* Version: 2.0
* Blog: https://stndc.tumblr.com
*/

$json_data = file_get_contents('data.json');
$data = json_decode($json_data, true);

require 'helpers/config.php';
require 'helpers/functions.php';
require 'class/connect.php';
require 'class/main.php';

$app = new Main();

headerapp();

if(isset($_GET['page']) && $_GET['page']){
	
	$file = 'theme/'.$_GET['page'].'.php';
	if(file_exists($file)){
		include 'theme/'.$_GET['page'].'.php';
	} else{
		include 'theme/error.php';
	}
} else{
	include 'theme/home.php';
}


footerapp();

?>