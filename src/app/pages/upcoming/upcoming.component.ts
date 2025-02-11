import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-upcoming',
    templateUrl: './upcoming.component.html',
    styleUrls: ['./upcoming.component.scss'],
    standalone: false
})
export class UpcomingComponent {

	movieList!: IMovie[];

	params = {
		page: 1
	}

	constructor(
		private _movieService: MoviesService
	) { }

	ngOnInit(): void {

		this._movieService.getMovies('upcoming', this.params).subscribe(res => {

			this.movieList = res.results

		})

	}
}
