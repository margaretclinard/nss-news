angular
  .module('news')
  .filter('relativeDate', function () {
    return function (date) {
      var relDate = date ? moment(date).fromNow() : 'Unknown';

      return relDate;
    };
  })