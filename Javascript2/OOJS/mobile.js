
      var mobile=
      {
          name:"Sony Xperia 5",
          brand:"Sony",
          price:20000,
      }
  var mobile1={
          name:"Readmi 8A",
          brand:"Xiaomi",
          price:30000,
      }
      
  var print = function(){
      console.log('Name' +this.name);
      console.log('Brand'+this.brand);
  
  }
  var discountPrice = function(per){
      console.log('Discount price is' +this.price*per);
  }
  var addAccess = function(acc1, acc2){
      console.log('Acc'+acc1+","+acc2);
  }
  print.call(mobile)
  discountPrice.call(mobile,10);
  addAccess.call(mobile, 'earphone','charge');
  
  print.call(mobile1)
  discountPrice.call(mobile1,10);
  addAccess.call(mobile1, 'bluetooth','charge');
        