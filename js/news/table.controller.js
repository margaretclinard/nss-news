angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl)

function ArticleTableCtrl($http) {
  var vm = this;

  $http
    .get('https://nss-news.firebaseio.com/articles.json')
    .success(function (data) {
      vm.articles = data;
    });
}
