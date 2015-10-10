require.config({
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        }
    },
    paths: {
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min",
        "handlebars": "../bower_components/handlebars/handlebars.min",
        "underscore": "../bower_components/underscore/underscore-min",
        "backbone": "../bower_components/backbone/backbone-min",
        "app": "assets/js/app",
        "modules": "assets/js/modules"
    }
});

require(['jquery', 'underscore', 'backbone', 'bootstrap'], function () {
    require(['app'], function (App) {
        App.init();
    });
});