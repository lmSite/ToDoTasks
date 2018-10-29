app.controller('tasksTodoCtrl', function ( $scope,  $window) {
	
	$scope.lst = [];
	
	$scope.queryS = 'All';
	
	var counter =0;
	$scope.countfiltered = function () {
		if ($scope.lst.length == 0) { return 0; }
		else {
			 counter = $scope.lst.filter(function (taskItem) {
				return taskItem.statusT == false; 
			}).length;
			if (counter == 0) counter = $scope.lst.length;
			return counter;
		}
	}

	//insert: function (todo) 

	$scope.addTolist = function (tItem) {
		if (!(tItem === undefined || tItem === "")) {
			let iid = $scope.lst.length;
			$scope.lst.push({ id: iid, itemTask: tItem, statusT: false });

			$scope.addItem = "";
			$scope.NoItemError = "";
		} else {
			$scope.NoItemError = 'Please enter an task';
		}
	}


	//delete: function (todo)

	$scope.deleteTask =
	function (tItem) {
		console.log($scope.lst.indexOf(tItem));
		if(tItem.statusT==false){
		if ($window.confirm("Are you sure  ?"))
		$scope.lst.splice($scope.lst.indexOf(tItem), 1);
	}else
	$scope.lst.splice($scope.lst.indexOf(tItem), 1);
	}
});

