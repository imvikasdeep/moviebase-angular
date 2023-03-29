import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { IMovie } from '../interfaces/movie.model';
import { DatePipe } from '@angular/common';

@Injectable({
	providedIn: 'root'
})

export class MoviesService {

	API_URL = environment.API_BASE_URL

	constructor(
		private http: HttpClient,
		private datePipe:DatePipe
	) { }

	getTrendingMovies(params:any): Observable<{results: IMovie[]; total_pages: number; total_results: number}> {
		return this.http.get<{results: IMovie[]; total_pages: number; total_results: number}>(`${this.API_URL}trending/movie/week`, {params: params}).pipe(map((response:{results: IMovie[]; total_pages: number; total_results: number}) => {
			
			response.results.forEach(ele => {
				ele.release_year = this.datePipe.transform(ele.release_date, 'YYYY') ?? '';
			})

			return response;
		}), retry(2),catchError(this.handleError))
	}
	
	getUpcomingMovies(params:any): Observable<{results: IMovie[]}> {
		return this.http.get<{results: IMovie[]}>(`${this.API_URL}movie/upcoming`, {params: params}).pipe(map((response:{results: IMovie[]}) => {
			
			response.results.forEach(ele => {
				ele.release_year = this.datePipe.transform(ele.release_date, 'YYYY') ?? '';
			})

			return response;
		}), retry(2),catchError(this.handleError))
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error);
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong.
		  console.error(
			`Backend returned code ${error.status}, body was: `, error.error);
		}
		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}
}
