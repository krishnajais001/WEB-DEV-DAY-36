// function genrator
// function rectangle(name,age){
//     let student = {
//         studentName:name,
//         studentAge:age,
//         Course:`B.tech`
//     };
//     return student;
// }

// console.log(`Just Cheking`);

// console.log(rectangle(`Krishna`,20));
// console.log(rectangle(`Aman`,21));
// console.log(rectangle(`Mayank`,21));

// primitive pass by copy
// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// object pass by copy address
let b ={ value:10};
function inc(a){
    b.value++;
}
inc(b);
console.log(b);
