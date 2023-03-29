import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

	@Input('movie') movie !: IMovie

	POSTER_URL:string = environment.POSTER_URL+'w300'
	
}
