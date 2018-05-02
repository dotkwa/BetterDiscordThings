# BetterTheming  
Adds certain classes to app-mount while in specific environments to increase theming capabilities.


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
![Example Image](https://github.com/dotkwa/BetterDiscordThings/raw/master/v1/plugins/BetterTheming/example.png "Example Image")