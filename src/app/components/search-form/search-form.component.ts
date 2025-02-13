import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
