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
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/bottles1.jpg',
			'thumbUrl'	: '../img/gallery/bottles1.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/kris-ben.jpg',
			'thumbUrl'	: '../img/gallery/kris-ben.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/stools.jpg',
			'thumbUrl'	: '../img/gallery/stools.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/ackerman.jpg',
			'thumbUrl'	: '../img/gallery/ackerman.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/brunzies-people.jpg',
			'thumbUrl'	: '../img/gallery/brunzies-people.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/table.jpg',
			'thumbUrl'	: '../img/gallery/table.jpg',
			'caption'		: ''
		},
		{
			'url'				: '../img/gallery/beer_81015.jpg',
			'thumbUrl'	: '../img/gallery/beer_81015.jpg',
			'caption'		: ''
		}

	];
	$scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});

// angular.bootstrap(document.getElementById('app-root'), ['brunzies'], {debugInfoEnabled: true});