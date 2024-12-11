<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "cinema_db";
$port = 5500;
echo "<table border='1'>";

for ($i = 0; $i <= 10; $i++) {
  echo "<tr>"; 

  for ($j = 0; $j <= 10; $j++) {
    echo "<td>" . ($i * $j) . "</td>"; // Вывод результата умножения в ячейке
  }

  echo "</tr>"; 
}

echo "</table>"; 
?>