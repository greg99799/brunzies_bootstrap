angular.module('brunzies', [
	'ui.router'
])

.run(function($rootScope, $state) {
	$rootScope.$state = $state;
})

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
    .state('index', {
      url: "/",
      templateUrl: "partials/index.html"
    })
    .state('photos', {
      url: "/photos",
      templateUrl: "partials/photos.html"
    })
    .state('menu', {
      url: "/menu",
      templateUrl: "partials/menu.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "partials/contact.html"
    })
  ;

})