'use strict';
angular.module('gettext-sample').controller('AppController', function($scope, gettextCatalog) {

    $scope.languages = {
        current: gettextCatalog.currentLanguage,
        available: {
            'ru': 'Russian',
            'en': 'English'
        }
    };

    $scope.$watch('languages.current', function(lang) {
        gettextCatalog.setCurrentLanguage(lang);
    });

    $scope.addSpanish = function(){
        // let's add spanish translation dynamically
        gettextCatalog.setStrings('es', {
            "{{$count}} new message": ["{{$count}} nuevo mensaje", "{{$count}} nuevos mensajes"],
            "email address": "dirección de correo electrónico",
            "Hello, my name is {{name}}": "Hola, me llamo {{name}}",
            "Some plain text": "Algunos de texto sin formato"
        });
        $scope.languages.available.es = "Spanish";
    }

});