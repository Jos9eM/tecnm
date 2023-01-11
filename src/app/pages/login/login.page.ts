import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { User } from 'src/app/interfaces/interfaces';
import { UiServices } from 'src/app/services/ui-services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('mainSlide') slides: IonSlides;

  loginUser = {
    email: 'josue@mail.com',
    password: '1234asdas5',
  };

  userRegister: User = {
    email: 'test@mail.com',
    name: 'test',
    password: '12345',
    avatar: 'av-1.png'
  };

  constructor(
    private userService: UserService,
    private navController: NavController,
    private uiService: UiServices
  ) {}

  ngOnInit() {
    //this.slides.lockSwipes(true); //TODO fix error despues
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) {
      return;
    }

    const valid = await this.userService.login(
      this.loginUser.email,
      this.loginUser.password
    );

    if (valid) {
      this.navController.navigateRoot('/home', { animated: true });
    } else {
      this.uiService.presentAlert('Usuario/contraseña no son correctos');
    }
  }

  async register(fRegister: NgForm) {
    if (fRegister.invalid) {
      return;
    }

    const valid = await this.userService.register(this.userRegister);

    if (valid) {
      this.navController.navigateRoot('/home', { animated: true });
    } else {
      this.uiService.presentAlert('Usuario no es valido');
    }
  }

  showRegister() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  showLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
}
