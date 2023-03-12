let array1 = [];
let array2 = new Array();
let array3 = new Array(10);

let Computer = ["CPU","DRAM","SSD","Mouse"];

console.log(Computer);

console.log(Computer instanceof Array);
console.log(Array.isArray(Computer));

AddThead(Computer);
AddThead("kevin");


function AddThead(titleArray){
    if(!Array.isArray(titleArray)){
        return;
    }
 
    //todo:....
}

let Cars = ['BMW','Benz','Audi','Lexus'];

for(var i=0; i<Cars.length; i++){
    console.log(Cars[i]);
}

Cars.forEach(function(item, index){
    //console.log(index,item);
    console.log(`${index}.${item}`);
});

Cars.forEach((item,index)=>{
    console.log(`${indeex}.${item}`);
});

//item及index參數名稱也能改成與一較為清晰的英語

Cars((car,ids)=>{
    console.log(`${ids}.${car}`);
});

let friends=[];

let person1 = {
    id:1,
    name:"kevin",
    email:"kevoin@gmail.com"
};

let person2 = {
    id:2,
    name:"may",
    email:"mayn@gmail.com"
};

friends,push(person1);
friends,push(person2);
friends,push(person1, person2);

let person3 = {
    id:3,
    name:"jojo",
    email:"jojo@gmail.com"
};

friends.unshift(person3);
friends.forEach((item,index)=>{
    console.log(item,index)

});