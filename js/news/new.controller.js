angular
  .module('news')
  .controller('NewArticleCtrl', NewArticleCtrl);

function NewArticleCtrl($http, $location) {
  var vm = this;

  vm.newArticle = {};

  vm.submit = function () {
    vm.newArticle.postDate = (new Date()).toJSON();
    vm.newArticle.submittedBy = 'Anonymous';

    $http
    .post('https://nss-news.firebaseio.com/articles.json', vm.newArticle)
    .success(function () {
      $location.path('/');
    });
  }
}
