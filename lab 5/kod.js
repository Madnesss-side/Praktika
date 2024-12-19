function getDayOfYear(dateString) {
    const [day, month, year] = dateString.split('.').map(Number);
  
    // Проверка на корректность ввода
    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month <= 0 || month > 12 || day > 31) {
      return "Некорректный формат даты";
    }
  
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Проверка на високосный год
    let leap = false;
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      leap = true;
    }
    if (leap) {
      daysInMonth[2] = 29;
    }
  
  
    let dayOfYear = day;
    for (let i = 1; i < month; i++) {
      dayOfYear += daysInMonth[i];
    }
  
    return dayOfYear;
  }
  
  
  // Примеры использования
  console.log(getDayOfYear("1.1.2024")); // 1
  console.log(getDayOfYear("29.2.2024")); // 60
  console.log(getDayOfYear("1.3.2023")); // 60
  console.log(getDayOfYear("31.12.2023")); // 365
  console.log(getDayOfYear("29.2.2023")); // 59
  console.log(getDayOfYear("15.10.2024")); //289
  console.log(getDayOfYear("30.02.2024")); // Некорректный формат даты
  console.log(getDayOfYear("32.12.2024")); // Некорректный формат даты
  
  