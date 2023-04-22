import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from 'src/app/interfaces/cast.model';
import { IMovie, IMovieDetail } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
    
    movie!:IMovieDetail;
    similarMovies:IMovie[] = [];
    casts:IPerson[] = [];
    movieId:number = 0


    constructor(
        private activatedRoute: ActivatedRoute,
        private _movieService: MoviesService
    ) {

    }

    ngOnInit():void {

        this.activatedRoute.params.subscribe((params) => {
            this.movieId = params["id"];
            
            this._movieService.getMovieDetails(this.movieId).subscribe(res => {
                this.movie = res;
            })
        
            this._movieService.getSimilarMovies(this.movieId).subscribe(res => {
                this.similarMovies = res.results.slice(0, 7);
            })
    
            this._movieService.getMovieCast(this.movieId).subscribe(res => {
                this.casts = res.cast;
            })
        })
        
    }
}
