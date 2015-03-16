angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl)

function ArticleTableCtrl($http) {
  var vm   = this,
      user = 'Anonymous';


  vm.vote = function (direction, uuid) {
    var article = vm.articles[uuid],
        vote    = {};

    vote[uuid] = direction;

    if (!vm.usersVotes[uuid]) {
      if (direction === 'up') {
        article.votes.up++
      } else {
        article.votes.down++
      }

      vm.usersVotes[uuid] = vote;

      $http
        .put('https://nss-news.firebaseio.com/articles/' + uuid + '.json', article)
        .error(function () {
          if (direction === 'up') {
            article.votes.up--
          } else {
            article.votes.down--
          }
        });

      $http.patch('https://nss-news.firebaseio.com/votes/' + user + '.json',  vote);
    }

  };

  $http
    .get('https://nss-news.firebaseio.com/articles.json')
    .success(function (data) {
      vm.articles = data;
    });

  $http
    .get('https://nss-news.firebaseio.com/votes/' + user + '.json')
    .success(function (data) {
      vm.usersVotes = data || {};
    });

}

