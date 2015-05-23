/* globals $ */
'use strict';

angular.module('dietApp')
    .directive('dietAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
