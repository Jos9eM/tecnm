import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HeaderComponent, ProjectComponent, ProjectsComponent],
  exports: [HeaderComponent, ProjectsComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
