import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { MyCardComponent } from './my-card/my-card.component';
import { RatingComponent, RatingService } from './rating/rating.component';


@NgModule({
  declarations: [
    MyCardComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [RatingService],
  entryComponents: [MyCardComponent],
})
export class AppModule {
  constructor(private injector: Injector) {

    const strategyFactory = new ElementZoneStrategyFactory(MyCardComponent, this.injector);
    const cardElement = createCustomElement(MyCardComponent, { injector: this.injector, strategyFactory });
    customElements.define('my-card', cardElement);
  }

  ngDoBootstrap() {
  }
}
