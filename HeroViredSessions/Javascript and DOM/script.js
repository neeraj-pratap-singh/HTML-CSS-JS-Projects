// var a =undefined; //global scope;

// Js engine  : Global object : will consist some of the by default methods of javascript.
//browser : global object : window object


// console.log(a)
// var a= 12;
// console.log(a)
//memory allocation phase : (hoisting) and excution phase
//HOisting : moving all the variable and function to the top of their global scope.

// var has a functional scope;

// Let : ES6 variant of Javascript
// console.log(a)

// // Temporal dead zone :TDZ 
// let a =10;
// console.log(a)
// let has block scope ;

//var : allows us to redeclar and reintialize;
//let : it does not allow redeclaration and allows reintialization;
// var a =10

// {
//     let b =20
//     console.log("value of let:",b);
//     var a =12;
// }
// console.log("value of var a :",a)
// // console.log("value of let a :",b)
// var a =20;
// console.log("value of var",a);
// let a =20;
// console.log("value of let",a);
// a =30;
// console.log("value ",a);


//const does not allow to redeclare and also reintialize.
// const a =10;

// a =12;
// console.log(a)

// const a =[1,2,3,4,5]
// console.log(a)



// functions
// functions in js , they are termed as first class citizens or first-class objects.

//in js functions can be stored in variable ,or they can be passed to another
// function as a argument ,or they can be returned from a function.

// Named function
function fun(){
    //logic
}
fun();

//Anonymous function;
//functional expression;
let a=function(){
//logic space
}
a();

//Arrow function :ES6 variant of Javascript
//functional expression;
let b =(a,b)=>{
//logic space
}
b(1,2);

// IIFE :immediately innvoked functional expression
(
    (a,b)=>{
        //logic
        //API 
    }
)(1,2)