
function getJoinedString() {
    return [].join.call(arguments, ' ');
}

console.log(getJoinedString('hello', 'my', 'name', 'is', 'John'));




