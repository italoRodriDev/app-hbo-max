import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';
import { DetailMoviePage } from '../detail-movie/detail-movie.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  listPopularMovies: Array<any> = [];
  listPopularTv: Array<any> = [];

  segmentPage: string = 'MINHA_LISTA';
  toggleFilmes: boolean = false;
  toggleSeries: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private apiMovieDbService: ApiMovieDbService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getDataService();
  }

  // -> Recuperando dados do servico
  getDataService() {

    this.apiMovieDbService.getPopularMovies()
      .then((data) => {

        this.listPopularMovies = data.results;
      });

    this.apiMovieDbService.getPopularTv()
      .then((data) => {

        this.listPopularTv = data.results;
      });

  }

  // -> Clique no filme/serie
  async onClickMovie(movie) {

    const modal = await this.modalCtrl.create({
      component: DetailMoviePage,
      componentProps: {
        movie: movie
      },
      mode: 'ios'
    });
    modal.present();

  }

  // -> Clique btn info
  onClickCategoryMyList(type) {

    switch (type) {
      case 'FILMES':
        this.toggleFilmes == false
          ? this.toggleFilmes = true
          : this.toggleFilmes = false;
        break;
      case 'SERIES':
        this.toggleSeries == false
          ? this.toggleSeries = true
          : this.toggleSeries = false;
        break;
    }

  }

  // -> Recuperando segmento da pagina
  getSegmentPage(ev) {

    let value = ev.detail.value;
    this.segmentPage = value;

  }

}
