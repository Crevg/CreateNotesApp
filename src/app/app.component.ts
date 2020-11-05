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
      title: 'New note',
      url: 'notes/add',
      icon: 'add'
    },
    {
      title: 'See all',
      url: 'notes/all',
      icon: 'book'
    },
    {
      title: 'Favorites',
      url: 'groups/favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: 'groups/archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: 'groups/trash',
      icon: 'trash'
    },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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

  }
}
