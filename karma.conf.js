module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/angular-loader/angular-loader.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/jquery/dist/jquery.js',
        'app/bower_components/bootstrap/dist/js/bootstrap.js',
        'app/bower_components/raphael/raphael.js',
        'app/bower_components/ngFx/dist/ngFx.js',
        'app/bower_components/jsPDF/dist/jspdf.min.js',
        'app/maps/jquery.vmap.js',
        'app/maps/jquery.vmap.france.js',
        'app/information/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
