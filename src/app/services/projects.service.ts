import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseProject, Project } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectIndex = 0;

  constructor(private http: HttpClient) {}

  getProjects(pull: boolean = false) {
    if (pull) {
      this.projectIndex = 0;
    }

    this.projectIndex++;
    return this.http.get<ResponseProject>(
      `${URL}/projects/?paginate=${this.projectIndex}`
    );
  }
}
