angular.module('brownfield.postsController', [])
  .controller('PostsController', ($scope, $stateParams, posts) => {
    $scope.addPost = () => {
    };

    $scope.incrementVote = () => {
    };

    $scope.decrementVote =() => {
    };

    $scope.posts = posts.posts[$stateParams.id];
  });


