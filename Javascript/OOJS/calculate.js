function calculate(x,y,z)
{
   return function()
    {
        return x+y+z;
    }();;
}
console.log(calculate(30,70,80));

function print(name,city)
{
    var show= function()
    {
        console.log(name+" "+city);
    }
    return show();
}
print('Priya','Ban')