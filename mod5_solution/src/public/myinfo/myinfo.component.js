(function () {
    'use strict';

    angular.module('public')
    .component('myInfo', {
        templateUrl: "src/public/myinfo/myinfo.component.html",
        bindings: {
            info: '<'
        }
    });
})();
