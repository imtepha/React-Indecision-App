//old way
/*const square = function (x) {
    return x * x;
}

//arrow function long
/*const squareArrow = (x) => {
    return x*x;
}*/

//arrow function shorthand put the val of return behind the => and finished
/*const squareArrow = (x) => x*x

console.log(square(8));
console.log(squareArrow(10));*/

//get first name using arrow function


const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Zacharias'));
console.log(getFirstName2('Erwin Smith'));


