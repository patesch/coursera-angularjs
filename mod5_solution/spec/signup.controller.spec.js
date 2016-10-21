describe('Sign Up controller with $httpBackEnd request', function() {

    var $httpBackend;
    var ApiPath;
    var $controller;
    var SignUpController;
    var MenuService;
    var UserService;

    beforeEach(angular.mock.module('common'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
        MenuService = $injector.get('MenuService');
        UserService = $injector.get('UserService');
    }));

    it('should return an empty user\'s info object', function(){
        var result = UserService.getInfo();
        expect(result).toEqual({});
    });

    it('should save and return a filled user\'s info object', function(){
        var resObj = {
            "firstname": 'Johns',
            "lastname": "Hopkins",
            "email": "contact@jhu.com"
        };

        UserService.save(resObj);

        var result = UserService.getInfo();

        expect(result.firstname).toEqual("Johns");
        expect(result.lastname).toEqual("Hopkins");
        expect(result.email).toEqual("contact@jhu.com");

    });

    it('should validate if the favorite item exists in menu', function(){
        var short_name = 'A1';
        var url = ApiPath + '/menu_items/' + short_name + '.json';
        var resObj = {
            "id": 1,
            "short_name": "A1",
            "name": "Won Ton Soup with Chicken",
            "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions"
        };

        $httpBackend.whenGET(url).respond(resObj);
        MenuService.getMenuItem(short_name).then(function(data) {
            expect(data.name).toEqual("Won Ton Soup with Chicken");
            expect(data.description).toEqual("chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions");
        });
        $httpBackend.flush();
    });

});
