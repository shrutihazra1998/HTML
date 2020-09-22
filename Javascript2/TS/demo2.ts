declare var mes: string;
var message:any='hello world';
console.log(message);
mes='welcome';

function welcomeUser(fname:string, city:string='Mysore')
{
    console.log(`welcome,${fname}`)
    console.log(`Are you from ${city}`)
}
