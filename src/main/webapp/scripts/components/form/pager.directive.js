/* globals $ */
'use strict';

angular.module('dietApp')
    .directive('dietAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
