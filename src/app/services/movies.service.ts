import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { IMovieDetail, IMovieList } from '../interfaces/movie.model';
import { DatePipe } from '@angular/common';
import { IPerson } from '../interfaces/cast.model';

@Injectable({
	providedIn: 'root'
})

export class MoviesService {

	API_URL:String = environment.API_BASE_URL;
    IMAGE_PATH:string = environment.IMAGE_PATH;
    POSTER_URL:String = environment.POSTER_URL;
    PROFILE_IMAGE_PATH:String = environment.PROFILE_IMAGE_PATH;

    toHoursAndMinutes(totalMinutes:number) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
      }

	constructor(
		private http: HttpClient,
		private datePipe:DatePipe
	) { }

	getMovies(movie_category:string, params:any): Observable<IMovieList> {

		let API_URL = `${this.API_URL}trending/movie/week`;
		
		if(movie_category == 'upcoming')
			API_URL = `${this.API_URL}movie/upcoming`;

		if(movie_category == 'top-rated')
			API_URL = `${this.API_URL}movie/top_rated`;

		return this.http.get<IMovieList>(API_URL, {params: params}).pipe(map((response:IMovieList) => {
			
			response.results.forEach(ele => {
				ele.release_year = this.datePipe.transform(ele.release_date, 'YYYY') ?? '';
                
                if(!ele.poster_path) {
                    ele.poster_path = `${this.IMAGE_PATH}image-not-found.jpg`;
                }
			})

			return response;
		}), retry(2),catchError(this.handleError))
	}

    getMovieDetails(id:number): Observable<IMovieDetail> {
        return this.http.get<IMovieDetail>(`${this.API_URL}movie/${id}`).pipe(map((response:IMovieDetail) => {

            if(response.backdrop_path) {
                response.backdrop_path = `${this.POSTER_URL}original/${response.backdrop_path}`;
            } else {
                response.backdrop_path = `${this.IMAGE_PATH}image-not-found.jpg`;
            }
            response.release_year = this.datePipe.transform(response.release_date, 'YYYY') ?? '';
            
            let screen_time = this.toHoursAndMinutes(response.runtime);

            response.runtime_hours = screen_time.hours
            response.runtime_minutes = screen_time.minutes

            return response
        }),retry(2), catchError(this.handleError))
    }

    getSimilarMovies(id:number): Observable<IMovieList> {
        return this.http.get<IMovieList>(`${this.API_URL}movie/${id}/similar`).pipe(map((response:IMovieList) => {

            response.results.forEach(ele => {
				ele.release_year = this.datePipe.transform(ele.release_date, 'YYYY') ?? '';
                
                if(!ele.poster_path) {
                    ele.poster_path = `${this.IMAGE_PATH}image-not-found.jpg`;
                } else {
                    ele.poster_path = `${this.POSTER_URL}w300/${ele.poster_path}`;
                }
			})

            return response
        }),retry(2), catchError(this.handleError))
    }
    
    getMovieCast(id:number): Observable<{cast: IPerson[]}> {
        return this.http.get<{cast: IPerson[]}>(`${this.API_URL}movie/${id}/credits`).pipe(map((response:{cast: IPerson[]}) => {

            response.cast.forEach(ele => {

                if(ele.gender === 1)
                    ele.gender_type = 'female';

                if(ele.gender === 2)
                    ele.gender_type = 'male';

                if(!ele.profile_path) {
                    
                    ele.profile_path = `${this.IMAGE_PATH}profile-placeholder-female.jpg`;

                    if(ele.gender === 2)
                        ele.profile_path = `${this.IMAGE_PATH}profile-placeholder-male.jpg`;
                    
                } else {
                    ele.profile_path = `${this.PROFILE_IMAGE_PATH}w138_and_h175_face${ele.profile_path}`;
                }
            })

            return response;
        }), retry(2), catchError(this.handleError));
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
