(function(angular){
    'use strict';

    angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService );

    MenuSearchService.$inject = ['$http','$q','$timeout','ApiBasePath'];
    function MenuSearchService ($http,$q,$timeout,ApiBasePath) {
        var service = this,
            itemList = [],
            found = [];

        service.getMatchedMenuItems = function(searchTerm) {
            if ( ! itemList.length ) {
                console.log('getMatchedMenuItems:itemList => list needs to be loaded');
                return getItemsOnRemote().then(function(){
                    return searchItems(searchTerm);
                });
            } else {
                console.log('getMatchedMenuItems:itemList => list already loaded');
                return searchItems(searchTerm);
            }
        }

        function searchItems(searchTerm) {
            var found = [],
                defered = $q.defer();
            // search straightforward in the local list
            searchTerm = searchTerm.trim().toLowerCase();
            $timeout(function(){
                for (var i = 0; i < itemList.length; i++) {
                    if (angular.isDefined(itemList[i].description) && itemList[i].description.toLowerCase().indexOf(searchTerm)!=-1) {
                        found.push(itemList[i]);
                    }
                }
                defered.resolve(found);
            },700);
            return defered.promise;
        }

        function getItemsOnRemote() {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {
                itemList = response.data.menu_items;
                return itemList;
            }).catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        }
    }

})(angular);
