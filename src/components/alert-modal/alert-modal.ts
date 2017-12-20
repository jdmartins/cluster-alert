import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'alert-modal',
  templateUrl: 'alert-modal.html'
})
export class AlertModalComponent {

  constructor(
    private storage: Storage,
    private viewCtrl: ViewController
  ) {
    this.storage.get('name').then((val) => {
      this.name = val || '';
    });
  }

  public name;
  public content;

  addAlert() {
    this.storage.set('name', this.name);
    this.viewCtrl.dismiss({name: this.name, content: this.content});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
