import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
    {path: '' , redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    {path: 'hero', component: HeroListComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);