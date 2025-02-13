import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';

import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, MovieCardComponent]
})
export class TrendingComponent {

	movieList!: IMovie[];

	params = {
		page: 1
	}

	constructor(
		private _movieService: MoviesService
	) { }

	ngOnInit(): void {

		this._movieService.getMovies('trending', this.params).subscribe(res => {

			this.movieList = res.results

		})

	}

}
