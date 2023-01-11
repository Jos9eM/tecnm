import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

@NgModule({
  declarations: [HeaderComponent, ProjectComponent, ProjectsComponent, AvatarSelectorComponent],
  exports: [HeaderComponent, ProjectsComponent, AvatarSelectorComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule {}
