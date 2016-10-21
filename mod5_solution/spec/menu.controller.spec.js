// describe('MenuService service with mock service', function() {
//
//     var $controller;
//
//     beforeEach(function() {
//         module('restaurant');
//
//         module(function($provide) {
//             $provide.service('MenuServiceMock', function() {
//                 var service = this;
//             });
//         });
//
//     });
//
//     var SignUpController;
//     var menuItem;
//
//     beforeEach(function() {
//         inject(function(_$controller_, MenuServiceMock) {
//             $controller = _$controller_;
//
//             SignUpController = $controller('SignUpController', {
//                 MenuService: MenuServiceMock
//             });
//         });
//     });
//
//     it('should return information about the menu item selected',function(){
//
//     });
// });
//
//
// describe('MenuService service with real service', function() {
//
//     var $controller;
//
//     beforeEach(function() {
//         module('restaurant');
//
//
//     });
//
//     var SignUpController;
//     var menuItem;
//
//     beforeEach(function() {
//         inject(function(_$controller_, MenuService) {
//             $controller = _$controller_;
//
//             SignUpController = $controller('SignUpController', {
//                 MenuService: MenuService
//             });
//         });
//     });
//
//     it('should return information about the menu item selected',function(){
//
//     });
// });
