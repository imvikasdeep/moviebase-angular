import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ContainerWrapperComponent } from '../../components/container-wrapper/container-wrapper.component';
import { HeadingComponent } from '../../components/heading/heading.component';

import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.scss'],
    imports: [ContainerWrapperComponent, HeadingComponent, MovieCardComponent]
})
export class GenreComponent {

    movieList!: IMovie[];
    genreId: number = 0;
    genreName: string = '';

    params = {
        page: 1,
        with_genres: 0
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private _movieService: MoviesService
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            this.genreId = params["id"];
            
            this.genreName = this.makeTitle(params["slug"])

            this.params.with_genres = this.genreId
            
            this._movieService.getMovies('genre', this.params).subscribe(res => {
                this.movieList = res.results;                
            })

        })

    }

    makeTitle(slug:String) {
        var words = slug.split('-');
      
        for (var i = 0; i < words.length; i++) {
          var word = words[i];
          words[i] = word.charAt(0).toUpperCase() + word.slice(1);
        }
      
        return words.join(' ');
      }
}
