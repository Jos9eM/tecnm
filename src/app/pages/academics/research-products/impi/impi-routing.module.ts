import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpiPage } from './impi.page';

const routes: Routes = [
  {
    path: '',
    component: ImpiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpiPageRoutingModule {}
