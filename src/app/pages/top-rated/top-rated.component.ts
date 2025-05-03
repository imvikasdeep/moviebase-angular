import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-rated',
    templateUrl: './top-rated.component.html',
    styleUrls: ['./top-rated.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, MovieCardComponent, RouterLink]
})
export class TopRatedComponent {

    movieList!: IMovie[];

    params = {
        page: 1
    }

    constructor(
        private _movieService: MoviesService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this.route.queryParams.subscribe(params => {
            this.params.page = parseInt(params['page'] || '1', 10);
            this._movieService.getMovies('top-rated', this.params).subscribe(res => {
                this.movieList = res.results
            })
        })


    }

    updateParam(page: number) {

        if (page < 1) return;

        this.params.page = page;
        this.router.navigate([], {
            relativeTo: this.route, queryParams: { page: page }, queryParamsHandling: 'merge'
        });
    }

}
