
adminApp.directive('customGrid', ['$http', function($http) {
	return {
		restrict : 'E',
		templateUrl : 'templates/custom-grid-template.html',
		scope : { customOptions : '=', selectedItems : '=', service : '=', modified:'=' }, 
		//replace : true,
		//transclude : false,
		controller : ['$scope', '$attrs', '$modal',
						function controller($scope, $attrs, $modal) {
							var totaldata = $scope.service.getItems();
							$scope.items = totaldata;
							$scope.selectedItems = $scope.selectedItems||[];
							$scope.totalServerItems = 0;
							$scope.columnDefinitions = [{}];
							var customOptions = $scope.customOptions; 
							$scope.pagingOptions = {
								pageSize: 5,
								currentPage: 1
							};
							$scope.setPagingData = function(data, page, pageSize, total){
								var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
								$scope.items = pagedData;
								$scope.totalServerItems = data.length;
							};
							$scope.getPagedDataAsync = function (pageSize, page) {
								$scope.setPagingData(totaldata, page, pageSize, totaldata.total);
							};

							$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

							$scope.$watch('pagingOptions', function (newVal, oldVal) {
								if (newVal !== oldVal && (newVal.currentPage !== oldVal.currentPage || newVal.pageSize !== oldVal.pageSize)) {
									$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, "");
								}
							}, true);
							
							$scope.$watch('modified', function (newVal, oldVal) {
								if (newVal !== oldVal ) {
									$scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, "");
								}
							}, true);
							
							$scope.options = {
								data 					: 'items',
								totalServerItems		: 'totalServerItems',
								columnDefs				: customOptions.columnDefs ? customOptions.columnDefs : 'columnDefinitions',
								enableColumnResize		: true,
								enablePaging			: true,
								selectedItems			: $scope.selectedItems,
								showFooter				: true,
								pagingOptions			: $scope.pagingOptions,
								multiSelect				 : false,
								enableRowSelection		: false,
								filterOptions			: 
								{
									filterText			: '',
									useExternalFilter	: false
								}
							},
							
							$scope.remove = function() {
								//$scope.$parent.remove(this);
								var that = this;
								var modalInstance = $modal.open({
										templateUrl: 'templates/confirm-dialog.html',
										controller: 'confirmDialogController',
										resolve: {
											title: function () {
												return "Delete";
											},
											msg: function() {
												return  "Are you sure do you want to delete?";
											}
										}
								});
								modalInstance.result.then(function () {
									$scope.service.remove(that.row.entity, ($scope.pagingOptions.currentPage-1) *$scope.pagingOptions.pageSize 
										+ that.row.rowIndex);
								$scope.modified = !$scope.modified;		
								}, function () {/* Cancel call back*/});
							}
					}]
	}
	
}]);