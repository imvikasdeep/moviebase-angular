import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPersonDetail } from '../interfaces/cast.model';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    API_URL:String = environment.API_BASE_URL;
    IMAGE_PATH:string = environment.IMAGE_PATH;
    POSTER_URL:String = environment.POSTER_URL;
    PROFILE_IMAGE_PATH:String = environment.PROFILE_IMAGE_PATH;

	constructor(
		private http: HttpClient,
		private datePipe:DatePipe
	) { }

    getPersonDetail(id:number): Observable<IPersonDetail> {
        return this.http.get<IPersonDetail>(`${this.API_URL}person/${id}`).pipe(retry(2), catchError(this.handleError))
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
