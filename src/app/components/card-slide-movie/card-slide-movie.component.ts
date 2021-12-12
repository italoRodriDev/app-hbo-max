import { Component, Input, OnInit } from '@angular/core';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-card-slide-movie',
  templateUrl: './card-slide-movie.component.html',
  styleUrls: ['./card-slide-movie.component.scss'],
})
export class CardSlideMovieComponent implements OnInit {

  @Input() movie;
  isMobile = isPlatform('mobile');

  constructor() { }

  ngOnInit() {}

}
