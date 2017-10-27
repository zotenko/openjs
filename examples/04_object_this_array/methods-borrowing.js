

function makeMeASmoothie() {
    // arguments aren't array
    // it doesn't has .push method

    const ingredients = [].slice.call(arguments);

    // now we have a true array
    return ingredients.join('-') + ' smoothie';
}

console.log( makeMeASmoothie('strawberry', 'banana', 'kiwi') );