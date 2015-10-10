require.config({
    paths: {
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "underscore": "../bower_components/underscore/underscore-min",
        "backbone": "../bower_components/backbone/backbone-min",
        "handlebars": "../bower_components/handlebars/handlebars.min",
        "app": "assets/js/app",
        "modules": "assets/js/modules"
    }
});

require(['jquery', 'underscore', 'backbone'], function () {
    require(['app'], function (App) {
        App.init();
    });
});