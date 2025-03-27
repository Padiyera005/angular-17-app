import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent { 
  @Input() username = '';
  @Output() addFav = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFav.emit(gameName);
  }

  games = [
    { id: 1, name: 'super mario' },
    { id: 2, name: 'mario cars' },
    { id: 3, name: 'luigi' },
  ];

  deportes = [
    { id: 1, name: 'fut' },
    { id: 2, name: 'vol' },
    { id: 3, name: 'cicl' },
  ];
  //metodo para obtener el id
  trackById(index: number, item: { id: number }): number {
    return item.id;
  }
  /*index: Es el índice del elemento actual en la lista (su posición en el array).
item: Es el elemento actual de la lista que se está iterando. En este caso, es un objeto que tiene una propiedad id.
El:number indica que tipo de dato se devueve por lo del tipado*/
}
