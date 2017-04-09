var getDishes = require("../routes/dishes");
var assert = require("assert");
describe("getDishes", function(){

it("getDishes should return an array with 4 items", function(){

 var dishes = getDishes.getDishes();
 assert(Array.isArray(dishes));
 assert(dishes.length === 4, "dishes array length is not 4");

});

it("dishes category should be in (Salad,Seafood, Meat, Dessert)", function(){
    var category = ["Salad", "Seafood", "Meat","Dessert" ];
    var dishes = getDishes.getDishes();
    for (var i=0; i < dishes.length; i++){
        assert(category.indexOf(dishes[i].category) > -1, "dish is not in correct category");
    }

});

});