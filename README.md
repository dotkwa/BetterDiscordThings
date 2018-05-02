# BetterDiscordThings  
all themes/plugins are currently not yet officially released.  

## Plugins  
* BetterTheming
    * **You do not need this if you have no themes that use it!**
    * Adds certain classes to app-mount while in specific environments to increase theming capabilities.  
## Themes
* Discord98 
    * **Uses BetterTheming for extra styling**
    * A theme that stylizes Discord like it would be made for Windows 98/2k.

###### BetterTheming  
To make use BetterTheming as a theme developer, all you need to do is to call the extra classes provided for you in your theme as ':not' conditions on the #app-mount element.
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
This example from the Discord98 theme shows the maximize button switching to a different image when the window is either '.maximized' or '.windowed'.