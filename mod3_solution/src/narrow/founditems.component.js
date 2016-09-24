(function(angular) {
    'use strict';

    angular.module('NarrowItDownApp')
    .component('foundItems', {
        templateUrl: 'src/narrow/founditems.template.html',
        controller: FoundItemsController,
        bindings: {
            foundItems: '<foundItems',
            onRemove: '&'
        }
    });

    FoundItemsController.$inject = [];
    function FoundItemsController () {
        var $ctrl = this;

        $ctrl.order = 'short_name';

        $ctrl.removeItem = function (myItem) {
            $ctrl.onRemove({ item : myItem });
        };

    }

})(angular);
