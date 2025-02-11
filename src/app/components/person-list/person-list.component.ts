import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/cast.model';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss'],
    standalone: false
})
export class PersonListComponent {

    @Input('personList') personList:IPerson[] = [];
    @Input('isScroable') isScroable:boolean = false;

}
