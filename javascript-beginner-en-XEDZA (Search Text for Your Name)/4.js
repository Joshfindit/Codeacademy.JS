/*jshint multistr:true */

var text = "ewuihfq John awidjeiuh Josh yesterday we went shopping in roadrunnerville, john jacob Josh.";

var myName = "Josh";
var hits = [ ];


for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        console.log("Found!");
    }
}
