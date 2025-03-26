import { Component } from '@angular/core'; //este es el decorador de nuestro componente
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
//Aquí configuro mi componete que es un decorador
@Component({
  selector: 'app-root',//etiqueta que queremos utilizar
  standalone: true,//si quiero utilizar un modulo dentro de este componente
  imports: [RouterOutlet,UserComponent],//aqui meto todos los modulos que quiero utilizar
  templateUrl: './app.component.html',//es lo que renderiza en el navegador
  styleUrl: './app.component.css'//es el estilo que le doy a mi componente
})
//el decorador afecta a esta clase
export class AppComponent {
  city = 'Madrid';//variable que utilizo en mi template
}
