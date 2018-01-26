angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope, Channels) {
  Channels.all(function(data) {
    $scope.channels = data;
  });
})

.controller('NewsSectionsCtrl', function($scope,Sections,$stateParams, $state) {
$scope.currentNetworkId=$stateParams.newsCode;
 Sections.all($scope.currentNetworkId, function(data) {
   $scope.sections = data;
 });
//$scope.goToSection= function(sect){
	//$state.go('tab.newsTitles',{ServiceProvider: sect.ServiceProvider, section: sect.title, url: sect.url});
//};

})

.controller('NewsTitlesCtrl', function($scope,News,$stateParams, NewsFactory, $state) {
  News.all($stateParams.sectionId, function(data) {
    $scope.news = data;
  });
})

.controller('DetailsCtrl', function($scope, News, $stateParams) {

  News.getNews($stateParams.newsId, function(data) {
    $scope.currentTitle = data.title;
    $scope.currentImage = data.img;
    $scope.currentDetails = data.description;
  });
})

.controller('SportCtrl', function($scope) {



})


.controller('TechCtrl', function($scope) {

});
