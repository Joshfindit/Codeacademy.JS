var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, amount) {
        switch (item) {
        case "eggs": this.add(0.98 *amount); break;
        case "milk": this.add(1.23 *amount); break;
        case "magazine": this.add(4.99 *amount); break;
        case "chocolate": this.add(0.45 *amount); break;
        }
        
    }
};

// scan each item 4 times
cashRegister.scan("eggs", 4);
cashRegister.scan("milk", 4);
cashRegister.scan("magazine", 4);
cashRegister.scan("chocolate", 4);


//Show the total bill
console.log('Your bill is '+cashRegister.total);
