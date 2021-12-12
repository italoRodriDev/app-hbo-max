import { Component, OnInit } from '@angular/core';
import { isPlatform, ModalController, NavController } from '@ionic/angular';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';
import { SwiperOptions } from 'swiper';
import { DetailMoviePage } from '../detail-movie/detail-movie.page';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  isMobile = isPlatform('mobile');
  segmentPage: string = 'DESTACADOS';
  configSwipeMovie: SwiperOptions = { autoplay: true, loop: true, slidesPerView: this.isMobile ? 1.5 : 6.1, spaceBetween: 1, pagination: true };

  listTopMovies: Array<any> = [];
  listTopSeries: Array<any> = [];
  listPopularMovies: Array<any> = [];
  listPopularTv: Array<any> = [];

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private apiMovieDbService: ApiMovieDbService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getDataService();
  }

  // -> Recuperando dados do servico
  getDataService() {

    this.apiMovieDbService.getTopMovies()
      .then((data) => {

        this.listTopMovies = data.results;

      });

    this.apiMovieDbService.getTopTv()
      .then((data) => {

        this.listTopSeries = data.results;

      });

    this.apiMovieDbService.getPopularMovies()
      .then((data) => {

        this.listPopularMovies = data.results;
      });

    this.apiMovieDbService.getPopularTv()
      .then((data) => {

        this.listPopularTv = data.results;
      });

  }

  // -> Recuperando segmento da pagina
  getSegmentPage(ev) {

    let value = ev.detail.value;
    this.segmentPage = value;

  }

  // -> Clique no filme/serie
  async onClickMovie(movie, type) {

    const modal = await this.modalCtrl.create({
      component: DetailMoviePage,
      componentProps: {
        movie: movie,
        type: type
      },
      mode: 'ios'
    });
    modal.present();

  }

  // -> Voltar
  onDismiss() {

    this.navCtrl.navigateBack('/tabs/tab-home');
  }

}
