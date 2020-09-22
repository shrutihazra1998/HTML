function Vehicle
    (name,brand,price){
        this.name = name; 
        this.brand=brand;
        this.price=price;
        this.discount=function(percent) 
        {
            var dis= this.price*percent/100;
            this.price=this.price-dis
        }
    }
    Vehicle.prototype.hasAccessories=true;
    Vehicle.prototype.showAccessories= function ()
    {
        console.log('AC','console','musicsys');
        
    }