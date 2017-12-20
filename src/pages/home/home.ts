import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal';
import { Shake } from '@ionic-native/shake';
import { Observable } from 'rxjs/Observable';

declare var firebase: any;

declare var firebase: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  shake$;
  public messageRemote: any;
  public alerts: Array<Object>;
=======
  public messagesRef;

>>>>>>> fbb1c5fb3934885ed5632d9ef1c9daa51e960b39
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private platform: Platform,
  ) {
<<<<<<< HEAD
    this.messageRemote = firebase.database().ref('/message');
    this.alerts = [];

    this.messageRemote.on('child_added', data => {
      this.alerts = [data.val(), ...this.alerts];
    });
=======
    this.messagesRef = firebase.database().ref('/messages');

    this.messagesRef.on('child_added', alert => this.alerts = [alert.val(), ...this.alerts])
>>>>>>> fbb1c5fb3934885ed5632d9ef1c9daa51e960b39

  }

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
<<<<<<< HEAD
      this.messageRemote.push(obj);
=======
      if(obj) this.alerts = [obj, ...this.alerts];
      this.messagesRef.push(obj);
>>>>>>> fbb1c5fb3934885ed5632d9ef1c9daa51e960b39
    })


  }
}
