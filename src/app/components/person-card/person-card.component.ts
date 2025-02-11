import { Component, HostBinding, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/cast.model';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss'],
    standalone: false
})
export class PersonCardComponent {

    @Input('person') person!:IPerson;
	@HostBinding('class') class = 'person';

}
