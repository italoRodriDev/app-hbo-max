import { Directive, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { AnimationController, AnimationDirection, DomController, isPlatform } from '@ionic/angular';

@Directive({
  selector: '[appHideToolbar]'
})
export class HideToolbarDirective {

  @Input('appHideToolbar') toolbar: any;
  toolbarHeight = isPlatform('ios') ? 44 : 46;
  children: any;
  animation: any;
  lastScrollTop: number;

  constructor(
    private animCtrl: AnimationController,
    private domCtrl: DomController,
    private renderer: Renderer2
  ) { }

  ngAfterContentInit() {
    this.toolbar = this.toolbar.el;
    this.children = this.toolbar.children;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll(ev) {

    const scrollTop: number = ev.detail.scrollTop;
    const animation = this.animCtrl.create()
    .addElement(this.toolbar)
    .duration(300)
    .direction('reverse')
    .from('opacity', 0)
    .to('opacity', 1)
    .from('opacity', 1)
    .to('opacity', 0);
  
    this.domCtrl.write(() => {

      if (scrollTop >= 485) {

        this.renderer.setStyle(this.toolbar, 'background-color', 'var(--ion-background-color)');
        animation.play();
      } else if(scrollTop <= 490 ) {
        this.renderer.setStyle(this.toolbar, 'background-color', 'transparent');
        animation.stop();
      }

    });

  }

}
