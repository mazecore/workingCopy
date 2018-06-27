import { Component, OnInit } from '@angular/core';
import { gallery } from '../data/gallery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  gallery:Array<any> = gallery;

  constructor() { }

  ngOnInit() {
  }

}
