import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      redirectTo: '/research-products',
    },
    {
      icon: 'people-circle-outline',
      name: 'Estancias',
      redirectTo: '/interships',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goProfile() {
    this.router.navigate(['/profile']);
  }
}
