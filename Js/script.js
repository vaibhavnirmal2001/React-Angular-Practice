// alert("Hello world");
// document.getElementById("h1").innerHTML="Vaibhav Nirmal";

// document.write("vaibhav nirmal in document.write")

// console.log("Hello world");



// let x= "Vaibhav";

// document.write("hii this is "+ `${x}`+ " and this is javaScript tutorial")





// let id =3434,pass=789;
// let answer = (id==3434 && pass==789)?"its correct": " wrong credientials";
// document.write(answer);



// nullish Pointer to avoide null or undefined
// let user;
// document.write(user ?? "guest user mode");




// for (let i = 0; i < 10; i++) {
//     document.write(i+ ' <br/>');
// }



// let age= prompt("enter your age: ");
// if(age < 18){
//     document.write("not allowed");
// }else{
//     document.write("you are allowed");
// }




// let response=confirm("are you shure want to delete ? ");

// if(response){
//     document.write("deleted");
// }else{
//     document.write("not deleted");
// }



// let ans=true;
// let num="seven";

// document.write(typeof String(ans));
// document.write(Number(ans));
// document.write(Number(num));


// let str="Vaibhav Nirmal";
// let str2=" welcome";

// // for(let i=0;i<str.length;i++){
// //     console.log(str[i]+" ");
// // }
// console.log(str+str2);




// let s= "Vaibhav";

// if(s.toLowerCase="vaibhav"){
//     console.log("true");
// }else{
//     console.log("Not equal");
// }



// Array in JS

// let arr=["math","science",6,3,"mixedarray"]
// console.log(arr);



// let arr=new Array("xbook","new book");
// arr.push(2)
// arr.sort();
// // arr.pop();
// console.log(arr);
// console.log(arr.indexOf(2));



//function with argument

// function multiplication(num){
//     for(let i=0;i<=10;i++){
//         document.write(`${num} x ${i} = ${num*i}`+" <br/>");
//     }
// }

// multiplication(5);



// let sum=0;
// function add(){
//     for (let i = 0; i < arguments.length; i++) {
//         sum+=arguments[i];
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5,6,7,8,9,0));




// Anonymous Function


// setTimeout(function(){
//     console.log("hii there");
// },4000);

// console.log("Immedietly invoked Function");






// Object

// let person={
//     firstName: 'vaibhav',
//     lastName: 'Nirmal'
// };

// console.log(person.firstName+  " "+ person.lastName);

// console.log(person['firstName']);
// person.age='22';

// console.log(person);

// delete person.lastName

// console.log(person);





// for in lopp

// for (let i in person) {
//     console.log( i+" : "+ person[i]);
// }







// this keyword

// let person={
//     firstName: 'vaibhav',
//     lastName: 'Nirmal',
//     sayHello (){
//         console.log("My name is "+ this.firstName+ " "+ this.lastName);
//     }
// };

// person.sayHello();





// console.log(Math.PI+"\n"+ Math.sqrt(9)
// +"\n"+ Math.pow(5,2));

// console.log(Math.min(4,3,2,6,7,8,9,0));
// console.log(Math.max(4,3,2,6,7,8,9,0));


//random number
// console.log(Math.floor(Math.random()*10));




// let x= new Date();
// console.log(x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear());

// // console.log(x.getHours()-12);
// console.log(x.getDay());




// let productData={
//     productName: "mobile",
//     productBrand: "OnePlus",
//     model: "Nord2T",
//     price: 30000
// }

// console.log(productData.productBrand.toUpperCase()+ " "+ productData.model+" : "+ productData.price);






// getter setter

// let userDetails={
//     userName: "Vaibhav Nirmal",
//     userMail: "vaibhavnirmal2001@gmail.com",
//     age: 21,
//     Degree: "B. Tech",
//     get getName(){
//         return this.userName.toUpperCase();
//     },
    
//     set setName( name){
//         this.userName=name.toUpperCase();
//     }
// }
// // console.log(userDetails)
// userDetails.setName="Pratibha Nirmal";
// console.log(userDetails.getName);





// obj contructor

// let student1={
//     firstName: "Vaibhav",
//     lastName: "Nirmal",
//     age: 21,
// }
// function student(firstName,lastName,age){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
// }

// let st1= new student("Pratibha","Nirmal",22);
// st1.nationality="Indian";
// console.log(student1);
// console.log(st1);




//hoisting : to left or pull
// i.e. we can call function before declairation or after declairation
// hello();

// function hello(){
//     console.log("hello world")
// }

// let x;
// x=7;
// console.log(x);





// DOM


// console.log(document.getElementById("h1"));




























