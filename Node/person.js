// function Person(name, city){
//     this.name = name;
//     this.city =city;
//     this.getDetails = function(){
//         console.log("Welcome", this.name ,'from', this.city)
//         console.log ('Great day', this.name)
//     }
// }
// Person.prototype.greetMessage = function(message){console.log(message+this.name)}
// Person.prototype.mobile = 7978234756;
// console.log(Person.mobile)
// console.log(Person)
// module.exports=Person;

function Person(name, city){
    this.name = name;
    this.city = city;
    this.getDetails = function () {
        console.log("Welcome", this.name, "from", this.city);
    };
}
Person.prototype.mobile = 23031;
var per = new Person("Sachin", "Kolkata")
console.log(per)
console.log(per.mobile)
per.getDetails();
Person.prototype.GreetMessage = (user)=>
{
    console.log("Greet day", user);
}

per.GreetMessage("Rohan");