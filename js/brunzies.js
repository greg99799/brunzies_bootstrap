var app = angular.module('brunzies', [
	'ui.router'
])

app.run(function($rootScope, $state) {
	$rootScope.$state = $state;
})

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html"
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