import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

    constructor(
        private router: Router
    ) { }

    searchMovies(query: string) {
        if (query)
            this.router.navigate(['/search', query])
    }

}
