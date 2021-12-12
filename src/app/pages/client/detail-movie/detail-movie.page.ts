import { Component, Input, OnInit } from '@angular/core';
import { isPlatform, ModalController } from '@ionic/angular';
import { ApiMovieDbService } from 'src/app/services/api/api-movie-db.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.page.html',
  styleUrls: ['./detail-movie.page.scss'],
})
export class DetailMoviePage implements OnInit {

  @Input() movie;
  @Input() type;

  isMobile = isPlatform('mobile');
  configSwipeMovie: SwiperOptions = { slidesPerView: this.isMobile ? 2.1 : 7.1, spaceBetween: 1, navigation: false, pagination: false, freeMode: true, initialSlide: 0 };

  currentSeason: string = null;

  toggleElenco: boolean = false;
  toggleProdutores: boolean = false;
  toggleDiretores: boolean = false;
  toggleRoteiristas: boolean = false;
  toggleInfoClass: boolean = false;

  listMovies: Array<any> = [];
  listSeason: Array<any> = [1, 2, 3];
  listEpisodes: Array<any> = [];

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

        this.listMovies = data.results;
      });

  }

  // -> Clique nos semelhantes
  async onClickMovie(movie) {

    this.onDismiss();

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
  onClickButtonInfo(type) {

    switch (type) {
      case 'ELENCO':
        this.toggleElenco == false
          ? this.toggleElenco = true
          : this.toggleElenco = false;
        break;
      case 'PRODUTORES':
        this.toggleProdutores == false
          ? this.toggleProdutores = true
          : this.toggleProdutores = false;
        break;
      case 'DIRETORES':
        this.toggleDiretores == false
          ? this.toggleDiretores = true
          : this.toggleDiretores = false;
        break;
      case 'ROTEIRISTAS':
        this.toggleRoteiristas == false
          ? this.toggleRoteiristas = true
          : this.toggleRoteiristas = false;
        break;
      case 'INFO_CLASS':
        this.toggleInfoClass == false
          ? this.toggleInfoClass = true
          : this.toggleInfoClass = false;
        break;
    }

  }

  // -> Recuperando segmento da temporada escolhida
  getSegmentSeason(ev){

    let season = ev.detail.value;
    this.currentSeason = null;

    this.apiMovieDbService.getSeassonSerie(this.movie.id, season)
    .then((data) => {

      this.currentSeason = data?.name;
      this.listEpisodes = data?.episodes;

    });
    
  }

  // -> Voltar
  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
