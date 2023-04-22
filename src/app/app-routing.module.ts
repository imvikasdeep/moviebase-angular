import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

const routes: Routes = [
    
    {path: 'movie/:id', component: MovieDetailComponent},
    
    {path: 'person/:id', component: PersonDetailComponent},

	{ path: 'trending', component: TrendingComponent },
	{ path: 'top-rated', component: TopRatedComponent },
	{ path: 'upcoming', component: UpcomingComponent },
	
	{ path: '', component: HomeComponent },
	{ path: '**', component:NotFoundComponent  }

];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
