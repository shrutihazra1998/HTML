function sumof(...array:number[]) 
{     
    var sum= 0;    
    array.forEach(i => { sum+=i;});
        console.log("sum of the numbers",sum) 
 } 
 sumof(1,2,3) 
 sumof(10,10,10,10,10)