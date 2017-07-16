import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// for routing
import { routes } from './app.router';


// own imports
import { MaterializeModule } from 'angular2-materialize';


// own services

import { HeroesService } from './services/heroes.service';

// for components
import { AppComponent } from './app.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeroAttributeComponent } from './components/hero-attribute/hero-attribute.component';
import { AttributeFilterPipe } from './pipes/attribute-filter.pipe';
import { MatchHeightDirective } from './directives/match-height.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemListComponent,
    HeroAttributeComponent,
    AttributeFilterPipe,
    MatchHeightDirective,
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
