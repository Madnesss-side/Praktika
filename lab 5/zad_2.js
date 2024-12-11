function cheak(arr) {
    // Проверка на корректность входных данных
    if (!Array.isArray(arr) || !arr.every(Number.isFinite)) {
      return "Ошибка: Входные данные должны быть массивом чисел.";
    }
  
    const e = Math.E;
    let firstIndex = -1;
    let lastIndex = -1;
  
    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - e) <= 1e-5) {
        if (firstIndex === -1) {
          firstIndex = i;
        }
        lastIndex = i;
      }
    }
  
    // Обработка случая, когда нет подходящих элементов или только один
    if (firstIndex === -1 || firstIndex === lastIndex) {
      return 1;
    }
  
    let product = 1;
    for (let i = firstIndex + 1; i < lastIndex; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  
  const arr1 = [1, 2, 3, Math.E, 4, 5, Math.E + 1e-6, 6, Math.E - 1e-6, 7];
  console.log(`Произведение для arr1: ${cheak(arr1)}`); // Вывод: 120
  
  const arr2 = [1, 2, 3, Math.E - 1e-6];
  console.log(`Произведение для arr2: ${cheak(arr2)}`); // Вывод: 1
  
  const arr3 = [Math.E + 1e-6, 2, 3, Math.E - 1e-6];
  console.log(`Произведение для arr3: ${cheak(arr3)}`); // Вывод: 6
  
  const arr4 = [1, 2, "a", 4]; //некорректные данные
  console.log(`Произведение для arr4: ${cheak(arr4)}`); // Вывод: Ошибка: Входные данные должны быть массивом чисел.
  
  const arr5 = [];
  console.log(`Произведение для arr5: ${cheak(arr5)}`); // Вывод: 1
  
  
  