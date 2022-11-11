import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchProductsPage } from './research-products.page';

const routes: Routes = [
  {
    path: '',
    component: ResearchProductsPage
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchProductsPageRoutingModule {}