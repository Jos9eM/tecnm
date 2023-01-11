import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from '../../../../app/interfaces/interfaces';

@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.page.html',
  styleUrls: ['./research-products.page.scss'],
})
export class ResearchProductsPage implements OnInit {
  projects: Project[] = [];
  enabled = true;

  constructor(
    private router: Router,
    private projectService: ProjectsService
  ) {}

  ngOnInit() {
    this.nextProjects();
  }

  callFunction() {
    this.router.navigate(['research-products/article']);
    //console.log('button clicked');
  }

  refresh(event?){
    this.nextProjects(event, true);
    this.enabled = true;
    this.projects = [];
  }

  nextProjects(event?, pull: boolean = false) {
    this.projectService.getProjects(pull).subscribe((response) => {
      //console.log(response);
      this.projects.push(...response.projects);

      if (event) {
        event.target.complete();

        if (response.projects.length === 0) {
          this.enabled = false;
        }
      }
    });
  }
}
