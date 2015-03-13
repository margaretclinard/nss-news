angular
  .module('news')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/news/table.html',
        controller: 'ArticleTableCtrl',
        controllerAs: 'table'
      })
      .when('/submit', {
        templateUrl: '/js/news/new.html',
        controller: 'NewArticleCtrl',
        controllerAs: 'article'
      });
  });
