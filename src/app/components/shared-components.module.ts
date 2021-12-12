import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CardBigMovieComponent } from './card-big-movie/card-big-movie.component';
import { CardEpisodeComponent } from './card-episode/card-episode.component';
import { CardMovieMylistComponent } from './card-movie-mylist/card-movie-mylist.component';
import { CardMovieSearchComponent } from './card-movie-search/card-movie-search.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { CardSlideMovieComponent } from './card-slide-movie/card-slide-movie.component';

@NgModule({
  declarations: [
    CardMovieComponent,
    CardSlideMovieComponent,
    CardMovieSearchComponent,
    CardMovieMylistComponent,
    CardEpisodeComponent,
    CardBigMovieComponent
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [
    CardMovieComponent,
    CardSlideMovieComponent,
    CardMovieSearchComponent,
    CardMovieMylistComponent,
    CardEpisodeComponent,
    CardBigMovieComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
