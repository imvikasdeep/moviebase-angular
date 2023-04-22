import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MovieCardComponent {

	@HostBinding('class') class = 'card';


	@Input('movie') movie !: IMovie

	
}
