import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-research-products',
  templateUrl: './research-products.page.html',
  styleUrls: ['./research-products.page.scss'],
})
export class ResearchProductsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callFunction() {
    this.router.navigate(['research-products/article']);
    //console.log('button clicked');
  }
}
