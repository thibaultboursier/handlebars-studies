/**
 * Created by tboursier on 09/10/2015.
 */
define(['modules/services'], function (Services) {
    return (function () {
        var _repositories;

        /** Show repositories */
        function _showRepositories() {
            var container = document.getElementById('repositories'),
                template = document.getElementById('tpl-repositories').innerHTML,
                html = Handlebars.compile(template);

            container.innerHTML = html({objects: _repositories});
        }

        /** Init */
        function init() {
            Services.init();

            Services.getRepositories('thibaultboursier').done(function (data) {
                _repositories = data;

                _showRepositories();
            });
        }

        return {
            init: init
        }
    })();
});

