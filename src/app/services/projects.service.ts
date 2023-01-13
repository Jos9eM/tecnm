/* eslint-disable @typescript-eslint/dot-notation */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseProject, Project } from '../interfaces/interfaces';
import { UserService } from './user.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectIndex = 0;

  newProject = new EventEmitter<Project>();

  constructor(private http: HttpClient, private userService: UserService) {}

  getProjects(pull: boolean = false, userId: string) {
    if (pull) {
      this.projectIndex = 0;
    }

    this.projectIndex++;
    return this.http.get<ResponseProject>(
      `${URL}/projects/?paginate=${this.projectIndex}&userId=${userId}`
    );
  }

  createProject(project: Project) {
    const headers = new HttpHeaders({
      'x-token': this.userService.token,
    });

    return new Promise((resolve) => {
      this.http
        .post(`${URL}/projects`, project, { headers })
        .subscribe((res) => {
          console.log(res);

          if (res['ok']) {
            this.newProject.emit(res['project']);
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }
}
