import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { environment } from 'src/environments/environment';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [RouterLink]
})
export class MovieCardComponent {

    @HostBinding('class') class = 'card';


    @Input('movie') movie !: IMovie


}
