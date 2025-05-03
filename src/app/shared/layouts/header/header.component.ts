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

    imagePath: string = environment.IMAGE_PATH;
    isDarkTheme: boolean = true;
    themeIcon: string = 'light_mode';

    ngOnInit(): void {
        this.isDarkTheme = this.getTheme() === 'dark' ? true : false;
        this.setIcon();
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme
        document.body.className = this.isDarkTheme ? 'dark' : 'light';
        this.setTheme();
        this.setIcon();
    }

    setIcon() {
        this.themeIcon = this.isDarkTheme ? 'light_mode' : 'dark_mode';
    }

    setTheme() {
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }

    getTheme(): string {
        return localStorage.getItem('theme') || 'dark'
    }

}

export enum Themes {
    Dark = 'dark',
    Light = 'light'
}
