import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntershipsPage } from './interships.page';

const routes: Routes = [
  {
    path: '',
    component: IntershipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntershipsPageRoutingModule {}
