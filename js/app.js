/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main gettext-sample app module
 *
 * @type {angular.Module}
 */
window.app = angular.module('gettext-sample', ['gettext']);

app.run(function (gettextCatalog) {
    gettextCatalog.debug = true;
    //gettextCatalog.currentLanguage = 'nl';
});
