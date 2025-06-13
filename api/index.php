<?php
header('Content-Type: application/json');

$apiKey = '05458cf40aa30c36be72aafe9d35d95e'; // اینو با کلید خودت عوض کن
$type = $_GET['type'] ?? 'movie';
$media = $_GET['media'] ?? 'trending';
$time = $_GET['time'] ?? 'day';

$url = "https://api.themoviedb.org/3/{$media}/{$type}/{$time}?api_key={$apiKey}";

$response = file_get_contents($url);
echo $response;
