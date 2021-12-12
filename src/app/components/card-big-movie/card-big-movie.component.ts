import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-big-movie',
  templateUrl: './card-big-movie.component.html',
  styleUrls: ['./card-big-movie.component.scss'],
})
export class CardBigMovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {}

}
