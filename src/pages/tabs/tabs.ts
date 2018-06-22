import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private navCtrl: NavController) {

  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to PScanner, ${data.email}`,
          duration: 3000
        }).present();
      }else {
        this.toast.create({
          message: `Authentication Failed`,
          duration: 3000
        }).present();
        this.navCtrl.setRoot(LoginPage);
      }
        
    });
  }
}
