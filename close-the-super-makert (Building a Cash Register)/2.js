var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};

var eggs = 0.98;
var milk = 1.23;
var magazine = 4.99;
var chocolate = 0.45;

//call the add method for our items
cashRegister.add( eggs );
cashRegister.add( milk );
cashRegister.add( magazine );
cashRegister.add( chocolate );

//Show the total bill
console.log('Your bill is '+cashRegister.total);
