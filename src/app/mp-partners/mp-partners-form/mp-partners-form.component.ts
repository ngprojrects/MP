import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mp-partners-form',
  templateUrl: './mp-partners-form.component.html',
  styleUrls: ['./mp-partners-form.component.css']
})
export class MpPartnersFormComponent implements OnInit {

  PartnersForm: FormGroup;
  states: any;
  countries: any;
  constructor(fb: FormBuilder) {
    this.PartnersForm = fb.group({
      name: ['', Validators.required],
      brand: '',
      streetAddress: '',
      city: '',
      country: '',
      state: '',
      postalCode: '',
      phoneNumber: '',
      websiteUrl: ''
    });
    this.states = ['Waticon', 'Coim', 'Cegar'];
    this.countries = ['US', 'UK', 'London'];
  }

  ngOnInit() { }

  onSubmit(formValues: any) {
    let value: string = formValues.name + ',' + formValues.brand + ',' + formValues.streetAddress
      + ',' + formValues.city + ',' + formValues.country + ',' +
      formValues.state + ',' + formValues.postalCode + ',' + formValues.phoneNumber + ',' + formValues.websiteUrl;

    localStorage.setItem('new', value);
  }
}
