(function() {
    'use strict';

    angular.module('public')
    .controller('MyInfoController',MyInfoController);

    MyInfoController.$inject = ['myInfo','ApiPath'];

    function MyInfoController(myInfo,ApiPath) {
        var $ctrl = this;
        $ctrl.isLoggedIn = !angular.equals({}, myInfo);
        $ctrl.myInfo = angular.extend({},myInfo);
        $ctrl.myInfo.basePath = ApiPath;
    }

})();
