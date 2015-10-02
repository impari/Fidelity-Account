
eventsModule.factory('registrationService', ['$http', function($http) {
	var items = registrationItems;
	
	var getItems = function (){
		return items;
	};
	
	var create = function (item) {
		var item = { firstname: "Jerry Smith", latname:"Smith", email: "smith@fnf.com", company: "FNF"};
		items.unshift(item);
	}
	
	var remove= function(item, index) {
		items.splice(index, 1);
	}
	
	var alertService = {
		getItems : getItems,
		create : create,
		remove : remove
	};
	
	return alertService;
	
}]);