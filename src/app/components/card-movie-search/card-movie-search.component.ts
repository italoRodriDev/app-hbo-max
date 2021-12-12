import { isPlatform } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie-search',
  templateUrl: './card-movie-search.component.html',
  styleUrls: ['./card-movie-search.component.scss'],
})
export class CardMovieSearchComponent implements OnInit {

  @Input() movie;
  isMobile = isPlatform('mobile');

  constructor() { }

  ngOnInit() { }

}
