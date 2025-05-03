import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from 'src/app/interfaces/cast.model';
import { IMovie, IMovieDetail, IVideo } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { PersonListComponent } from '../../components/person-list/person-list.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, PersonListComponent, MovieCardComponent]
})
export class MovieDetailComponent {

    movie!: IMovieDetail;
    video: string = '';
    similarMovies: IMovie[] = [];
    casts: IPerson[] = [];
    movieId: number = 0


    constructor(
        private activatedRoute: ActivatedRoute,
        private _movieService: MoviesService
    ) {

    }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            this.movieId = params["id"];

            this._movieService.getMovieDetails(this.movieId).subscribe(res => {
                this.movie = res;

                this._movieService.getMovieVideos(this.movieId).subscribe({
                    next: res => {
                        let trailer = res.results.find(v => v.type == 'Trailer');
                        if (trailer) {
                            this.video = `https://www.youtube.com/watch?v=${trailer.key}`
                        }
                    }
                })
            })

            this._movieService.getSimilarMovies(this.movieId).subscribe(res => {
                this.similarMovies = res.results.slice(0, 5);
            })

            this._movieService.getMovieCast(this.movieId).subscribe(res => {
                this.casts = res.cast;
            })
        })

    }
}
