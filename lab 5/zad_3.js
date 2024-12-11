function GP(n) {
    // Преобразование числа в строку для работы с цифрами
    const s = n.toString();
    if (s.length < 2) return false; // Число должно иметь хотя бы две цифры
  
    const digits = s.split('').map(Number);
    const ratio = digits[1] / digits[0];
  
    // Проверка на возрастающую геометрическую прогрессию
    for (let i = 2; i < digits.length; i++) {
      if (digits[i] / digits[i - 1] !== ratio) return false;
    }
  
    return true;
  }
  
  
  function remove(arr) {
    // Проверка на корректность входных данных
    if (!Array.isArray(arr)) {
      return "Ошибка: Входные данные должны быть массивом.";
    }
  
    return arr.filter(num => {
      const integerPart = Math.trunc(num); //Целая часть числа
      const absIntegerPart = Math.abs(integerPart); //Модуль целой части
  
      return !GP(absIntegerPart); //Возвращаем true, если не является геометрической прогрессией
    });
  }
  
  const arr11 = [123, 456, 789, 12, 10, 24, -12, -24, 121, -121, 1234567, -1234567, 248, 1, 11, 111, 1111];
  const filteredArr1 = remove(arr1);
  console.log("Исходный массив:", arr1);
  console.log("Отфильтрованный массив:", filteredArr1);
  
  
  
  const arr22 = [1, 2, 3, 4, 5, 6, 12, 24, 48, 96];
  const filteredArr2 = remove(arr2);
  console.log("Исходный массив:", arr2);
  console.log("Отфильтрованный массив:", filteredArr2);
  
  
  const arr33 = "не массив"; // Некорректные входные данные
  console.log(remove(arr3)); // Вывод: Ошибка: Входные данные должны быть массивом.
  
  const arr44 = [1,2,3,4, 12,1212];
  const filteredArr4 = remove(arr4);
  console.log("Исходный массив:", arr4);
  console.log("Отфильтрованный массив:", filteredArr4);
  
  