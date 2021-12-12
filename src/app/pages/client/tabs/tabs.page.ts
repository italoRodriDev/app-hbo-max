import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild(IonTabs) ionTabs: IonTabs;
  tabSelected: string = 'tab-home';

  constructor() {}

  onTabChange(ev){

    this.tabSelected = this.ionTabs.getSelected();
  }

}
