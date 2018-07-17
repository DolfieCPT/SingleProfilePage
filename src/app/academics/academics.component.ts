import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  ngOnInit() {
  }

}
