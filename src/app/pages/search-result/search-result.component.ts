import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    standalone: false
})
export class SearchResultComponent {

    movieList!: IMovie[];
    query: string = '';

    params = {
        page: 1,
        query: ''
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private _movieService: MoviesService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
            this.query = params["query"];

            this.params.query = this.query

            this._movieService.getMovies('search', this.params).subscribe(res => {
                this.movieList = res.results;
            })

        })
    }
}
