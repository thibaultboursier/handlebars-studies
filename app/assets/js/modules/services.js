/**
 * Created by tboursier on 09/10/2015.
 */
define([], function () {
    return (function () {
        var _domain = 'http://api.github.com';

        /**
         * Get repositories
         * @param {String} username - Github account username
         */
        function getRepositories(username) {
            if (typeof username === 'undefined' || username.length === 0) {
                return false;
            }

            return $.ajax({
                type: 'GET',
                dataType: 'JSON',
                url: _domain + '/users/' + username + '/repos'
            });
        }

        /** Init */
        function init() {
        }

        return {
            init: init,
            getRepositories: getRepositories
        }
    })();
});

