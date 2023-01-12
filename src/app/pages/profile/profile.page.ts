import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User = {};

  constructor(
    private userService: UserService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  async updateUser(fUpdate: NgForm) {
    if (fUpdate.invalid) {
      return;
    }

    const validUpdate = await this.userService.updateUser(this.user);

    if (validUpdate) {
      this.presentToast('Usuario actualizado correctamente');
    } else {
      this.presentToast('No se pudo actualizar el usuario');
    }
  }

  logout() {}

  async presentToast(messageToast: string) {
    const toast = await this.toastController.create({
      message: messageToast,
      duration: 1800,
      position: 'bottom',
    });

    await toast.present();
  }
}
