import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  toggleMenu = false;
  
  ngOnInit(): void {
  }
  toggle():void{
    this.toggleMenu = !this.toggleMenu;
  }
}
