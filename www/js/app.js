// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.news', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsCtrl'
      }
    }
  })

  .state('tab.newsSections', {
    url: '/news/:newsCode',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-newsSections.html',
        controller: 'NewsSectionsCtrl'
      }
    }
  })




  .state('tab.sport', {
      url: '/sport',
      views: {
        'tab-sport': {
          templateUrl: 'templates/tab-sport.html',
          controller: 'SportCtrl'
        }
      }
    })

  .state('tab.newsTitles', {
      url: '/news/:sectionId',
      views: {
        'tab-news': {
      templateUrl: 'templates/tab-newsTitles.html',
      controller: 'NewsTitlesCtrl'
      }
  }})

    .state('tab.newsDetails', {
      url: '/news/:newsId',
      views: {
        'tab-news': {
          templateUrl: 'templates/tab-newsDetails.html',
          controller: 'DetailsCtrl'
        }
      }})
  .state('tab.tech', {
    url: '/tech',
    views: {
      'tab-tech': {
        templateUrl: 'templates/tab-tech.html',
        controller: 'TechCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

});
