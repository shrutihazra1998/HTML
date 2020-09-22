var arr1=[12,34,5]
var arr2=[4,7,8]
var arr3=[...arr1,...arr2]
for(var i of arr3){console.log(i)}

var stud={name:"Riya",age:9}
var details={hobby:'Singing',city:'Kol'}
var newstud={...stud}
console.log(newstud)
for(var j in newstud){
console.log(j,newstud[j]);
}