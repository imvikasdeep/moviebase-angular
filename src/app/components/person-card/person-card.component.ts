import { Component, HostBinding, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/cast.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss'],
    imports: [RouterLink]
})
export class PersonCardComponent {

    @Input('person') person!:IPerson;
	@HostBinding('class') class = 'person';

}
