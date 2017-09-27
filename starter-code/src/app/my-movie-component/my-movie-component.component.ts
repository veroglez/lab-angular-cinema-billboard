import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/Cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [MoviesService]
})

export class MyMovieComponentComponent implements OnInit {
  moviesId:Number
  constructor(private route: ActivatedRoute, private theCinema: MoviesService) { }
  movies = this.theCinema.movies

  ngOnInit() {
    this.route.params
      .subscribe((params) => { console.log(params);this.moviesId = Number(params['id'])});
  }

}
