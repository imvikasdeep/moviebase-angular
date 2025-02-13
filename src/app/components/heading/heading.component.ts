import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss'],
    imports: [RouterLink]
})
export class HeadingComponent {

	@Input('heading') heading:string = ''
	@Input('isHomePage') isHomePage:boolean = false

}
