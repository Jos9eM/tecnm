import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Project, User } from 'src/app/interfaces/interfaces';
// eslint-disable-next-line max-len
import {
  acknowledgement,
  articleState,
  authorPosition,
  countries,
  porpouse,
  priority,
  projectTypeArticulo,
  sector,
  subSectorAdmin,
  subSectorAlimento,
  subSectorManu,
  subSectorMedioAmb,
  subSectorPeda,
  subSectorTecInfo,
} from 'src/app/interfaces/menuOptions';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  priorityMenu = priority;
  authorPosMenu = authorPosition;
  articleStateMenu = articleState;
  propouseMenu = porpouse;
  countriesMenu = countries;
  projectMenu = projectTypeArticulo;
  sectorMenu = sector;
  subSectorMenu = [];
  prioriryMenu = priority;
  acknowledgeMenu = acknowledgement;

  articleProject: Project = {
    title: '',
    publisherName: '',
    authors: [],
    authorPosition: '',
    porpouse: '',
    summary: '',
    objective: '',
    characteristics: '',
    currentState: '',
    impiClass: '',
    date: '',
    editorial: '',
    country: '',
    sector: '',
    subSector: '',
    priority: '',
    acknowledgement: '',
    projectType: '',
    initialPage: '',
    finalPage: '',
    volume: '',
    registerIndex: '',
    issn: '',
    url: '',
    productUser: '',
    evidence: [],
    projectId: '',
    created: '',
  };

  constructor(
    private projectService: ProjectsService,
    private route: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  handleAuthorPos(e) {
    this.articleProject.authorPosition = e.target.value;
  }

  handlePorpouse(e) {
    this.articleProject.porpouse = e.target.value;
  }

  handleArticleState(e) {
    this.articleProject.currentState = e.target.value;
  }

  handleCountry(e) {
    this.articleProject.country = e.target.value;
  }

  handlePriority(e) {
    this.articleProject.priority = e.target.value;
  }

  handleAcknowledgement(e) {
    this.articleProject.acknowledgement = e.target.value;
  }

  handleArticleType(e) {
    this.articleProject.projectType = e.target.value;
  }

  handleSector(e) {
    if (e.target.value === 'Administración') {
      this.subSectorMenu = subSectorAdmin;
    } else if (e.target.value === 'Alimentos') {
      this.subSectorMenu = subSectorAlimento;
    } else if (e.target.value === 'Manufactura') {
      this.subSectorMenu = subSectorManu;
    } else if (e.target.value === 'Medio Ambiente') {
      this.subSectorMenu = subSectorMedioAmb;
    } else if (e.target.value === 'Pedagogía') {
      this.subSectorMenu = subSectorPeda;
    } else if (
      e.target.value === 'Tecnologías de la Información y Comunicaciones'
    ) {
      this.subSectorMenu = subSectorTecInfo;
    }
    this.articleProject.sector = e.target.value;
  }

  handleSubSector(e) {
    this.articleProject.subSector = e.target.value;
  }

  createEvidence() {}

  async createProject(fCreate: NgForm) {
    if (fCreate.invalid) {
      return;
    }

    this.articleProject.projectId = 'Articulo';
    this.articleProject.date = '04/07/2018';
    this.articleProject.evidence = ['asdasd.jpg'];
    console.log(this.articleProject);

    const created = await this.projectService.createProject(
      this.articleProject
    );

    if (created) {
      this.articleProject = {};
      this.route.navigateByUrl('/research-products');
    } else {
      this.presentToast('No fue posible crear el producto');
    }
  }

  async presentToast(messageToast: string) {
    const toast = await this.toastController.create({
      message: messageToast,
      duration: 1800,
      position: 'bottom',
    });

    await toast.present();
  }
}
