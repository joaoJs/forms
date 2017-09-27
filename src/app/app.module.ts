import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ValidationsComponent } from './validations/validations.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { QuoteComponent } from './quotelist/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationsComponent,
    QuotelistComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
