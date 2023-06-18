// //  Ques1. Create 2 objects - parent and child. Attach methods to parent and use 
// // those methods in child object using parents prototype

// // parent object
// const parent ={
//     name: "Parent",
//     age:50,
//     about:info,

// }
// // attaching method to parent
// function info(){
//     console.log(`${this.name} is ${this.age} years old`)
// }

// // children object
// const child={
//     name:"child",
//     age:21,

//     // Object.create(parent) it create a new object. 
//     // create a [[prototype]] which store the methods
//     // and properties of parent object in ChildAbout 
//     // as a value an empty {} 
//    childAbout: Object.create(parent), 
// }

// child.childAbout.about.call(child);


// without prototype

// console.log(child.childAbout.name);

// const parent={
//     display:function(){
//         console.log(`${this.name} and age is  ${this.age}`)
//     }
// }
// const child1= Object.create(parent);
// child1.name ='yash';
// child1.age= 21;
// child1.display();
// const child2= Object.create(parent);
// child2.name ='manav';
// child2.age= 19;
// child2.display();

// 2)Write code to explain prototype chaining

const collegeDekho = {
   trademark:"collegeDekho",

  };
  
  const prepBytes = {
    teachers:"shubham sir and lakshay sir",
    batche:"EAC-01"
  }
  
  Object.setPrototypeOf(prepBytes, collegeDekho);
   console.log(prepBytes.__proto__); // inherit the collegeDekho trademark inside proto object
   console.log(Object.__proto__.__proto__);// that proto obje has its own method and constructions
   console.log(Object.__proto__.__proto__.__proto__); // of that proto type has nothing its null


//  Ques3. Add a method to calculate sum of all elements in Array in array's 
// protype, use that method to calculate sum for multiple arrays

function sum(){
   return this.reduce((prev,current)=>prev+current);
}
const arr= Array();
Object.setPrototypeOf(arr,sum);

let arr1=[4,2,42,1];
let arr2=[24,1,2,1];
let arr3=[4,5,32,2];
let arr4=[9,8,2,1];

console.log(Object.getPrototypeOf(arr).call(arr1));
console.log(Object.getPrototypeOf(arr).call(arr2));
console.log(Object.getPrototypeOf(arr).call(arr3));
console.log(Object.getPrototypeOf(arr).call(arr4));

// const arrObj ={
//     arrFunc: function(arr){
//     const final=  arr.reduce((sum , i)=>{
//         // console.log(sum);
//         return sum+i;
//       },0)
//       return final;
//     }
// }
// console.log( arrObj.arrFunc([4,5,2,4]))

//  Ques4. Write a JavaScript function to retrieve all the names of object's
//  own and inherited properties.
 
const human={
    feature:"ability to think",
}
// person is an object which own fName , age and inherited feature propertie
const person={
    fName:"yash",
    age:21,
}
// inherited properties of human by seting the [[prototype]] or __proto__ of person 
Object.setPrototypeOf(person,human);
function retriveInfo(objs){
for(let obj in objs){
    console.log(obj);
}
}
retriveInfo(person); 



