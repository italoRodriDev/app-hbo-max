import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedComponentsModule } from './../../../components/shared-components.module';
import { SharedDirectivesModule } from './../../../directives/shared-directives.module';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    LazyLoadImageModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule { }
