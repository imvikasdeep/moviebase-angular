import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
// import { NgFor, NgIf } from '@angular/common';
import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, MovieCardComponent]
})
export class HomeComponent {

    moviesList: { type: string, movies: IMovie[] }[] = [
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
    ) { }

    ngOnInit(): void {

        this.moviesList.forEach((item, index) => {

            this._movieService.getMovies(item.type, this.params).subscribe(res => {

                this.moviesList[index].movies = res.results.slice(0, 7)

            })
        })

    }

}
