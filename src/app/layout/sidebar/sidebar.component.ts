import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  visible = true;

  @ViewChild('menubar', {static: true})
  menubar: Sidebar;

  constructor() { }

  ngOnInit(): void {
  }

}
