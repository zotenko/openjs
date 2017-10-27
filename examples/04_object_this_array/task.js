
function getBiggerOne(digits) {
    return Math.max.apply(null, digits);
}

console.log(getBiggerOne([1, 2, 10, 101, 3, 4, 5]));