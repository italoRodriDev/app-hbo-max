import { LoadingPage } from './../../pages/loading/loading.page';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieDbService {

  modalLoading: any = null;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient
  ) { }

  getGenderTv() {

    return new Promise<any>((resolve, reject) => {

      this.http.get('https://api.themoviedb.org/3/genre/tv/list?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR')
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  getPopularMovies() {

    this.showModalLoading();
    return new Promise<any>((resolve, reject) => {

      this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR')
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  getTopMovies() {

    return new Promise<any>((resolve, reject) => {

      this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR')
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  getPopularTv() {

    return new Promise<any>((resolve, reject) => {

      this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR')
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  getTopTv() {

    return new Promise<any>((resolve, reject) => {

      this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR')
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  getSeassonSerie(idSerie, idSeason) {

    return new Promise<any>((resolve, reject) => {

      this.http.get(`https://api.themoviedb.org/3/tv/${idSerie}/season/${idSeason}?api_key=636ce47c10891cde749d7fa4d9e05261&language=pt-BR`)
        .subscribe(async res => {

          resolve(res);

        }, async error => {

          reject(error);

        });

    });

  }

  async showModalLoading() {

    this.modalLoading = await this.modalCtrl.create({
      component: LoadingPage,
      mode: 'ios'
    });

    this.modalLoading.present();

  }

}
