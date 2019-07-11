import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    //this.heroes = this.heroService.getAll();
    this.heroService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  }

  ngOnInit() {
  }

  onSelect(hero) {
    this.messageService.add(hero.name + "英雄已经被选中了。");
    this.selectedHero = hero;
  }

}
