var friends = new Object();

friends.bill = {
    firstName: "Bill",
    lastName: "Franks",
    number: 53,
    address: [ '2601 Mission St #5TH', 'San Francisco', 'CA', '94110' ],
}

friends.steve = {
    firstName: "Steve",
    lastName: "Guttenburg",
    number: 8,
    address: [ '8942 Wilshire Blvd', 'Beverly Hills', 'CA', '90211' ],
}


var list = function (friends) {
    for (var key in friends) {
        console.log("Friend: ", friends[key]);
    }
}

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName.toUpperCase() === name.toUpperCase()) {
            //console.log(friends[key]);
            return friends[key];
        }
    }
}

list(friends);
console.log("Search: ", search("steve"));
