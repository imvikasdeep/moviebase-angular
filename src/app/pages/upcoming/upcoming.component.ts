import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { NgFor } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
    selector: 'app-upcoming',
    templateUrl: './upcoming.component.html',
    styleUrls: ['./upcoming.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, NgFor, MovieCardComponent]
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
