function getElementWidth(content, padding, border) {
    const contentWidht = Number.parseFloat(content);
    const paddingWidht = Number.parseFloat(padding);
    const borderWidht = Number.parseFloat(border);
    return contentWidht + paddingWidht * 2 + borderWidht * 2;
}

// Для перевірки роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200