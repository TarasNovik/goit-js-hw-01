function getElementWidth(content, padding, border) {
    const boxSize = Number.parseInt(content) + (2 * Number.parseInt(padding)) + (2 * Number.parseInt(border));
    return (boxSize);

}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
