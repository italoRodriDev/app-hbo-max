import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie-mylist',
  templateUrl: './card-movie-mylist.component.html',
  styleUrls: ['./card-movie-mylist.component.scss'],
})
export class CardMovieMylistComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {}

}
