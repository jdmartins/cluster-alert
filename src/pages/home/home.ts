import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal';
import { Shake } from '@ionic-native/shake';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shake$;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private platform: Platform,
    public s: Shake
  ) {

    if(this.platform.is('cordova')) {
      // Create a shake stream with sentivity 60
      // this.shake$ = this.s.startWatch(60).subscribe( () => {
      //   console.log('Shake that big S phone');
      // });
    }

  }
  

  

  alerts = [
    {
      name: 'Joao martins',
      content: 'Ajutor! This ionic app is exploding',
      status: 'warning'
    },
    {
      name: 'Alex Pavaloi',
      content: 'Check out Angular 5 is great!',
      status: 'success'
    }
  ];

  // We want to call this on click
  public openModal() {
    // Save reference to AlertModal
    let alertModal = this.modalCtrl.create(AlertModalComponent);
    // method for showing the modal
    alertModal.present();
    alertModal.onDidDismiss(obj => {
      // if we get a new alert obj from the cluster
      // we create a new array with the new alert at the begining
      // and the previous at the end so it always stays on top
      if(obj) this.alerts = [obj, ...this.alerts]
    })
  }

  
}
