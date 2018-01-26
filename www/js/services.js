angular.module('starter.services', [])

.factory('NewsFactory', ['$http',function($http){
  var rss_converter = "https://rss2json.com/api.json?rss_url=";
  return {
    getNewsTitles: function(url) {
  return $http.get(rss_converter+ encodeURIComponent(url));
  }
  };
}])

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
