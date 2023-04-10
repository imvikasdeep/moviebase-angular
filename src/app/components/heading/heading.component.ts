import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-heading',
	templateUrl: './heading.component.html',
	styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {

	@Input('heading') heading:string = ''
	@Input('isHomePage') isHomePage:boolean = false

}
