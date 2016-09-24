(function(angular){
    'use strict';
    angular.module('loader')
    .component('itemsLoaderIndicator',{
        controller: LoaderController,
        templateUrl: 'src/loader/itemsloaderindicator.template.html'
    });

    LoaderController.$inject = ['$rootScope'];
    function LoaderController($rootScope) {
      var $ctrl = this;

      var cancelListener = $rootScope.$on('narrow:processing', function (event, data) {
        // console.log("Event: ", event);
        // console.log("Data: ", data);

        if (data.on) {
          $ctrl.showLoader = true;
        } else {
          $ctrl.showLoader = false;
        }
      });

      $ctrl.$onDestroy = function () {
        cancelListener();
      };
    }

})(angular);
