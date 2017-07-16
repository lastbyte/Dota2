import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  errMsg = '';
  hoveredHero: Hero = null;
  visible: String = 'invisible'
  constructor(private heroService: HeroesService) { }

  ngOnInit() {
    this.heroService
    .getHeroList()
    .subscribe(
      data => { this.heroes = data
        console.log(this.heroes)
    }
    );
  }

  showname(hero: Hero , $event) {
    this.hoveredHero = hero;
    this.visible = $event.type === 'mouseover' ? 'visible' : '';

  }

  hidename($event) {
    this.hoveredHero = null;
    this.visible = $event.type === 'mouseout' ? 'invisible' : '';
  }

}
