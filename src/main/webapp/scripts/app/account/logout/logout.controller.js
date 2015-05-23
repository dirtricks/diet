'use strict';

angular.module('dietApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
