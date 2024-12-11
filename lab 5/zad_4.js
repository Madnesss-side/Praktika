function normalize(inputString) {
    // Удаляем лишние пробелы и пробелы в начале и конце строки
    return inputString.trim().replace(/\s+/g, ' ');
}

// Пример использования
const inputStr = "  Это  пример   строки  с   лишними   пробелами.   ";
const normalizedStr = normalize(inputStr);

console.log("Исходная строка:", `"${inputStr}"`);
console.log("Нормализованная строка:", `"${normalizedStr}"`);
