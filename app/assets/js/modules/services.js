/**
 * Created by tboursier on 09/10/2015.
 */
define([], function () {
    var Services = (function () {
        /** Init */
        function init() {
            console.log('Service is loaded');
        }

        return {
            init: init
        }
    })();

    return Services;
});

