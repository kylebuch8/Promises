'use strict';

/*global angular*/

/*
 * Example One
 *
 * The movies service returns the $http promise so the data we get in the
 * success handler has a data object which contains a movies array
 */
/*angular.module('promisesApp')
    .controller('MainCtrl', ['$scope', 'Movies', function($scope, Movies) {
        function successHandler(data) {
            $scope.movies = data.data.movies;
        }

        function errorHandler() {
            console.log('error');
        }

        Movies.getMovies().then(successHandler, errorHandler);
    }]);*/

/*
 * Example Two
 *
 * This time the movies service returns just a movies object from the deferred
 * object that we created
 */
angular.module('promisesApp')
    .controller('MainCtrl', ['$scope', 'Movies', function ($scope, Movies) {
        function successHandler(movies) {
            $scope.movies = movies;
        }

        function errorHandler(error) {
            console.log('error', error.status);
        }

        Movies.getMovies().then(successHandler, errorHandler);
    }]);
