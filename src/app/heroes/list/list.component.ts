import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent  {

  heroes: string[] = ['Ironman', 'Spiderman', 'Batman','Superman'];
  heroesDe: string[] = [];

  deleteHero(): void {
    const heroDelete = this.heroes.shift();
    this.heroesDe.push(heroDelete);
  }

}
