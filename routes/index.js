/*jslint node:true*/

var dishes = require('./dishes.js');

// Render the Home page
exports.home = function(req, res) {
    res.render('home');
};


// Render the Contact Us page
exports.contact = function(req, res) {
    res.render('contact');
};



// Render menu item page based on item id
exports.getDishById = function(req, res) {

  var dishId = req.params.id;
  var allDishes = dishes.getDishes();
  var dish = "null";
  
  
  for (var i=0, iLen=allDishes.length; i<iLen; i++) {
        if (allDishes[i].objectId === dishId) {
            dish = allDishes[i];
             break;
        }
   }
   res.render('menu-item', {
        item : dish
    });
};




/*
 * REST API CALLS*
 *
 * */
 
// All dishes on the menu
exports.getDishesAPI = function(req, res) {
   res.json(dishes.getDishes());
};

// Return a dish identified by its ID
exports.getMenuItemAPI = function(req, res) {
    
  var dishId = req.params.id;
  var allDishes = dishes.getDishes();
  var dish = "null";
  
  
  for (var i=0, iLen=allDishes.length; i<iLen; i++) {
        if (allDishes[i].objectId === dishId) {
            dish = allDishes[i];
             break;
        }
   }
   res.json(dish);
};



