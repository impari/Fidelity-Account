adminApp.controller('loginController',['$scope','$state',function($scope,$state){
    $scope.signIn = function(){
        $state.go('home');
    }
}]);