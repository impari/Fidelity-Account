
eventsModule.controller('registrationController', ['$scope', 'registrationService', function($scope, registrationService) {
		
	$scope.service = registrationService;
	$scope.modified = false;
	$scope.gridOptions = {
			columnDefs: [
					{ displayName: "#",  cellTemplate: '<span>{{row.rowIndex+1}}</span>'},
					{ field: "firstname", displayName: "Name"},
                    { field: "email", displayName: "Email" },
                    { field: "company", displayName: "Company"},
					{ displayName: "", cellTemplate: '<button >Check In/Out</button>' },
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
	
	$scope.create = function () {
		var item = {};
		registrationService.create(item);
		$scope.modified = !$scope.modified;
	}
	
}]);