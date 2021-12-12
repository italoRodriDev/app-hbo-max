import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HideToolbarDirective } from './hide-toolbar.directive';

@NgModule({
  declarations: [
    HideToolbarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideToolbarDirective
  ],
})
export class SharedDirectivesModule { }
