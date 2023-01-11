import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Project[]= [];

  constructor() { }

  ngOnInit() {
    console.log(this.projects);
  }

}
