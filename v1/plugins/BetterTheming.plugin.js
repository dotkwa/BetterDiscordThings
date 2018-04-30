//META{"name":"BetterTheming"}*//
var BetterTheming = function() {};
var themeInterval;

BetterTheming.prototype.load = function() {};
BetterTheming.prototype.unload = function() {};
BetterTheming.prototype.start = function() {
  themeInterval = setInterval(addClass, 100);
};
BetterTheming.prototype.stop = function() {
  clearInterval(themeInterval);
};
BetterTheming.prototype.update = function() {};
BetterTheming.prototype.getName = function() { return "BetterTheming" };
BetterTheming.prototype.getDescription = function() { return "Adds certain classes to app-mount while in specific environments to increase theming capabilities." };
BetterTheming.prototype.getVersion = function() { return "1.0.0" };
BetterTheming.prototype.getAuthor = function() { return "dotkwa" };

addClass = function() {
  //Check for theme-light or theme-dark in .app
  if (document.querySelector(".app").classList.contains("theme-light") && !document.querySelector("#app-mount").classList.contains("theme-light")) {
    document.querySelector("#app-mount").classList.remove("theme-dark");
    document.querySelector("#app-mount").classList.add("theme-light");
  } else if (document.querySelector(".app").classList.contains("theme-dark") && !document.querySelector("#app-mount").classList.contains("theme-dark")) {
    document.querySelector("#app-mount").classList.remove("theme-light");
    document.querySelector("#app-mount").classList.add("theme-dark");
  }

  //Check if the window is maximized, minimized, or windowed
  if (document.visibilityState == "visible") {
    if (window.outerWidth < screen.availWidth || window.outerHeight < screen.availHeight && !document.querySelector("#app-mount").classList.contains("windowed")) {
      document.querySelector("#app-mount").classList.remove("maximized", "minimized");
      document.querySelector("#app-mount").classList.add("windowed");
    } else if (window.outerWidth == screen.availWidth && window.outerHeight == screen.availHeight && !document.querySelector("#app-mount").classList.contains("maximized")) {
      document.querySelector("#app-mount").classList.remove("windowed", "minimized");
      document.querySelector("#app-mount").classList.add("maximized");
    }
  } else if (document.visibilityState == "hidden" && !document.querySelector("#app-mount").classList.contains("minimized")) {
    document.querySelector("#app-mount").classList.remove("maximized", "windowed");
    document.querySelector("#app-mount").classList.add("minimized");
  }

  //Check if the window has focus
  if (document.hasFocus() && !document.querySelector("#app-mount").classList.contains("focused")) {
    document.querySelector("#app-mount").classList.remove("unfocused");
    document.querySelector("#app-mount").classList.add("focused");
  } else if (!document.hasFocus() && !document.querySelector("#app-mount").classList.contains("unfocused")) {
    document.querySelector("#app-mount").classList.remove("focused");
    document.querySelector("#app-mount").classList.add("unfocused");
  }
}