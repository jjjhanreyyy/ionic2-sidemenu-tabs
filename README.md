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

At the time of pushing, was using these dependencies:
```
  "dependencies": {
    "@angular/common": "2.1.1",
 ...
    "ionic-angular": "2.0.0-rc.3",
    "ionic-native": "2.2.3",
 ...
  },
  "devDependencies": {
    "@ionic/app-scripts": "0.0.45",
    "typescript": "2.0.6"
  },
```



## How to do it yourself.
1. ionic start ProjectName --v2
2. navigate to app/
3. create new file app.component.html
4. open app.component.ts and modify: 

I will  tag with //<<< new lines and ** xxx **  for inline code.

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
  

  constructor(platform: Platform, ** private menu: MenuController **) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // Here you will add all your sidemenu links, Homepage will always have the tabs the rest is up to you
    this.pages = [     //<<<   
      { title: 'Homepage', component: TabsPage }, //<<<
      { title: 'Test1', component: HomePage }, //<<<
      { title: 'test2', component: AboutPage } //<<<
    ]; //<<<

  }

  openPage(page) {      //<<<
    // close the menu when clicking a link from the menu
    this.menu.close();  //<<<
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);  //<<<
  }
}
```

5. open app.component.html and add: 
```
<ion-menu [content]="content">

  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>

<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
```

6. Last thing open all your project html pages and add the menu button:
```
Replace:
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

With:

<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>
```
