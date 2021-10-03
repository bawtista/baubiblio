import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Sidebar } from 'primeng/sidebar';
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
  isMenuVisible: boolean;
  isLogin: boolean;
  
  @ViewChild('sidebar', {static: true})
  sidebar: Sidebar;
  
  numbers = Array(150).fill(0).map((x,i)=>i);

  constructor(
    private usuariosService: UsuarioService,
    private bibliotecaService: BibliotecaService,
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      }
    });
    //usuariosService.loginUsuario(user);
  
    usuariosService.loginUsuario("bautistaperez3m@gmail.com", "aabbcc").then(e => {
      console.log(e);
      console.log(usuariosService.usuario);

      bibliotecaService.getBiblioteca("4XIAiKavG9yEjPqsGJNl");
    });
    

    //usuariosService.crearUsuario("aaa@bbb.com", "wwwaaa");

  }
}
