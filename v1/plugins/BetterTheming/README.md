# BetterTheming  
Adds extra classes to the app-mount node to increase theming capabilities.

## Usage
Call on the classes via CSS conditionals.
```css
#app-mount:not(.maximized) .winButtonMinMax-PBQ2gm:nth-child(3) {
  background: var(--maximize-button);
  background-size: 9px 9px;
  background-position: 1px 0;
}

#app-mount:not(.windowed) .winButtonMinMax-PBQ2gm:nth-child(3) {
  background: var(--unmaximize-button);
  background-size: 9px 9px;
  background-position: 1px 0;
}
``` 
![Example Image](https://github.com/dotkwa/BetterDiscordThings/raw/master/v1/plugins/BetterTheming/example.png "Example Image")

## Class List
* windowed --the app is in a floating window
* maximized --the app is maximized to the screen
* minimized --the app is minimized to the taskbar
* focused --the app has mouse focus
* unfocused --the app doesn't have mouse focus

## Changelog
* 0.0.1
  * Script rewrite, updated to work.