<?php

$html = filter_input(INPUT_POST, "blob");
require 'vendor/autoload.php';
use Spatie\Browsershot\Browsershot;
Browsershot::html($html)->save('pagepdf.pdf');//permet de faire un pdf de la page
Browsershot::html($html)->fullPage()->save('screenshot.png'); //permet de faire un screen de la page entiere 

?>