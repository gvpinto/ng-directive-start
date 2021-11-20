import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-hightlight.directive';
import { BetterHightlightDirective } from './better-highlight/better-hightlight.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlightDirective, BetterHightlightDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
