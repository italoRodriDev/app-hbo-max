import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from './../../../components/shared-components.module';
import { SharedDirectivesModule } from './../../../directives/shared-directives.module';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule { }
