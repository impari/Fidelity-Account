
eventsModule.factory('alertService', ['$http', function($http) {
	var alerts = alertItems;
	
	var getItems = function (){
		return alerts;
	};
	
	var createAlert = function (alert) {
		var alert = { name: "Alert16", description: "Description 15", date: "Aug 3, 2008"};
		alerts.unshift(alert);
	}
	
	var removeAlert = function(alert, index) {
		alerts.splice(index, 1);
	}
	
	var alertService = {
		getItems : getItems,
		createAlert : createAlert,
		remove : removeAlert
	};
	
	return alertService;
	
}]);