import {Component} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {FavoriteService} from "../service/favourite-service.service";

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})


export class CountriesComponent {
    searchCountry = ''
    myData$: any

    constructor(public dataService: ServiceService) {
    }

    ngOnInit(): void {
        this.dataService.getData().subscribe((data: any) => {
            this.myData$ = data;
        });
    }

}
