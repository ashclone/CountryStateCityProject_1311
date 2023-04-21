import { CountrystatecityService } from './service/countrystatecity.service';
import { Component } from '@angular/core';
import { City } from './city';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CountryStateCityProject_1311';
  listCountry!: Country[];
  countrySelected!: string;
  listState!: State[];
  selectedState!: string;
  listCity!: City[];

  constructor(private countrystatecityService: CountrystatecityService) {}

  ngOnInit() {
    this.fetchCountry();
  }

  private fetchCountry() {
    this.countrystatecityService.getCountry().subscribe((data) => {
      this.listCountry = data;
      console.log('Countries fetched', this.listCountry);
    });
  }
  onCountrySelected(countryIso: any) {
    this.countrystatecityService
      .getStateOfSelectedCountry(countryIso)
      .subscribe((data) => {
        this.listState = data;
        console.log('States Retrieved', this.listState);
      });
  }
  onStateSelected(
    countryparam = this.countrySelected,
    stateparam = this.selectedState
  ) {
    this.countrystatecityService
      .getCitiesOfSelectedState(countryparam, stateparam)
      .subscribe((data) => {
        this.listCity = data;
        console.log('Cities retrieved', this.listCity);
      });
  }
}
