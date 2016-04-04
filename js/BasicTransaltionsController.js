'use strict';
angular.module('gettext-sample').controller('BasicTransaltionsController', function($scope, gettextCatalog) {
    $scope.name = "Ravi Dasari";
    $scope.msgCount = 1;

    $scope.dynamicMsg = gettextCatalog.getString("Some plain text");
    $scope.angularMsg = gettextCatalog.getString("Hello, my name is {{name}}", {
        name: $scope.name
    });
    $scope.$watch('msgCount', function(newValue, oldValue) {
        $scope.pluralStringMsg = gettextCatalog.getPlural(newValue, "{{$count}} new message", "{{$count}} new messages", {});
    });

    gettextCatalog.setStrings("ru", {
        "Trasnlated dynamically in code": "Перевод динамически в коде"
    });

});