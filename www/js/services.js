angular.module('starter.services', [])

  .factory('Channels', function($http, $rootScope) {
    var baseUrl = "https://api.backendless.com/0E548BB8-EE8A-B78E-FFFD-A683D01A8800/8606A3F3-CD25-639B-FFE3-1AE592E11700/data";
    return {
      all: function(callback) {
        $http.get(baseUrl + '/channels').then(
          function(response) {
            $rootScope.channels = response.data;
            callback(response.data);
          }, function(error) {
            console.log(error);
          }
        )
      },
      getChannel : function(channelId) {
        for (var i = 0; i < $rootScope.channels.length; i++) {
          if ($rootScope.channels[i].id === channelId) {
            return $rootScope.channels[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Sections', function($http, $rootScope) {
    var baseUrl = "https://api.backendless.com/0E548BB8-EE8A-B78E-FFFD-A683D01A8800/8606A3F3-CD25-639B-FFE3-1AE592E11700/data";
    return {
      all: function(channelId, callback) {
        $http.get(baseUrl + '/section?where=channelId.id%3D' + channelId).then(
          function(response) {
            $rootScope.sections = response.data;
            callback(response.data);
          }, function(error) {
            console.log(error);
          }
        )
      },
      getSection: function(sectionId) {
        for (var i = 0; i < $rootScope.sections.length; i++) {
          if ($rootScope.sections[i].id === sectionId) {
            return $rootScope.sections[i];
          }
        }
        return null;
      }
    };

  })

  .factory('News', function($http, $rootScope) {
    var baseUrl = "https://api.backendless.com/0E548BB8-EE8A-B78E-FFFD-A683D01A8800/8606A3F3-CD25-639B-FFE3-1AE592E11700/data";
    return {
      all: function(sectionId, callback) {
        $http.get(baseUrl + '/news?where=sectionId.id%3D' + sectionId).then(
          function(response) {
            console.log("Ca fait la requete");
            console.log(response);
            $rootScope.news = response.data;
            callback(response.data);
          }, function(error) {
            console.log(error);
          }
        )
      },
      getNews: function(newsId) {
        for (var i = 0; i < $rootScope.news.length; i++) {
          console.log("rootId : " + typeof $rootScope.news[i].id);
          console.log("newsId : " + typeof newsId);
          if ($rootScope.news[i].id === parseInt(newsId)) {
            console.log($rootScope.news[i]);
            return $rootScope.news[i];
          }
        }
        return null;
      }
    }
  })


  .factory('NewsSections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var rssNews = [
    { ServiceProvider: 'CNN', title: 'Top Stories', url: 'http://rss.cnn.com/rss/edition.rss' },
    { ServiceProvider: 'CNN',title: 'World', url: 'http://rss.cnn.com/rss/edition_world.rss' },
    { ServiceProvider: 'CNN',title: 'Africa', url: 'http://rss.cnn.com/rss/edition_africa.rss' },
    { ServiceProvider: 'CNN',title: 'Americas', url: 'http://rss.cnn.com/rss/edition_americas.rss' },
    { ServiceProvider: 'CNN',title: 'Asia', url: 'http://rss.cnn.com/rss/edition_asia.rss' },
    { ServiceProvider: 'CNN',title: 'Europe', url: 'http://rss.cnn.com/rss/edition_europe.rss' },
    { ServiceProvider: 'CNN',title: 'Middle East', url: 'http://rss.cnn.com/rss/edition_meast.rss' },
    { ServiceProvider: 'CNN',title: 'Technology', url: 'http://rss.cnn.com/rss/edition_technology.rss' },
    { ServiceProvider: 'CNN',title: 'Science & Space', url: 'http://rss.cnn.com/rss/edition_space.rss' },
    { ServiceProvider: 'CNN',title: 'Entertainment', url: 'http://rss.cnn.com/rss/edition_entertainment.rss' },
    { ServiceProvider: 'CNN',title: 'World Sport', url: 'http://rss.cnn.com/rssERROR/edition_sport.rss' },
        { ServiceProvider: 'BBC',title: 'News Front Page', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/front_page/rss.xml' },
        { ServiceProvider: 'BBC',title: 'World', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/world/rss.xml' },
        { ServiceProvider: 'BBC',title: 'Politics', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/uk_politics/rss.xml' },
        { ServiceProvider: 'BBC',title: 'Health', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/health/rss.xml' },
        { ServiceProvider: 'BBC',title: 'Technology', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/technology/rss.xml' },
        { ServiceProvider: 'BBC',title: 'Entertainment', url: 'http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/entertainment/rss.xml' }
      ];


  return {
    all: function() {
      return rssNews;
    }
  };
});
