import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.configInit();
  }

  // -> Config Init 
  configInit() {

    setTimeout(() => {

      this.modalCtrl.dismiss();

    }, 3000);

  }

}
