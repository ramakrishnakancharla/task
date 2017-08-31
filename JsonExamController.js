'use strict';
    var app = angular.module('TaskApp', ['ngRoute']);   

    app.controller('TaskController', function($scope, $http) {
	debugger;
        $http({ method: 'POST', url: 'JsonExamFile1.json' }).success(function (data) {
            console.log('hello');
            $scope.Taskmarks = data; // response data 
        }).
        error(function (data) {
            console.log(data);
        });
    });

