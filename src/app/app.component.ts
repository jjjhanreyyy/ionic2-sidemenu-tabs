import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private menu: MenuController) {
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
