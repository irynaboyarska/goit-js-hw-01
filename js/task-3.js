function getElementWidth(content, padding, border) {
    return content + padding * 2 + border * 2;
}

// Для перевірки роботи функції
console.log(getElementWidth(Number.parseFloat("50px"), Number.parseFloat("8px"), Number.parseFloat("4px"))); // 74
console.log(getElementWidth(Number.parseFloat("60px"), Number.parseFloat("12px"), Number.parseFloat("8.5px"))); // 101
console.log(getElementWidth(Number.parseFloat("200px"), Number.parseFloat("0px"), Number.parseFloat("0px"))); // 200