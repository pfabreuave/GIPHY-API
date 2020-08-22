import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GipencComponent } from './gipenc/gipenc.component';
import { GipbusComponent } from './gipbus/gipbus.component';
import { GipimgComponent } from './gipimg/gipimg.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    GipencComponent,
    GipbusComponent,
    GipimgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
