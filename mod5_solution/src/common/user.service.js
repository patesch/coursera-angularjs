(function () {
    'use strict';

    angular.module('common')
    .service('UserService',UserService);

    function UserService(){
        var user = this;

        user.info = {};

        user.save = function(info){
            user.info = info;
        };

        user.getInfo = function(){
            return user.info;
        };
    }

})();
