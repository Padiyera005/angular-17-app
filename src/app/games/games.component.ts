import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent { 
  @Input() username= '';
 games = [{
 id:1,
  name:'super mario'
 },
 {
  id:2,
   name:'mario cars'
  },
  {
    id:3,
     name:'luigi'
    },
 ]
}
