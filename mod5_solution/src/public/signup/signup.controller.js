(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService','UserService'];

    function SignUpController(MenuService,UserService) {
        var $ctrl = this;

        $ctrl.checkExist = function () {
            var short_name = $ctrl.form.dish;
            if (short_name && short_name.trim()) {
                $ctrl.menuItem = MenuService.getMenuItem(short_name).then(function(menuItem){
                    $ctrl.form.menuItem = menuItem;
                    $ctrl.exists = true;
                    $ctrl.message = '';
                }).catch(function(error){
                    $ctrl.exists = false;
                    $ctrl.message = 'No such menu number exists';
                });
            }
        };

        $ctrl.submit = function () {
            UserService.save($ctrl.form);
            $ctrl.message = 'Your information has been saved';
        }
    }

})();
