import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MissaoPage } from '../missao/missao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  
  signOut(){

    this.navCtrl.setRoot("LoginPage");
    

  }
  missaoClick(){
    this.navCtrl.push(MissaoPage)
  }

}
