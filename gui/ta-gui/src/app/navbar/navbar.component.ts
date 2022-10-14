import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  toggleMenu = false;
  public userMaster:any;
  ngOnInit(): void {
   
  }
  toggle():void{
    this.toggleMenu = !this.toggleMenu;
  }
}
