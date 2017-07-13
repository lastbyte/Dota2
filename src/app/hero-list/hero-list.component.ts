import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  errMsg = '';
  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroService
    .getHeroList()
    .subscribe(
      h => this.heroes = h,
      e => this.errMsg = e
    );
  }

}
