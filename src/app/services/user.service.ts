import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: string = null;
  private user: User = {};

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navController: NavController
  ) {
    this.initStorage();
  }

  async initStorage() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  //LOGIN
  login(email: string, password: string) {
    const data = { email, password };

    return new Promise((resolve) => {
      this.http.post(`${URL}/user/login`, data).subscribe(async (res) => {
        //console.log(res);
        if (res['ok']) {
          await this.saveToken(res['token']);
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  //LOGOUT
  logout() {
    this.token = null;
    this.user = null;
    this.storage.clear();
    this.navController.navigateRoot('login', {animated: true});
  }

  //UPDATE USER
  updateUser(user: User) {
    const headers = new HttpHeaders({
      'x-token': this.token,
    });

    return new Promise((resolve) => {
      this.http
        .post(`${URL}/user/update`, user, { headers })
        .subscribe(async (res) => {
          //console.log(res);
          if (res['ok']) {
            await this.saveToken(res['token']);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }

  //REGISTER
  register(user: User) {
    return new Promise((resolve) => {
      this.http.post(`${URL}/user/createUser`, user).subscribe(async (res) => {
        //console.log(res);
        if (res['ok']) {
          await this.saveToken(res['token']);
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  //TOKEN
  async saveToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);

    await this.validateToken();
  }

  async loadToken() {
    this.token = (await this.storage.get('token')) || null;
  }

  async validateToken(): Promise<boolean> {
    await this.loadToken();

    if (!this.token) {
      this.navController.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>((resolve) => {
      const headers = new HttpHeaders({
        'x-token': this.token,
      });
      this.http.get(`${URL}/user/`, { headers }).subscribe(async (res) => {
        console.log(res);
        if (res['ok']) {
          this.user = res['user'];
          resolve(true);
        } else {
          this.navController.navigateRoot('/login');
          resolve(false);
        }
      });
    });
  }

  getUser() {
    // eslint-disable-next-line no-underscore-dangle
    if (!this.user._id) {
      this.validateToken();
    }
    return { ...this.user };
  }
}
