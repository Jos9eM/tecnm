import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-prototype',
  templateUrl: './prototype.page.html',
  styleUrls: ['./prototype.page.scss'],
})
export class PrototypePage implements OnInit {
  datos;
  bMostrar:boolean= false;
  constructor(private fb:FormBuilder) {
    this.datos=fb.group({
      nombre:['', [Validators.required, Validators.pattern('[A-Z]{2,4}')]],
      matricula:['', [Validators.required]],
      password: ['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern('[a-z]+@tese.edu.mx')]],
      telefono:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]]
    });
  }

  ngOnInit() {
  }
  
  onClick(piM:boolean){
    this.bMostrar= piM;
  }

}
