import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPersonDetail } from 'src/app/interfaces/cast.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
    selector: 'app-person-detail',
    templateUrl: './person-detail.component.html',
    styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent {

    personId!: number;
    person!: IPersonDetail;

    constructor(
        private activatedRoute: ActivatedRoute,
        private _personService: PersonService
    ) {

    }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe((params) => {
            this.personId = params["id"];

            this._personService.getPersonDetail(this.personId).subscribe(res => {
                this.person = res;
                console.log(res);
                
            })
        })

    }
}
