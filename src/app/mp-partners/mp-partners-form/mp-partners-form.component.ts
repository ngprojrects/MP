import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/models/partner';
import { GetInboxService } from 'src/app/services/get-inbox.service';

@Component({
  selector: 'app-mp-partners-form',
  templateUrl: './mp-partners-form.component.html',
  styleUrls: ['./mp-partners-form.component.css']
})
export class MpPartnersFormComponent implements OnInit {

  brands = ['Select Brand', 'BT&T', 'CRds', 'GTm'];
  states = ['Select State'];
  countries = ['Select Country', 'US', 'UK', 'London'];
  partnerValues = { name: '', brand: this.brands[0], streetAddress: '', city: '', country: this.countries[0], state: this.states[0], zip: '', phone: '', url: '' };

  namePattern = '^[a-z0-9_-]{8,15}$';
  postalCodePattern = '^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$';
  phonePattern = "\(\d{3}\)\d{3}\-\d{4}";
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  urlPattern = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'
  constructor(public getApi: GetInboxService) {

  }
  ngOnInit() {
    this.getApi.getApiModel('assets/countryStates.json').subscribe(res => {
      res.forEach(element => {
        this.states.push(element.name)
      });
    })
  }

  onSubmit(formValues: any) {

  }
}
