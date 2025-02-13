import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ], providers: [
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule { }
