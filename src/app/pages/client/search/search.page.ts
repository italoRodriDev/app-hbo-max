import { Component, OnInit } from '@angular/core';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listPopularMovies: Array<any> = [];

  constructor(
    private apiMovieDb: ApiMovieDbService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getDataService();
  }

  getDataService() {

    this.apiMovieDb.getPopularMovies()
      .then((data) => {

        this.listPopularMovies = data.results;

      });

  }

}
