import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    try{ 
    
    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    if(info){
      this.navCtrl.setRoot("LoginPage");
    }

    
    }

    catch(e){
      this.toast.create({
        message: "Todos os campos devem ser preenchidos. A senha deve ter ao menos 6 caracteres.",
        duration: 6000,
        cssClass: "error"
      }).present();
  }
  }
}
