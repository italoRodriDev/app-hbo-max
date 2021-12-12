import { Component } from '@angular/core';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  listGenresTv: Array<any> = [];

  constructor(
    private apiMovelDbService: ApiMovieDbService
  ) { this.getDataService() }

  // -> Recuperando dados do servico
  getDataService(){

    this.apiMovelDbService.getGenderTv()
    .then((data) => {

      this.listGenresTv = data.genres

    });

  }

}
