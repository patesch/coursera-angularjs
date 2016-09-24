(function(angular){
    'use strict';

    angular.module('NarrowItDownApp')
    .controller('NarrowItDownController',NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService','$rootScope'];
    function NarrowItDownController(MenuSearchService,$rootScope) {
        var narrow = this;

        narrow.searchTerm = '';
        narrow.found = [];
        narrow.message = '';

        narrow.narrowItDown = function() {
            $rootScope.$broadcast('narrow:processing', {on: true});
            MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function(data){
                narrow.found = data;
                // console.log('narrow.found: ',narrow.found);
                $rootScope.$broadcast('narrow:processing', {on: false});
                if (!narrow.found.length) {
                    narrow.message = "Nothing found";
                } else {
                    narrow.message = "";
                }
            });
        };

        narrow.removeItem = function(index){
            narrow.found.splice(index,1);
        };
    }
})(angular);
