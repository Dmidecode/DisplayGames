import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from '../Route/app-routing.module';
import { HomeComponent } from '../Component/Home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from '../Layout/layout.component';
import { SharedModule } from './shared.module';
import { KonamiDirective } from '../Directive/konami.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    KonamiDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
