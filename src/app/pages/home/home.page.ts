import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Componente[] = [
    {
      icon: 'library-outline',
      name: 'Productos de Investigacion',
      redirectTo: '/research-products'
    },
    {
      icon: 'people-circle-outline',
      name: 'Estancias',
      redirectTo: '/interships'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
