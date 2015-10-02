
eventsModule.controller('eventListController', ['$scope', 'eventListService', function($scope, eventListService) {
		
	$scope.service = eventListService;
	$scope.modified = false;
	$scope.gridOptions = {
			columnDefs: [
					{ displayName: "#",  cellTemplate: '<a href="#/eventslist/1/details">{{row.rowIndex+1}}</a>'},
					{ field: "name", displayName: "Name"},
                    { field: "contact", displayName: "Contact" },
                    { field: "date", displayName: "Date"},
					{ displayName: "", cellTemplate: '<button >Edit</button>' },
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
		var event = {};
		eventListService.create(event);
		$scope.modified = !$scope.modified;
	}
	
}]);