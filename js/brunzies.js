var app = angular.module('brunzies', [
	'ui.router',
	'ui.bootstrap',
	'ngTouch',
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
    .state('menu-test', {
      url: "/menu-test",
      templateUrl: "partials/menu-test.html"
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
			'url'				: '../img/gallery/test.jpg',
			'thumbUrl'	: '../img/gallery/test.jpg',
			'caption'		: ''
		}

	];
	$scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});


angular.module('brunzies').config(function (LightboxProvider) {
	LightboxProvider.calculateImageDimensionLimits = function (dimensions) {
    return {
      'maxWidth': dimensions.windowWidth >= 768 ? // default
        dimensions.windowWidth - 92 :
        dimensions.windowWidth - 52,
      'maxHeight': 1200                           // custom
    };
  };
});





























// angular.bootstrap(document.getElementById('app-root'), ['brunzies'], {debugInfoEnabled: true});