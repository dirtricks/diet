'use strict';

angular.module('dietApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


