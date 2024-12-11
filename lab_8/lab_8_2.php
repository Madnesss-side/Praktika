<?php

function printCalendar($month = null, $year = null) {
    if ($month === null) $month = date('n');
    if ($year === null) $year = date('Y');

    $daysInMonth = cal_days_in_month(CAL_GREGORIAN, $month, $year);
    $firstDay = date('w', mktime(0, 0, 0, $month, 1, $year)); // 0 - воскресенье, 6 - суббота

    $holidays = getHolidays($year, $month); // Получение списка праздничных дней

    echo "<table border='1'>";
    echo "<tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th style='background-color:lightpink;'>Сб</th><th style='background-color:lightpink;'>Вс</th></tr>";

    $day = 1;
    echo "<tr>";
    for ($i = 0; $i < $firstDay; $i++) {
        echo "<td></td>";
    }

    for ($i = $firstDay; $i < 7; $i++) {
        $isHoliday = in_array($day, $holidays);
        $style = ($i == 5 || $i == 6 ? "style='background-color:lightpink;'" : "") . ($isHoliday ? "style='background-color:lightblue;'" : "");
        echo "<td " . $style . ">" . $day++ . "</td>";
        if ($day > $daysInMonth) break;
    }
    echo "</tr>";

    while ($day <= $daysInMonth) {
        echo "<tr>";
        for ($i = 0; $i < 7; $i++) {
            $isHoliday = in_array($day, $holidays);
            $style = ($i == 5 || $i == 6 ? "style='background-color:lightpink;'" : "") . ($isHoliday ? "style='background-color:lightblue;'" : "");
            if ($day <= $daysInMonth) {
                echo "<td " . $style . ">" . $day++ . "</td>";
            } else {
                echo "<td></td>";
            }
        }
        echo "</tr>";
    }
    echo "</table>";
}


// Функция для получения списка праздничных дней (расширьте для вашей страны/региона)
function getHolidays($year, $month) {
    $holidays = [];
    // Новый год
    if ($month == 1) {
        $holidays[] = 1; // 1 января
    }
    // Рождество (7 января)
    if ($month == 1) {
        $holidays[] = 7;
    }
    //Добавьте сюда другие праздники
    return $holidays;
}


printCalendar(12, 2024);
?>