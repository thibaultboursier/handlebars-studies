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
        "app": "assets/js/app",
        "modules": "assets/js/modules"
    }
});

require(['jquery', 'bootstrap'], function () {
    require(['app'], function (App) {
        App.init();
    });
});