import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor( private afAuth: AngularFireAuth,
    
    public navCtrl: NavController, private toast: ToastController, public navParams: NavParams) {
  }

  async register(user: User){
    try { 
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if (result != null) {
        this.toast.create({
          message: `Register Successful`,
          duration: 3000
        }).present();


        this.navCtrl.setRoot(LoginPage);
      }
    }
    catch(e){
      console.error(e);
    }
  }

}
