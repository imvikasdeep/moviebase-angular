import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	moviesList: {type: string, movies: IMovie[]}[] = [
		{
			type: 'trending',
			movies: []
		},
		{
			type: 'top-rated',
			movies: []
		},
		{
			type: 'upcoming',
			movies: []
		}
	]

	params = {
		page: 1
	}

	constructor(
		private _movieService: MoviesService
	) {}

	ngOnInit():void {

		this._movieService.getTrendingMovies(this.params).subscribe(res => {
			
			this.moviesList[0].movies = res.results.slice(0, 5)	
			
		})
		
		this._movieService.getUpcomingMovies(this.params).subscribe(res => {
			
			console.log(res);
			
			// this.moviesList[0].movies = res.results.slice(0, 5)	
			
		})
		
	}

}
