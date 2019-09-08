// ES6 Cheatseet

// ============== DESTRUCTURING ==============
var foo = {
    bar: 10,
    baz: 20
};

// instead of going
// var bar = foo.bar;
// var baz = foo.baz;

// you can use
var { bar, baz } = foo;


// It Works with aray also 
var products = ['book', 'pen', 'eraser', 'pencil'];
var [ prod1, prod2, prod3, prod4 ] = products;
// print the result
// console.log(prod1, prod2, prod3, prod4)


// Another example of destructuring
function calculateBmi({ height, weight, max, callback }){
    var bmi = weight / Math.pow(height);
    if ( bmi > max ) {
        console.log("Overweight");
    }

    if ( callback ) {
        callback(bmi);
    }

}

// // You can now assign an unique parameter using the key
// calculateBmi({ weight, height, max: 23 });
// calculateBmi({ weight, height, callback: funcion() {} });



// ======== CREATE OBJECT FROM VARIABLES ========
var foo = 2;
var obj = {
    bar: 1,
    foo,
};



// =========== TEMPLATE STRING ===========

var message = 'Welcome';
var name = 'rief';

greet = `${message}, ${name}, How are you?`;
console.log(greet);