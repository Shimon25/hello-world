/**
 * Created by Gran1 on 19.12.16.
 */

var mod = angular.module("invoice", []);

mod.controller("invoiceCntr", ["$scope", "$http", function ($scope,$http) {
    $scope.qty = 11;
    $scope.prc = 2.5;
    
    $scope.currList = {USD : 1,
        EUR : 0.96,
        CNY : 6.5,
        ILS : 3.82};
    $scope.c = "USD";

    //noinspection JSUnresolvedVariable
    $http.get("http://api.fixer.io/latest").then(function (res) {
        console.log(res);
    });

    $scope.total = function (k) {
        return $scope.qty*$scope.prc/$scope.currList[$scope.c]*$scope.currList[k];
    }
}]);
