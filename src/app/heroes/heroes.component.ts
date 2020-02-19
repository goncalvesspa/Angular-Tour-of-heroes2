import { Component, OnInit, /*  OnChanges, Input  */ } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
/* import { from } from 'rxjs';  */


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  trocaName(){
    this.hero.name = '';
  }

  selectedHero: Hero;
  onSelect(hero: Hero):void {
    this.selectedHero = hero;
}
  //hero = 'Windstorm';

  constructor() { }

  ngOnInit() {

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