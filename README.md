# Ionic 2 with side menu and tabs.

## How to use:
- clone or download
- select the folder and run:
```
npm install
```
- to launch the project on your browser:
```
ionic serve
or
ionic serve -l 
```

## How to do it yourself.
1. ionic start ProjectName --v2
2. navigate to app/
3. create new file app.component.html
4. open app.component.ts and modify: (I will  tag with //<<< what is new from default, delete after )

```
import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.component.html' //<<< 
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; //<<<
  pages: Array<{title: string, component: any}>; //<<< 
  rootPage: any = TabsPage;
  

  constructor(platform: Platform, **private menu: MenuController**) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // set app's sidemenu pages
    this.pages = [
      { title: 'Homepage', component: TabsPage },
      { title: 'Test1', component: HomePage },
      { title: 'test2', component: AboutPage }
    ];

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
```
