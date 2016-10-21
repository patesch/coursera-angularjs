// describe('UserService service with mock service', function() {
//
//     var $controller;
//
//     beforeEach(function() {
//         module('restaurant');
//
//         module(function($provide) {
//             $provide.service('UserServiceMock', function() {
//                 var service = this;
//             });
//         });
//     });
//
//     var SignUpController;
//     var userInfo;
//
//     beforeEach(function() {
//         inject(function(_$controller_, UserServiceMock) {
//             $controller = _$controller_;
//
//             SignUpController = $controller('SignUpController', {
//                 UserService: UserServiceMock
//             });
//         });
//     });
//
//     it('should save user\'s information',function(){
//
//     });
//
//     it('should return information about the registered user',function(){
//
//     });
//
// });
//
// describe('UserService service with real service', function() {
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
//     var userInfo;
//
//     beforeEach(function() {
//         inject(function(_$controller_, UserService) {
//             $controller = _$controller_;
//
//             SignUpController = $controller('SignUpController', {
//                 UserService: UserService
//             });
//         });
//     });
//
//     it('should save user\'s information',function(){
//
//     });
//
//     it('should return information about the registered user',function(){
//
//     });
//
// });
