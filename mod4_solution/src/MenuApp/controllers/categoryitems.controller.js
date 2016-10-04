(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  // Version with resolving to 1 item based on $stateParams in route config
  CategoryItemsController.$inject = ['$stateParams', 'MenuDataService'];
  function CategoryItemsController($stateParams, MenuDataService) {
    var categoryItems = this,
        short_name = $stateParams.short_name;

    categoryItems.category_name = $stateParams.category_name;

    MenuDataService.getItemsForCategory(short_name)
    .then(function(response){
      categoryItems.items = response.data.menu_items;
    });
  }

})();
