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
import { TrendingComponent } from './pages/trending/trending.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { GenereListComponent } from './components/genere-list/genere-list.component';
import { GenreComponent } from './pages/genre/genre.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MovieCardComponent,
        HeadingComponent,
        NotFoundComponent,
        ContainerWrapperComponent,
        TrendingComponent,
        TopRatedComponent,
        UpcomingComponent,
        MovieDetailComponent,
        PersonCardComponent,
        PersonListComponent,
        PersonDetailComponent,
        GenereListComponent,
        GenreComponent,
        SearchResultComponent,
        SearchFormComponent,
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
