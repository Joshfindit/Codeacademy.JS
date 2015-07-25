// create a constructor for the StaffMember 
var StaffMember = function (name, discountPercent) {
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

//Create a StaffMember for yourself called me
var me = new StaffMember("Josh",20);
