import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';//Configuración de la aplicación
import { AppComponent } from './app/app.component'; //Componente de toda la aplicación

bootstrapApplication(AppComponent, appConfig)//Carga componente y configuración y incializala
  .catch((err) => console.error(err));//coge los errores
