import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SwiperModule } from 'swiper/angular';
import { SharedComponentsModule } from './../../../components/shared-components.module';
import { SharedDirectivesModule } from './../../../directives/shared-directives.module';
import { DetailMoviePageRoutingModule } from './detail-movie-routing.module';
import { DetailMoviePage } from './detail-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMoviePageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    LazyLoadImageModule,
    SwiperModule
  ],
  declarations: [DetailMoviePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailMoviePageModule { }
