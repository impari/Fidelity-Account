eventsModule.controller('confirmDialogController', ['$scope', '$modalInstance', 'title', 'msg', 
			function($scope, $modalInstance, title, msg) {
				$scope.title = title;
				$scope.msg = msg;
				$scope.okbutton = "Yes";
				$scope.cancelbutton = "No";		
				$scope.ok = function () {
					$modalInstance.close();
				};
				$scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				};

}]);

