import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResearchProductsPageRoutingModule } from './research-products-routing.module';

import { ResearchProductsPage } from './research-products.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResearchProductsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResearchProductsPage]
})
export class ResearchProductsPageModule {}
