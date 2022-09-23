import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBackComponent } from './card-back';
import { CardFrontComponent } from './card-front';



@NgModule({
  declarations: [CardFrontComponent, CardBackComponent],
  imports: [
    CommonModule
  ],
  exports: [CardFrontComponent, CardBackComponent]
})
export class CardModule { }
