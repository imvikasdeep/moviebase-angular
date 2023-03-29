import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class InterceptorService implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const keyParams = (req.params ? req.params : new HttpParams()).set('api_key', environment.API_KEY)		
		
		const keyReq = req.clone({
			params: keyParams
		});
		
		return next.handle(keyReq);

	}
}