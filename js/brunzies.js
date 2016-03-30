var app = angular.module('brunzies', [
	'ui.router',
	'ngRoute',
	'bootstrapLightbox',
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

app.controller('GalleryCtrl', function($scope, Lightbox) {
	$scope.images = [
		{
			'url'				: '../img/gallery/bar400x300.jpg',
			'thumbUrl'	: '../img/gallery/bar400x300.jpg',
			'caption'		: 'This is a pictire'
		}
	];
	$scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});

// angular.bootstrap(document.getElementById('app-root'), ['brunzies'], {debugInfoEnabled: true});