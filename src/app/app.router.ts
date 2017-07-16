import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ItemListComponent } from './components/item-list/item-list.component'
import { HeroAttributeComponent } from './components/hero-attribute/hero-attribute.component'

export const router: Routes = [
    {path: '' , redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    {path: 'hero-list', component: HeroListComponent },
    {path: 'item-list', component: ItemListComponent },
    {path: 'hero/:name', component: HeroDetailComponent},
    {path: 'hero/attributes', component: HeroAttributeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);