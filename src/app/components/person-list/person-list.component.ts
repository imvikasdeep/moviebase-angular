import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/cast.model';

import { PersonCardComponent } from '../person-card/person-card.component';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    imports: [PersonCardComponent]
})
export class PersonListComponent {

    @Input('personList') personList:IPerson[] = [];
    @Input('isScroable') isScroable:boolean = false;

}
