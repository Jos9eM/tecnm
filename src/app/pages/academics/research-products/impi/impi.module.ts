import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpiPageRoutingModule } from './impi-routing.module';

import { ImpiPage } from './impi.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ImpiPage]
})
export class ImpiPageModule {}
