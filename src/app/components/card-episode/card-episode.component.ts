import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss'],
})
export class CardEpisodeComponent implements OnInit {

  @Input() episode;

  constructor() { }

  ngOnInit() {}

}
