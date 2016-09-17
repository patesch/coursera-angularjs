(function(ng) {
    'use strict';

    ng.module('ShoppingListCheckOff',[])
    .controller('ToBuyShoppingController',ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
    ;

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController (ShoppingListCheckOffService){
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyList();

        toBuy.bought = function(index){
            ShoppingListCheckOffService.buyItem(index);
        };

        toBuy.isEmpty = function() {
            return toBuy.items.length==0;
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getBoughtList();

        alreadyBought.isEmpty = function() {
            return alreadyBought.items.length==0;
        }
    }

    ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
        var toBuyList = [
                { name: "cookie", quantity: 10 },
                { name: "apple", quantity: 5 },
                { name: "peach", quantity: 8 },
                { name: "pineapple", quantity: 1 },
                { name: "pear", quantity: 3 }
            ],
            boughtList = [];

        var shoppingList = {
            buyItem: function (index) {
                var item = toBuyList.splice(index,1);
                boughtList.push(item[0]);
            },
            getToBuyList: function(){
                return toBuyList;
            },
            getBoughtList: function(){
                return boughtList;
            }
        };

        return shoppingList;
    }

})(angular);
