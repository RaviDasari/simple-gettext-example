angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ru', {"{{$count}} new message":["{{$count}} новое сообщение","{{$count}} новые сообщения","{{$count}} новые сообщения"],"email address":"Адрес электронной почты","Hello there, how are you feeling today?":{"female":"Привет мам, как ты себя чувствуешь сегодня?","male":"Привет сэр, как вы себя чувствуете сегодня?"},"Hello, my name is {{name}}":"Привет меня зовут {{name}}","Some plain text":"Некоторые текстовый"});
/* jshint +W100 */
}]);