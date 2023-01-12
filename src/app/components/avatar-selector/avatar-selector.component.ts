import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSelected = new EventEmitter<string>();
  @Input() actualAvataer = 'av-1.png';

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true,
    },
    {
      img: 'av-2.png',
      seleccionado: false,
    },
    {
      img: 'av-3.png',
      seleccionado: false,
    },
    {
      img: 'av-4.png',
      seleccionado: false,
    },
    {
      img: 'av-5.png',
      seleccionado: false,
    },
    {
      img: 'av-6.png',
      seleccionado: false,
    },
    {
      img: 'av-7.png',
      seleccionado: false,
    },
    {
      img: 'av-8.png',
      seleccionado: false,
    },
  ];

  avatarSlide = {
    slidesPerView: 3,
  };

  constructor() { }

  ngOnInit() {
    this.avatars.forEach(avatar => avatar.seleccionado = false);
    for(const avatar of this.avatars) {
      if(avatar.img === this.actualAvataer){
        avatar.seleccionado = true;
      }
    }
  }

  avatarClick(avatar) {
    this.avatars.forEach((av) => (av.seleccionado = false));
    avatar.seleccionado = true;
    //console.log(avatar.img);
    this.avatarSelected.emit(avatar.img);
  }

}
