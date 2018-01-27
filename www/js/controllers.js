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
   console.log($scope.sections);
 });
//$scope.goToSection= function(sect){
	//$state.go('tab.newsTitles',{ServiceProvider: sect.ServiceProvider, section: sect.title, url: sect.url});
//};

})

.controller('NewsTitlesCtrl', function($scope,News,$stateParams, $state) {
  News.all($stateParams.sectionId, function(data) {
    $scope.news = data;
    console.log($scope.news);
  });
})

.controller('DetailsCtrl', function($scope, News, $stateParams) {

  var data = News.getNews($stateParams.newsId);
  console.log(data);
  $scope.currentTitle = data.title;
  console.log(data.image);
  $scope.currentImage = data.image;
  $scope.currentDetails = data.description;
})

.controller('SportCtrl', function($scope) {



})


.controller('TechCtrl', function($scope) {

});
