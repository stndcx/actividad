<?php

if($_SERVER['SERVER_NAME'] == 'localhost'){
	define("DB_HOST", $data['db']['host']);
	define("DB_USER", $data['db']['user']);
	define("DB_PASS", $data['db']['password']);
	define("DB_NAME", $data['db']['dbname']);
} else{
	define("DB_HOST", "");
	define("DB_USER", "");
	define("DB_PASS", "");
	define("DB_NAME", "");
}

// Decimal and thousand delimiters Ex. 24.1989,00
define("SPD", ".");
define("SPM", ",");
define("SMONEY", "$");

?>