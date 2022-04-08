// this makes the angular js module
const minesweeperModule = angular.module('minesweeperApp', []);

// this is the controller for that module 
const minesweeperController = function($scope) {
    $scope.test = "Everything is just fine."
}

// this is how we link the module to the controller
minesweeperModule.controller("minsweeperController", minesweeperController)