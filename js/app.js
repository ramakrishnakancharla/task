var app = angular.module("TaskApp", ['zingchart-angularjs']);
app.controller("TaskController", function ($scope,$rootScope,$http,$timeout) {

	$http({ method: 'POST', url: 'JsonExamFile1.json' }).success(function (data) {
		$scope.users = data; // response data
	}).
	error(function (data) {
		console.log(data);
	});
	var tot=0;
	$http({ method: 'POST', url: 'JsonExamFile2.json' }).success(function (data) {
		$scope.users2 = data; // response data 
	}).
	error(function (data) {
		console.log(data);
	});

	$timeout(function() {
		$scope.newArray = $scope.users.map(function(item){
			item.total = $scope.users2.reduce(function(pre, obj){
				if(item.ProgramID == obj.ProgramID)
				return pre +=obj.Sales
				else 
				return pre			
			},0)
			return item		
		})	
	}, 1000);
});