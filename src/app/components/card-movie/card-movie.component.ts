import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() { }

}
