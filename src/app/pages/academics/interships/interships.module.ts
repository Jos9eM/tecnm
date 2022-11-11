import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntershipsPageRoutingModule } from './interships-routing.module';

import { IntershipsPage } from './interships.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntershipsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IntershipsPage]
})
export class IntershipsPageModule {}
