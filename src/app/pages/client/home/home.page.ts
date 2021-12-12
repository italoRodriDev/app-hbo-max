import { Component, OnInit } from '@angular/core';
import { isPlatform, ModalController } from '@ionic/angular';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';
import { SwiperOptions } from 'swiper';
import { DetailMoviePage } from './../detail-movie/detail-movie.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isMobile = isPlatform('mobile');
  configSwipeSlidesMovies: SwiperOptions = { loop: true, slidesPerView: this.isMobile ? 1 : 7.1, spaceBetween: 1, navigation: false, pagination: false, freeMode: true, initialSlide: 0 };
  configSwipeMovie: SwiperOptions = { loop: true, slidesPerView: this.isMobile ? 2.1 : 7.1, spaceBetween: 1, navigation: false, pagination: false, freeMode: true, initialSlide: 0 };

  listPopularMovies: Array<any> = [];
  listPopularTv: Array<any> = [];

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

}
