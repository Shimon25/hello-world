/**
 * Created by Gran1 on 19.12.16.
 */

function Friend(fName, lName, country, age) {
    this.fName = fName;
    this.lName = lName;
    this.country = country;
    this.age = age;
}

var friends = [];
friends.push(new Friend("Barak", "Obama", "USA", 62));
friends.push(new Friend("Hillary", "Clinton", "USA", 70));
friends.push(new Friend("Donald", "Trump", "USA", 67));
friends.push(new Friend("Mary", "lePen", "France", 58));
friends.push(new Friend("Angella", "Merkel", "Germany", 66));

var mod = angular.module("friends", []);
mod.controller("friendsCntr", ["$scope", function ($scope) {
    $scope.friends = friends;
    $scope.fields = ["First name" , "Last Name" , "Country", "Age"];
}]);