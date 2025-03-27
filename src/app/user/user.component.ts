import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username= 'yera';
isLoggedIn = false;
favGame = '';

getFavorite(gameName: string){
  this.favGame = gameName;
}

changestate(){
 if(this.isLoggedIn === true) {
   this.isLoggedIn = false;
 }else{
   this.isLoggedIn = true;
 }
}

greet(){
  alert('Hello');
}


}
