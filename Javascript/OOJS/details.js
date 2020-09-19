function Student(name, city){
    this.name = name;
    this.city =city;
    this.getDetails = function(){
        console.log("Welcome", this.name ,'from', this.city)
        console.log ('Greet day', this.name)
    }
}

var stud = new Student("Raj", 'Ban')
    console.log(stud);

var stud1 = new Student('Rohan', 'Mysuru');
console.log(stud1)

stud.getDetails();

Student.prototype.id = 104310;
Student.prototype.greetMessage = ()=>{
     
}

stud.greetMessage();
