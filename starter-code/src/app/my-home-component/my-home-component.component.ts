import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/Cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private theCinema: MoviesService) { }

  ngOnInit() {
  }

}
