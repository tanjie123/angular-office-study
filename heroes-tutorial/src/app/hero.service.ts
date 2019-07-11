import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heros: Hero[];
  constructor(private messageService: MessageService) {
    this.heros = HEROES;
  }

  getAll() {
    return this.heros;
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('所有英雄已被获取。');
    return of(HEROES);
  }

  getHero(id: number) {
    this.messageService.add('获取ID为' + id + "英雄。");
    return of(HEROES.find(hero => hero.id === id));
  }
}
