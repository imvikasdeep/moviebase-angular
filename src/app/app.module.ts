import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { DatePipe } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContainerWrapperComponent } from './components/container-wrapper/container-wrapper.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MovieCardComponent,
  HeadingComponent,
  NotFoundComponent,
  ContainerWrapperComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [
		DatePipe,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: InterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
