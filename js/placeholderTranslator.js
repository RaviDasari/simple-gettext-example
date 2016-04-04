angular.module('gettext-sample').directive('placeholder', ['gettextCatalog', function(gettextCatalog) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var translatedPlaceholder = gettextCatalog.getString(attrs.placeholder);
            element.attr('placeholder', translatedPlaceholder);
        }
    };
}]);