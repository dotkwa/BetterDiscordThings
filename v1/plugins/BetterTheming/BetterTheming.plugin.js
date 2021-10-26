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

function replaceWinClass(append, remove) {
    removeWinClass(remove);
    addWinClass(append);
}

function addWinClass(append) {
    if (!appmount.contains(append)) {
        appmount.add(append);
    }
}

function removeWinClass(remove) {
    if (Array.isArray(remove)) {
        remove.forEach(element => appmount.remove(element));
    } else {
        appmount.remove(remove);
    }
}

function updateClasses() {
    if (document.visibilityState == "visible") {
        removeWinClass("minimized");
        if (screen.availWidth - window.outerWidth === 0 && screen.availHeight - window.outerHeight === 0) {
            replaceWinClass("maximized", ["windowed", "minimized"]);
        } else {
            replaceWinClass("windowed", ["maximized", "minimized"]);
        }
    } else {
        addWinClass("minimized");
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