angular.module('hiderApp').controller('mainCtrl', function($scope) {

	$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];


	$scope.alertDay = function(teaching, day) {
		if(day === undefined){
			alert(teaching + " has not been scheduled yet");
		} else {
			alert(teaching + " is active on " + day + '.');
		}
	}

})	