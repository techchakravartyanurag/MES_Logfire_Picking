import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Pick Cart',
      url: '/folder/pickCart',
      icon: 'cart'
    },
    {
      title: 'Cart Position',
      url: '/folder/cartPostion',
      icon: 'file-tray-full'
    },
    {
      title: 'Item Pick Location',
      url: '/folder/itemPickLocation',
      icon: 'location'
    },
    {
      title: 'Item Container',
      url: '/folder/itemContainer',
      icon: 'briefcase'
    },
    {
      title: 'Item Summary',
      url: '/folder/itemSummary',
      icon: 'layers'
    },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];
  public labels = ['New Device Pair', 'Settings'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
