import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';
import { Project, ProjectType, User } from '../../../../app/interfaces/interfaces';

@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.page.html',
  styleUrls: ['./research-products.page.scss'],
})
export class ResearchProductsPage implements OnInit {
  projects: Project[] = [];
  enabled = true;
  user: User = {};

  buttons: ProjectType[] = [
    {
      title: 'Otro',
      icon: 'diamond-outline',
      redirectTo: '',
    },
    {
      title: 'Tesis dirigida',
      icon: 'document-attach-outline',
      redirectTo: '',
    },
    {
      title: 'Prototipo',
      icon: 'construct-outline',
      redirectTo: 'research-products/prototype',
    },
    {
      title: 'IMPI',
      icon: 'briefcase-outline',
      redirectTo: 'research-products/impi',
    },
    {
      title: 'INDAutor',
      icon: 'document-lock-outline',
      redirectTo: '',
    },
    {
      title: 'Memoria',
      icon: 'albums-outline',
      redirectTo: '',
    },
    {
      title: 'Libro',
      icon: 'library-outline',
      redirectTo: '',
    },
    {
      title: 'Capitulo de Libro',
      icon: 'bookmark-outline',
      redirectTo: '',
    },
    {
      title: 'Articulo',
      icon: 'newspaper-outline',
      redirectTo: 'research-products/article',
    },
  ];

  constructor(
    private router: Router,
    private projectService: ProjectsService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();

    this.nextProjects(null, true);

    this.projectService.newProject.subscribe((project) => {
      this.projects.unshift(project);
    });
  }

  callFunction(route: string) {
    if (route.length > 0) {
      this.router.navigate([route]);
    }
    //console.log('button clicked');
  }

  refresh(event?) {
    this.nextProjects(event, true);
    this.enabled = true;
    this.projects = [];
  }

  nextProjects(event?, pull: boolean = false) {
    console.log(this.user);
        // eslint-disable-next-line no-underscore-dangle
    this.projectService.getProjects(pull, this.user._id).subscribe((response) => {
      console.log(response);
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
