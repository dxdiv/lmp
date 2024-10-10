"use strict";
(function() {
    var a = function() {
        [".open--premium", ".open--feed", ".notice--icon", ".open--profile", ".console-screen"].forEach(function(a) {
            return $(a).hide()
        }), [".head__split"].forEach(function(a) {
            document.querySelector(a).style.width = 0, document.querySelector(a).style.margin = "0 0.7em"
        })
    };
    window.appready ? a() : Lampa.Listener.follow("app", function(b) {
        "ready" === b.type && a()
    })
})();
// https://github.com/k03mad/lampa/blob/master/plugins/hide-icons.js
