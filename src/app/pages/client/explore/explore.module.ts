import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { SharedComponentsModule } from './../../../components/shared-components.module';
import { SharedDirectivesModule } from './../../../directives/shared-directives.module';
import { ExplorePageRoutingModule } from './explore-routing.module';
import { ExplorePage } from './explore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    SwiperModule
  ],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
