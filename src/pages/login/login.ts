import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(private fireAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{ 
    
    const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    if(info){
      await this.navCtrl.setRoot(HomePage);
    }

    }

    catch(e){
    this.toast.create({
      message: "O endereço de email ou a senha que você inseriu não é válido.",
      duration: 6000,  
      cssClass: "error"
    }).present();
  
    }

  }
  
  register(){
    this.navCtrl.push("RegisterPage");
  
  
  }

}
