<?php

function validate_simple($data, $value, string $ress_ok, string $ress_ko){
	if($data == $value){
		echo $ress_ok;
	} else{
		echo $ress_ko;
	}

	return;
}

function permissions($data){
	$ex = explode(",", $data);
	$permission = '';
	foreach ($ex as $permiss){
		$permission .= '<span class="text-uppercase small-65 badge-bg-purple-color px-2">'.trim($permiss).'</span> ';
	}
	$permission = rtrim($permission, ', ');

	return $permission;
}

function dep($data){
	$format  = print_r('<pre>');
	$format .= print_r($data);
	$format .= print_r('</pre>');
	return $format;
}

function headerapp(){
	$html_header = "html/header.php";
	require_once($html_header);
}

function footerapp(){
	$html_footer = "html/footer.php";
	require_once($html_footer);
}

function logs(){
	ini_set('display_startup_errors', 1);
	ini_set('display_errors', 1);
	error_reporting(-1);
}

function months($months){
	switch($months){
		case '01':
			$months = 'Enero';
			break;
		case '02':
			$months = 'Febrero';
			break;
		case '03':
			$months = 'Marzo';
			break;
		case '04':
			$months = 'Abril';
			break;
		case '05':
			$months = 'Mayo';
			break;
		case '06':
			$months = 'Junio';
			break;
		case '07':
			$months = 'Julio';
			break;
		case '08':
			$months = 'Agosto';
			break;
		case '09':
			$months = 'Septiembre';
			break;
		case '10':
			$months = 'Octubre';
			break;
		case '11':
			$months = 'Noviembre';
			break;
		case '12':
			$months = 'Diciembre';
			break;
	}

	return $months;
}

function menu($permission){
	if($permission == 1){
		include 'html/nav.php';
	} if($permission == 2){
		include 'html/nav.php';
	} if($permission == 3){
		include 'html/nav-admin.php';
	} if($permission == 4){
		include 'html/nav.php';
	} if($permission == 5){
		include 'html/super-nav.php';
	}
	return;
}

function format_money($money){
	$money = number_format($money,2,SPM,SPD);
	return $money;
}

?>