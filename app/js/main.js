(function () {
    'use strict';
    require('angular');
    require('angular-route');
    require('angular-animate');

    var mainController = require('./controllers/homeController');
    var userController = require('./controllers/userController');
    var services = require('./services/services');

    angular.module('SampleApp', ['ngRoute', 'ngAnimate'])
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
//            $locationProvider.html5Mode({
//                enabled: true,
//                requireBase: false
//            });
            $routeProvider
                .when("/", {
                    templateUrl: "./partials/home.html",
                    controller: "MainController"
                })
                .when('/users', {
                    templateUrl: './partials/users.html',
                    controller: 'userController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
        ])
        .service('services',['$http', '$q', services])
        .controller('MainController', ['$scope', mainController])
        .controller('userController', ['$scope', 'services', userController]);
}());