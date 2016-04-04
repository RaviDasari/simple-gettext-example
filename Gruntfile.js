'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        //extract all keys from yout html pages into template.pot
        nggettext_extract: {
            pot: {
                files: {
                    'po/template.pot': ['*.html', 'partial/*.html']
                }
            },
        },
        //prepare translation.js file from all .po files together so that you could load it in your application.
        nggettext_compile: {
            all: {
                files: {
                    'js/translations.js': ['po/*.po']
                }
            },
        },
        'http-server': {

            'dev': {

                // the server root directory 
                root: '.',

                // the server port 
                // can also be written as a function, e.g. 
                // port: function() { return 8282; } 
                port: 8282,

                // the host ip address 
                // If specified to, for example, "127.0.0.1" the server will 
                // only be available on that ip. 
                // Specify "0.0.0.0" to be available everywhere 
                host: "0.0.0.0",


                // run in parallel with other tasks 
                runInBackground: false,

                // specify a logger function. By default the requests are 
                // sent to stdout. 
                logFn: function(req, res, error) {},

                // Tell grunt task to open the browser 
                openBrowser: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-gettext');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile', 'http-server']);
};