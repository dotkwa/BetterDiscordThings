/**
 * @name BetterTheming
 * @author dotkwa
 * @description Adds extra classes to the app-mount node to increase theming capabilities.
 * @version 0.0.1
 * @source https://github.com/dotkwa/BetterDiscordThings/tree/master/v1/plugins/BetterTheming
 * @updateUrl https://github.com/dotkwa/BetterDiscordThings/blob/master/v1/plugins/BetterTheming/BetterTheming.plugin.js
 */

var winTimeout;
//const root = document.getElementsByTagName('html')[0].classList;
const appmount = document.querySelector("#app-mount").classList;

function addWinClass(append) {
    if (!appmount.contains(append)) {
        appmount.add(append);
    }
}

function replaceWinClass(append, remove) {
    if (Array.isArray(remove)) {
        remove.forEach(element => appmount.remove(element));
    } else {
        appmount.remove(remove);
    }
    if (!appmount.contains(append)) {
        appmount.add(append);
    }
}

function removeWinClass(remove) {
    remove.forEach(element => appmount.remove(element));
}

function updateClasses() {
    if (document.visibilityState == "visible") {
        if (window.outerWidth < screen.availWidth || window.outerHeight < screen.availHeight) {
            replaceWinClass("windowed", ["maximized", "minimized"]);
        } else if (window.outerWidth == screen.availWidth && window.outerHeight == screen.availHeight) {
            replaceWinClass("maximized", ["windowed", "minimized"]);
        }
    } else {
        replaceWinClass("minimized", ["maximized", "windowed"]);
    }
    if (document.hasFocus()) {
        replaceWinClass("focused", "unfocused");
    } else {
        replaceWinClass("unfocused", "focused");
    }
}

function updateTimeout() {
    clearTimeout(winTimeout);
    winTimeout = setTimeout(updateClasses, 100);
}

module.exports = class BetterTheming {
    load() {
    }
    start() {
        window.onresize = updateTimeout;
        window.onfocus = updateTimeout;
        window.onblur = updateTimeout;
        updateClasses();
    }
    stop() {
        clearTimeout(winTimeout);
        removeWinClass(["windowed", "maximized", "minimized", "focused", "unfocused"]);
    }
}