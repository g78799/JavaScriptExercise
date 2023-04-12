//1
var person = {name : "keven", email:"keven@gmail.com"};

var {name, email} = person

console.log(name,email);

//2
var person = {name:"vcv AA", phone:"09-153-624-55"};
var { name: fullname, phone: mobil } = person;
console.log(fullname, mobil);

//3
var { name = "David", age = 35 } = { name: "Tom", age: 32 };
console.log(name, age);
//(1)左邊僅name會被右邊的洗掉
var { name = "David", age = 35 } = { name: "Tom" };
console.log(name, age);
//4.指定新的變數名稱及預設值
//指定新的變數名稱及預設值
//Assigning to new variable names and providing default values
var { name: myname = "Kevin Xi", sex: gender, phone: mobile } = { name: "Kevin", sex: true, phone: "0955-259881" }
console.log(myname, gender, mobile);