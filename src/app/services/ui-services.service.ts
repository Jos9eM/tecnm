import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UiServices {
  constructor(private alertController: AlertController) {}

  async presentAlert(message: string) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alerta';
    alert.message = message;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }
}
