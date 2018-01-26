angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope) {


})

.controller('NewsSectionsCtrl', function($scope,NewsSections,$stateParams, $state) {
$scope.currentNews=$stateParams.newsCode;
 $scope.sections=NewsSections.all();
$scope.goToSection= function(sect){
	$state.go('tab.newsTitles',{ServiceProvider: sect.ServiceProvider, section: sect.title, url: sect.url});
};

})

.controller('NewsTitlesCtrl', function($scope,NewsSections,$stateParams, NewsFactory, $state) {
	$scope.currentNewsSection = $stateParams.section;
	$scope.loadTitles =function(){
	NewsFactory.getNewsTitles($stateParams.url)
		.then(function(res){
			console.log(res.data.items);
		if (res.data.items){
			$scope.titles = res.data.items;
		}
		else
		{
			console.log("Feed error : "+ res.data);
		} })
		.catch(function(err) {
			console.log("Connection error : ");
		})
		.finally(function() {
		});
	};
	$scope.loadTitles();

$scope.goToSection= function(sect){
	$state.go('tab.newsDetails',{Title: sect.title, Image: sect.enclosure.link, Details:sect.content});
	};
})

.controller('DetailsCtrl', function($scope, $stateParams) {

	$scope.currentTitle = $stateParams.Title;
	$scope.currentImage = $stateParams.Image;
	$scope.currentDetails = $stateParams.Details;
	

})

.controller('SportCtrl', function($scope) {



})


.controller('TechCtrl', function($scope) {

});
