<?php
// Обработка формы, если она была отправлена
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fio = $_POST["fio"];
    $login = $_POST["login"];
    $password = $_POST["password"];
    $birthdate = $_POST["birthdate"];

    // Базовая проверка на пустые поля
    if (empty($fio) || empty($login) || empty($password) || empty($birthdate)) {
        $error = "Все поля обязательны для заполнения!";
    } else {
        // Хеширование пароля (ОБЯЗАТЕЛЬНО в реальном приложении!)
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $message = "Регистрация успешна! (В реальном приложении данные сохранялись бы в БД. Это будет реализованно в курсовой работе)";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Регистрация</title>
</head>
<body>

<?php
if (isset($error)) {
    echo "<p style='color:red;'>$error</p>";
}
if (isset($message)) {
    echo "<p style='color:green;'>$message</p>";
}
?>

<form method="post">
  ФИО: <input type="text" name="fio"><br>
  Логин: <input type="text" name="login"><br>
  Пароль: <input type="password" name="password"><br>
  Дата рождения: <input type="date" name="birthdate"><br>
  <input type="submit" value="Зарегистрироваться">
</form>

</body>
</html>
