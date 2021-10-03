import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  modoCrearCuenta: boolean

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
        .body.style.background = 'linear-gradient(to right, rgb(170, 170, 255), #6e48aa)';
  }

}
