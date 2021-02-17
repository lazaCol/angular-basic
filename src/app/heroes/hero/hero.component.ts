import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent{
    nombre: string = 'Ironman';
    edad: number = 28;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarAge(): void{
        this.edad = 20;
    }
}