var eventsModule = angular.module('events', [])
.factory('eventListService', ['$http', function($http) {
	
	var items = eventItems;
	var getItems = function (){
		return items;
	};
	var create= function (item) {
		var item = { name: "Event 4", contact: "contact 4", date: "Aug 3, 2008"};
		items.unshift(item);
	}
	var remove = function(item, index) {
		items.splice(index, 1);
	}
	
	var service = {
		getItems : getItems,
		create : create,
		remove : remove
	};
	
	return service;
	
}]);