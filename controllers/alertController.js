
eventsModule.controller('alertController', ['$scope', 'alertService', function($scope, alertService) {
	$scope.name = "";
	$scope.description = "";

	$scope.service = alertService;
	$scope.modified = false;
	
	$scope.gridOptions = {
			columnDefs: [
					
					{ displayName: " # ",  cellTemplate: '<div style="text-align:center">'+
											'{{(pagingOptions.currentPage-1) *pagingOptions.pageSize +(row.rowIndex +1)}}</div>', width:'50px'},
					{ field: "name", displayName: "Name"},
                    { field: "description", displayName: "Description" },
                    { field: "date", displayName: "Date"},
					{ displayName: "", cellTemplate: '<button ng-click="editItem()">Edit</button>' },
                    { displayName: "",cellTemplate: '<button type="button" class="btn btn-default" aria-label="Left Align" ng-click="remove()">'+
														'<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'+
													'</button' }
					],
			afterSelectionChange : function (rowItem, event) {
				if(rowItem.selected){
					console.log(rowItem);
				}
			}
		};
	$scope.createAlert = function() {
		var alert = {
			name: $scope.name,
			description : $scope.description
		}
		alertService.createAlert(alert);
		$scope.modified = !$scope.modified;
	}	
}]);