// app.js
//use 'strict';

var adminApp=angular.module('adminApp', ['ui.router','ui.bootstrap','ngGrid','events'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider  	
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
			controller: 'loginController'
        })
	.state('home', {
            url: '/home',
            templateUrl: 'views/home.html', 
			controller: 'homeController'			
        })
	.state('eventsList', {
            url: '/eventslist',
            templateUrl: 'views/events-list.html',
			controller: 'eventListController'   
        })
	.state('event-subElem', {
            url: '/eventslist/:id',
            templateUrl: 'views/event-subElements.html',    
        })
	.state('event-subElem.event-details', {
	    url: '/details',
	    templateUrl: 'views/event-details.html',    
	})
	.state('event-subElem.event-registrations', {
	    url: '/registrations',
	    templateUrl: 'views/event-registrations.html', 
		controller: 'registrationController'
	})
	.state('event-subElem.event-handouts', {
	    url: '/handouts',
	    templateUrl: 'views/event-handouts.html',    
	})
	.state('event-subElem.event-alerts', {
	    url: '/alerts',
	    templateUrl: 'views/event-alerts.html',
	    controller:'alertController'
	})
	.state('event-subElem.event-pollQues', {
	    url: '/pollQuestions',
	    templateUrl: 'views/event-pollQuestions.html',    
	})
	.state('event-subElem.event-userSubQues', {
	    url: '/submittedQuestions',
	    templateUrl: 'views/event-submittedQuestions.html',    
	})
}]);