'use strict';

/*global angular*/

/*
 * DON'T FORGET TO GET AN API KEY FROM ROTTEN TOMATOES FOR THIS TO WORK
 */

/*
 * Example One
 *
 * $http returns a promise so we can just return the $http promise
 */
/*angular.module('promisesApp')
    .factory('Movies', ['$http', function($http) {
        var moviesUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?callback=JSON_CALLBACK&apikey=YOUR_API_KEY';

        function getMovies() {
            return $http.jsonp(moviesUrl);
        }

        return {
            getMovies: getMovies
        };
    }]);*/


/*
 * Example Two
 *
 * Create a deferred object using $q. We can have fine control over the result
 * and return the data that we want
 */
angular.module('promisesApp')
    .factory('Movies', ['$q', '$http', function($q, $http) {
        var moviesUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?callback=JSON_CALLBACK&apikey=YOUR_API_KEY';

        function getMovies() {
            var deferred = $q.defer();

            $http.jsonp(moviesUrl)
                .success(function(data) {
                    return deferred.resolve(data.movies);
                })
                .error(function() {
                    var error = {
                        status: 'you screwed up'
                    };

                    return deferred.reject(error);
                });

            return deferred.promise;
        }

        return {
            getMovies: getMovies
        };
    }]);
