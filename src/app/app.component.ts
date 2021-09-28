import { Component } from '@angular/core';
import { Usuario } from './core/models/usuario.model';
import { BibliotecaService } from './core/services/biblioteca.service';
import { UsuarioService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baubiblio';

  constructor(
    private usuariosService: UsuarioService,
    private bibliotecaService: BibliotecaService
  ) {
    
    //usuariosService.loginUsuario(user);
  
    usuariosService.loginUsuario("bautistaperez3m@gmail.com", "aabbcc").then(e => {
      console.log(e);
      console.log(usuariosService.usuario);

      bibliotecaService.getBiblioteca("4XIAiKavG9yEjPqsGJNl");
    });
    

    //usuariosService.crearUsuario("aaa@bbb.com", "wwwaaa");

  }
}
