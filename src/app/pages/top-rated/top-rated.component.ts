import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {
  movieList!: IMovie[];

	params = {
		page: 1
	}

	constructor(
		private _movieService: MoviesService
	) { }

	ngOnInit(): void {

		this._movieService.getMovies('top-rated', this.params).subscribe(res => {

			this.movieList = res.results

		})

	}
}
