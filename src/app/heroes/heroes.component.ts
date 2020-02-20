import { Component, OnInit, /*  OnChanges, Input  */ } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
/* import { from } from 'rxjs';  */


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROES;

  heroes: Hero[];

  /* hero: Hero = {
    id: 1,
    name: 'Windstorm'
  } */

  //heroText: string = 'teste';

 /*  trocaName(){
    this.hero.name = '';
  } */


 


  selectedHero: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
  //hero = 'Windstorm';

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }


  ngOnInit() {
    this.getHeroes();
   //this.selectedHero = { id: 1, name: 'Superman' };
  }

  
}


















/* 
export class HeroesComponent implements OnInit, OnChanges {
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }


  @Input() testes = 'maçã';

  constructor() { }

  ngOnInit() {

  }

mudaVariavel(){
 this.testes = 'banana';
}

} */