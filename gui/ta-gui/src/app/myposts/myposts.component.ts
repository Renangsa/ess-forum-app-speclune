import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  constructor() { }
  createPost = false;
  ngOnInit(): void {
  }

  toglleCreatePost():void{
    this.createPost = !this.createPost;
  }

}