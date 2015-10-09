/**
 * Created by tboursier on 09/10/2015.
 */
define(['modules/services'], function (Services) {
    var App = (function () {
        /** Init */
        function init() {
            Services.init();

            Services.getRepositories('thibaultboursier').done(function (data) {

            });
        }

        return {
            init: init
        }
    })();

    return App;
});

