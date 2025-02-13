import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterLink } from '@angular/router';
import { GenereListComponent } from '../../../components/genere-list/genere-list.component';
import { SearchFormComponent } from '../../../components/search-form/search-form.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [RouterLink, GenereListComponent, SearchFormComponent]
})
export class HeaderComponent {

	imagePath:string = environment.IMAGE_PATH

}
