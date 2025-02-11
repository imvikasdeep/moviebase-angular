import { Component, HostBinding } from '@angular/core';
import { IGenre } from 'src/app/interfaces/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-genere-list',
    templateUrl: './genere-list.component.html',
    styleUrls: ['./genere-list.component.scss'],
    standalone: false
})
export class GenereListComponent {
    
	@HostBinding('class') class = 'submenu';

    generes:IGenre[] = [];

    constructor(
        private _movieService: MoviesService
    ) {

    }

    ngOnInit():void {

        this._movieService.getMovieGenres().subscribe(res => {
            this.generes = res.genres;  
            console.log(res.genres);
                   
        })

    }

}
