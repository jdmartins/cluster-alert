import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal';
import { Shake } from '@ionic-native/shake';
import { Observable } from 'rxjs/Observable';


declare var firebase: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public messagesRef;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    private platform: Platform,
  ) {
    this.messagesRef = firebase.database().ref('/messages');

    this.messagesRef.on('child_added', alert => this.alerts = [alert.val(), ...this.alerts])

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
      if(obj) this.alerts = [obj, ...this.alerts];
      this.messagesRef.push(obj);
    })


  }

  
}
