import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// for routing
import { routes } from './app.router';


// own imports
import { MaterializeModule } from 'angular2-materialize';


//own services

import { HeroesService } from './services/heroes.service';

// for components
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    routes
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
