var student={
    name:'Raju',
    age:22,
    hobbies:['Sports','music'],
    address:{
        city:'Bangalore',
        state:'Karnataka'
    }
};
console.log(student);
console.log(student.name);
(student.address.city);
student.Id=20;
student.hasMobile=true
for (const key in student) {
  
        const element = student[key];
      console.log(key+" "+element);
         
    
}
var student1={
    name:'Raju',studid:20
};
console.log(student1.name);